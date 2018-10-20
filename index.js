export const copyToClipboard = (text) => {
    const aux = document.createElement('input');

    aux.setAttribute('value', text);

    document.body.appendChild(aux);

    aux.select();

    document.execCommand('copy');

    document.body.removeChild(aux);
}

export const copyFromDOM = (node) => {
    const range = document.createRange();
    range.selectNode(node);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    window.getSelection();

    document.execCommand('copy');

    window.getSelection().removeAllRanges();
}