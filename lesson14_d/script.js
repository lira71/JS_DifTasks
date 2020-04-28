'use strict';

const body = document.querySelector('body');
function DomElement(selector, height, width, bg, fontSize, pos = 'static') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = pos;
};

DomElement.prototype.move = function (event) {
    const div = document.querySelector('.block');
    let left = parseInt(div.style.left);
    let top = parseInt(div.style.top);
    if (!isNaN(div.style.left)) {
        left = 0;
    }
    if (!isNaN(div.style.top)) {
        top = 0;
    }
    if (event.keyCode === 37) {
        left += -10;
        div.style.left = left + 'px';
    } else if (event.keyCode === 38) {
        top += -10;
        div.style.top = top + 'px';
    } else if (event.keyCode === 39) {
        left += +10;
        div.style.left = left + 'px';
    } else if (event.keyCode === 40) {
        top += 10;
        div.style.top = top + 'px';
    }
};

DomElement.prototype.render = function () {
    let newElement;
    if (this.selector[0] === '.') {
        newElement = document.createElement('div');
        newElement.classList.add('block');
    } else if (this.selector[0] === '#') {
        newElement = document.createElement('p');
        newElement.classList.add('best');
    }

    newElement.style.cssText = `
    height:  ${this.height}px;
    width:  ${this.width}px;
    background:  ${this.bg};
    font-size:  ${this.fontSize}px;
    position: ${this.position};
  `;
    newElement.textContent = 'ya sdelal\`';
    body.append(newElement);
    document.addEventListener('keydown', this.move);
};

document.addEventListener('DOMContentLoaded', () => {
    let newDomSquare = new DomElement('.id', 100, 100, 'red', 20, 'absolute');
    newDomSquare.render();
});