(function() {
    const engine = new InputEngine();
    
    document.addEventListener("compositionstart", () => engine.compositionStart());
    document.addEventListener("compositionend", () => engine.compositionEnd());
    document.addEventListener("input", (event) => engine.handleInput(event));
})();