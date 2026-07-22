/*
 * uni+
 * Autocomplete UI Component
 */

class AutocompleteUI {
    constructor() {
        this.element = null;
        this.selectedIndex = 0;
        this.currentResults = [];
        this.onSelectCallback = null;
        this.init();
    }

    init() {
        // 안전하게 현재 문서(document)를 기준으로 팝업을 빌드합니다.
        if (document.getElementById("uni-plus-popup")) return;

        const popup = document.createElement("div");
        popup.id = "uni-plus-popup";
        
        // 팝업 기본 스타일 레이아웃 정의 (절대 좌표 및 시인성 확보)
        popup.style.position = "absolute";
        popup.style.background = "#ffffff";
        popup.style.border = "1px solid #d0d7de";
        popup.style.borderRadius = "6px";
        popup.style.boxShadow = "0 8px 24px rgba(140,149,159,0.2)";
        popup.style.zIndex = "999999";
        popup.style.fontFamily = "system-ui, -apple-system, sans-serif";
        popup.style.fontSize = "14px";
        popup.style.padding = "4px 0";
        popup.style.display = "none"; // 초기에는 숨김 처리
        popup.style.maxHeight = "200px";
        popup.style.overflowY = "auto";
        popup.style.minWidth = "180px";

        document.body.appendChild(popup);
        this.element = popup;
    }

    // 팝업을 커서 위치 근처에 띄우는 함수
    show(rect, results, onSelect) {
        this.currentResults = results;
        this.onSelectCallback = onSelect;
        this.selectedIndex = 0;

        if (results.length === 0) {
            this.hide();
            return;
        }

        // 팝업 내용 갱신
        this.render();

        // 좌표 지정 (텍스트 커서 영역 바로 아래쪽 부근에 위치)
        if (rect) {
            this.element.style.left = `${rect.left + window.scrollX}px`;
            this.element.style.top = `${rect.bottom + window.scrollY + 5}px`;
        }
        this.element.style.display = "block";
    }

    hide() {
        if (this.element) {
            this.element.style.display = "none";
            this.currentResults = [];
        }
    }

    isVisible() {
        return this.element && this.element.style.display === "block";
    }

    render() {
        if (!this.element) return;
        this.element.innerHTML = "";

        this.currentResults.forEach((item, index) => {
            const row = document.createElement("div");
            row.style.padding = "6px 12px";
            row.style.cursor = "pointer";
            row.style.display = "flex";
            row.style.justifyContent = "space-between";
            row.style.alignItems = "center";
            row.style.transition = "background 0.1s ease";

            // 선택된 항목 하이라이트 스타일 제어
            if (index === this.selectedIndex) {
                row.style.background = "#0366d6";
                row.style.color = "#ffffff";
            } else {
                row.style.background = "transparent";
                row.style.color = "#24292e";
            }

            // 기호와 트리거명 노출 구조 정의
            row.innerHTML = `
                <span style="font-weight: bold; margin-right: 12px;">${item.symbol.output}</span>
                <span style="font-size: 12px; opacity: 0.7;">${item.trigger}</span>
            `;

            // 마우스 클릭 시 즉시 치환 이벤트 연결
            row.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.selectedIndex = index;
                if (this.onSelectCallback) this.onSelectCallback(item);
                this.hide();
            });

            this.element.appendChild(row);
        });
    }

    // 키보드 위아래 조작 기능
    moveUp() {
        if (this.selectedIndex > 0) {
            this.selectedIndex--;
            this.render();
            this.scrollToView();
        }
    }

    moveDown() {
        if (this.selectedIndex < this.currentResults.length - 1) {
            this.selectedIndex++;
            this.render();
            this.scrollToView();
        }
    }

    getSelectedItem() {
        return this.currentResults[this.selectedIndex] || null;
    }

    scrollToView() {
        if (!this.element) return;
        const activeRow = this.element.children[this.selectedIndex];
        if (activeRow) {
            activeRow.scrollIntoView({ block: "nearest" });
        }
    }
}