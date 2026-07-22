/*
 * uni+
 * Input Engine (Keyboard Monopoly & Anti-Interference Edition)
 */

class InputEngine {
    constructor() {
        this.registry = new SymbolRegistry(symbolDatabase);
        this.replacer = new Replacer();
        this.ui = new AutocompleteUI();
        this.composing = false;
        this.isReplacing = false;
        
        this.setupKeyboardOverride();
    }

    setupKeyboardOverride() {
        // 💡 중요: 세 번째 인자를 true로 주어 '버블링'이 아닌 '캡처링' 단계에서 
        // 페이지 내의 다른 어떤 스크립트(구글 자동완성 등)보다 먼저 키를 낚아챕니다.
        document.addEventListener("keydown", (event) => {
            if (!this.ui.isVisible()) return;

            // 💡 우리 팝업이 켜져 있을 때 다루는 특수 키들 목록
            const targetKeys = ["ArrowDown", "ArrowUp", "Tab", "Escape"];

            if (targetKeys.includes(event.key)) {
                // 구글 검색창 등 원래 페이지 스크립트가 이 키 입력을 감지하지 못하도록 원천 봉쇄
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();

                if (event.key === "ArrowDown") {
                    this.ui.moveDown();
                } else if (event.key === "ArrowUp") {
                    this.ui.moveUp();
                } else if (event.key === "Tab") {
                    const selected = this.ui.getSelectedItem();
                    if (selected) {
                        this.executeUISelection(selected);
                    }
                } else if (event.key === "Escape") {
                    this.ui.hide();
                }
            }
        }, true); // <- true 필수: 최우선 순위 인터셉터 활성화
    }

    executeUISelection(selected) {
        const el = document.activeElement;
        if (!el) return;

        this.isReplacing = true;
        try {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                const cursor = el.selectionStart;
                const text = el.value.substring(0, cursor);
                
                const match = text.match(/[uU]\+[0-9a-fA-F]*$/);
                const startIdx = match ? text.length - match[0].length : text.lastIndexOf("\\");
                
                if (startIdx !== -1) {
                    this.replacer.replaceInput(el, startIdx, cursor, selected.symbol.output);
                }
            } else if (el.isContentEditable) {
                const sel = window.getSelection();
                if (sel && sel.rangeCount > 0) {
                    const node = sel.anchorNode;
                    const cursor = sel.anchorOffset;
                    const text = node.textContent.substring(0, cursor);
                    
                    const match = text.match(/[uU]\+[0-9a-fA-F]*$/);
                    const startIdx = match ? text.length - match[0].length : text.lastIndexOf("\\");
                    
                    if (startIdx !== -1) {
                        this.replacer.replaceContentEditable(window, startIdx, cursor, selected.symbol.output);
                    }
                }
            }
        } finally {
            this.isReplacing = false;
            this.ui.hide();
        }
    }

    handleInput(event, targetWindow = window) {
        if (this.composing || this.isReplacing) return;
        const el = event.target;

        if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
            this.checkAndSearch(el, "INPUT");
        } else if (el.isContentEditable || el.tagName === "BODY") {
            this.checkAndSearch(el, "EDITABLE", targetWindow);
        }
    }

    checkAndSearch(el, type, targetWindow = window) {
        let text = "";
        let rect = null;

        if (type === "INPUT") {
            const cursor = el.selectionStart;
            text = el.value.substring(0, cursor);
            rect = el.getBoundingClientRect();
        } else {
            const sel = targetWindow.getSelection();
            if (!sel || sel.rangeCount === 0) return;
            const node = sel.anchorNode;
            if (!node || node.nodeType !== Node.TEXT_NODE) return;
            const cursor = sel.anchorOffset;
            text = node.textContent.substring(0, cursor);
            
            const range = sel.getRangeAt(0).cloneRange();
            if (range.startOffset > 0) {
                range.setStart(node, range.startOffset - 1);
                rect = range.getBoundingClientRect();
            } else {
                rect = el.getBoundingClientRect();
            }
        }

        // 💡 [추가] 텍스트가 완전히 비어있다면 매칭 검사를 할 이유가 없으므로 즉시 종료
        if (!text || text.trim() === "") {
            this.ui.hide();
            return;
        }

        // 1. 실시간 완전 일치 자동 변환 테스트
        const result = this.registry.findAt(text);
        if (result) {
            this.ui.hide();
            this.isReplacing = true;
            try {
                if (type === "INPUT") {
                    this.replacer.replaceInput(el, result.start, result.end, result.output);
                } else {
                    this.replacer.replaceContentEditable(targetWindow, result.start, result.end, result.output);
                }
            } finally {
                this.isReplacing = false;
            }
            return;
        }

        // 2. 입력 접두사를 기반으로 자동완성 창 제어
        const match = text.match(/[uU]\+[0-9a-fA-F]*$/);
        let prefix = "";
        if (match) {
            prefix = match[0];
        } else {
            const lastSlash = text.lastIndexOf("\\");
            if (lastSlash !== -1) prefix = text.substring(lastSlash);
        }

        // 💡 [수정] prefix가 존재하고, 단순 빈 문자열("")이 아닐 때만 팝업을 띄우도록 엄격하게 제한
        if (prefix && prefix !== "") {
            const searchResults = this.registry.search(prefix);
            if (searchResults.length > 0) {
                this.ui.show(rect, searchResults, (selected) => {
                    this.executeUISelection(selected);
                });
                return;
            }
        }

        this.ui.hide();
    }
    
    compositionStart() { this.composing = true; }
    compositionEnd() {
        this.composing = false;
        const activeElement = document.activeElement;
        if (activeElement) {
            this.handleInput({ target: activeElement });
        }
    }
}