'use strict';

const isNum = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNum = function(min, max) {                       //Функция выбора рандомного числа
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


let counter = 9;

const getCounter = function() {                //число попыток
    
    return function() {
        return counter--;
    }
};


const gameRandom = function(attemps) {                          //сама игра главная функция
    const randomNum = getRandomNum(1, 100);                         //задаём диапазон чисел от 1 до 100
    console.log(randomNum);

    const counter = getCounter();                        //задаём переменной значение функции числа попыток

    return (function checkNumber() {
        const count = counter();
        const userNumber = prompt('Угадай число от 1 до 100');

        if (isNum(userNumber)){
            let repeat = false;
            if (count <= attemps && count > 0) {
                const num = +userNumber;
                if (num > randomNum) {
                    
                    alert('Загаданное число меньше, осталось попыток:' + ' ' + count);
                    return checkNumber();
                }
                if (num < randomNum) {
                    
                    alert('Загаданное число больше, осталось попыток:' + ' ' + count);
                    return checkNumber();
                }
                repeat = confirm('Поздравляю, Вы угадали!!! Хотите сыграть ещё раз?');
            }
            else {
                repeat = confirm('Попытки закончились! Хотите сыграть ещё?');
            }
            console.log(repeat);

            if (repeat) gameRandom(attemps);
        } else {
            if (userNumber !== null){
                alert('Введи число!');
                checkNumber();
            }
        }
        alert('Ну, нет, так нет :) пока-пока!');
    }());
};

gameRandom(counter);