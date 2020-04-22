window.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.querySelector('.start');
    const resetBtn = document.querySelector('.reset');
    const img = document.querySelector('img');

    let catWalk;
    let count = 0;
    let animateStart = false;

    let start = function () {
        catWalk = requestAnimationFrame(start);
        count++;
        if (count < 300) {
            img.style.left = count * 2 + 'px';
        } else {
            cancelAnimationFrame(catWalk);
        }
    };

    resetBtn.addEventListener('click', () => {
        count = 0;
        animateStart = false;
        img.style.left = 0;
        cancelAnimationFrame(catWalk);
    });

    startBtn.addEventListener('click', function () {
        if (!animateStart) {
            animateStart = true;
            start();
        } else {
            animateStart = false;
            cancelAnimationFrame(catWalk);
        }

    });


});