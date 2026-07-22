/*
 * uni+
 * Symbol Registry (Strict Filter Edition)
 */

class SymbolRegistry {
    constructor(database) {
        this.database = database;
        this.symbolMap = new Map();
        this.aliasMap = new Map();
        this.lengthMap = new Map();
        this.sortedLengths = [];
        this.build();
    }

    build() {
        this.symbolMap.clear();
        this.aliasMap.clear();
        this.lengthMap.clear();

        for (const [categoryName, category] of Object.entries(this.database)) {
            if (category.enabled === false) continue;
            for (const symbol of category.symbols) {
                this.addInputs(symbol.latex, symbol, false);
                this.addInputs(symbol.unicode, symbol, false);
                this.addInputs(symbol.aliases, symbol, true);
            }
        }
        this.updateSortedLengths();
    }

    addInputs(inputs, symbol, isAlias = false) {
        if (!inputs) return;
        for (const input of inputs) {
            if (isAlias) {
                this.aliasMap.set(input, symbol);
            } else {
                this.add(input, symbol);
            }
        }
    }

    add(trigger, symbol) {
        if (!trigger) return;
        this.symbolMap.set(trigger, symbol);
        const length = trigger.length;
        if (!this.lengthMap.has(length)) this.lengthMap.set(length, []);
        const list = this.lengthMap.get(length);
        if (!list.includes(trigger)) {
            list.push(trigger);
            this.updateSortedLengths();
        }
    }

    updateSortedLengths() {
        this.sortedLengths = [...this.lengthMap.keys()].sort((a, b) => b - a);
    }

    // u+xxxx 패턴을 완벽하게 검사하는 정규식 필터
    parseUnicodeTrigger(text) {
        if (!text) return null;
        
        // 대소문자 구분 없이 u+xxxx 형태 뒤에 '공백' 또는 '이탈 문자'가 붙었는지 검사
        const match = text.match(/[uU]\+([0-9a-fA-F]{1,6})([^0-9a-fA-F]?)$/);
        if (!match) return null;

        const fullTrigger = match[0];
        const hexCode = match[1];
        const tailChar = match[2];

        return {
            trigger: fullTrigger,
            hex: hexCode,
            tail: tailChar,
            index: text.length - fullTrigger.length
        };
    }

    findAt(text) {
        if (!text) return null;

        // 1. 유니코드 실시간 이탈 변환 검사 (텍스트 타이핑 중 스페이스나 이탈 문자 감지 시 작동)
        const uniMatch = this.parseUnicodeTrigger(text);
        if (uniMatch && uniMatch.tail !== "") {
            try {
                const char = String.fromCodePoint(parseInt(uniMatch.hex, 16));
                const finalOutput = uniMatch.tail === " " ? char : char + uniMatch.tail;
                
                return {
                    trigger: uniMatch.trigger,
                    start: uniMatch.index,
                    end: text.length,
                    output: finalOutput
                };
            } catch (e) {}
        }

        // 2. 기존 데이터베이스 매칭 로직
        for (const length of this.sortedLengths) {
            if (text.length < length) continue;
            const trigger = text.slice(-length);
            const symbol = this.symbolMap.get(trigger);
            if (!symbol) continue;

            const hasLongerMatch = [...this.symbolMap.keys()].some(key => 
                key.length > trigger.length && key.startsWith(trigger)
            );
            if (hasLongerMatch) continue;

            return {
                trigger,
                start: text.length - length,
                end: text.length,
                output: symbol.output
            };
        }
        return null;
    }

    // 💡 불안정했던 가짜 미리보기 로직을 완전히 걷어내고 정밀 매칭만 수행하도록 수정
    search(prefix) {
        if (!prefix) return [];
        const results = [];
        const lowerPrefix = prefix.toLowerCase();

        // 1. 만약 입력 중인 접두사가 u+로 시작한다면
        if (lowerPrefix.startsWith("u+")) {
            const hexPart = lowerPrefix.substring(2);
            
            // 데이터베이스 내부에 해당 16진수 코드포인트나 유니코드 트리거가 매칭되는 실제 기호가 있는지 검사
            for (const [trigger, symbol] of this.symbolMap) {
                if (trigger.toLowerCase().startsWith(lowerPrefix)) {
                    results.push({ trigger, symbol });
                }
            }
        } else {
            // 2. u+ 입력이 아닌 일반 슬래시(\) 기반 라텍스 명령어 검색
            for (const [trigger, symbol] of this.symbolMap) {
                if (trigger.startsWith(prefix)) {
                    results.push({ trigger, symbol });
                }
            }
        }

        // 3. 별칭(alias) 맵에서도 접두사 매칭 수행
        for (const [alias, symbol] of this.aliasMap) {
            if (alias.startsWith(prefix)) {
                const mainTrigger = symbol.latex?.[0] || alias;
                if (!results.some(r => r.trigger === mainTrigger)) {
                    results.push({ trigger: mainTrigger, symbol });
                }
            }
        }
        return results;
    }
}