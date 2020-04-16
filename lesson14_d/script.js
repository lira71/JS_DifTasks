'use strict';

const body = document.querySelector('body');
function DomElement(selector, height, width, bg, fontSize, pos = 'static') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = pos;
}

function first(a) {
    const div = document.querySelector('.block');
    let left = parseInt(div.style.left);
    let top = parseInt(div.style.top);
    if (!isNaN(div.style.left)) {
        left = 0;
    }
    if (!isNaN(div.style.top)) {
        top = 0;
    }
    if (a.keyCode === 37) {
        left += -10;
        div.style.left = left + 'px';
    } else if (a.keyCode === 38) {
        top += -10;
        div.style.top = top + 'px';
    } else if (a.keyCode === 39) {
        left += +10;
        div.style.left = left + 'px';
    } else if (a.keyCode === 40) {
        top += 10;
        div.style.top = top + 'px';
    }
}

DomElement.prototype.render = function () {
    let newElem;
    if (this.selector[0] === '.') {
        newElem = document.createElement('div');
        newElem.classList.add('block');
    } else if (this.selector[0] === '#') {
        newElem = document.createElement('p');
        newElem.classList.add('best');
    }

    newElem.style.cssText = `
    height:  ${this.height}px;
    width:  ${this.width}px;
    background:  ${this.bg};
    font-size:  ${this.fontSize}px;
    position: ${this.position};
  `;
    newElem.textContent = '12345';
    body.append(newElem);
    document.addEventListener('keydown', first);
};

document.addEventListener('DOMContentLoaded', () => {
    let newDomSquare = new DomElement('.id', 100, 100, 'blue', 30, 'absolute');
    newDomSquare.render();
});