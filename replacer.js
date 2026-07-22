/*
 * uni+
 * Replacer Component (Standard Clean Edition)
 */

class Replacer {
    replaceInput(el, start, end, output) {
        const value = el.value;
        el.value = value.substring(0, start) + output + value.substring(end);
        el.selectionStart = el.selectionEnd = start + output.length;
    }

    replaceContentEditable(targetWindow, start, end, output) {
        const sel = targetWindow.getSelection();
        if (!sel || sel.rangeCount === 0) return;
        const range = sel.getRangeAt(0);
        const node = sel.anchorNode;

        range.setStart(node, start);
        range.setEnd(node, end);
        range.deleteContents();

        const textNode = targetWindow.document.createTextNode(output);
        range.insertNode(textNode);
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        sel.removeAllRanges();
        sel.addRange(range);
    }
}