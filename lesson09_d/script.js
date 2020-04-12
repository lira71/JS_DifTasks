setInterval (function(){

    let currentDate = new Date();
    let week = currentDate.getDay();
    let today = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let weeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let rightHour = function(a) {
    let wordHour;
    if ((a === 1) || (a > 20 && a % 10 === 1)) {
        wordHour = 'час';}
    else if ((a >= 2 && a <= 4) || (a > 20 && a % 10 >= 2 && a % 10 <= 4)) {
        wordHour = 'часа';
    } else {wordHour = 'часов';}
    return wordHour;
};

rightHour(hour);

let rightMinute = function(a) {
    let wordMinute;
    if ((a === 1) || (a > 20 && a % 10 === 1)) {
        wordMinute = 'минута';}
    else if ((a >= 2 && a <=4) || (a > 20 && a % 10 >= 2 && a % 10 <= 4)) {
        wordMinute = 'минуты';
    } else {wordMinute = 'минут';}
    return wordMinute;
};

rightMinute(minute);

let rightSeconds = function(a) {
    let wordSeconds;
    if ((a === 1) || (a > 20 && a % 10 === 1)) {
        wordSeconds = 'секунда';}
    else if ((a >= 2 && a <=4) || (a > 20 && a % 10 >= 2 && a % 10 <= 4)) {
        wordSeconds = 'секунды';
    } else {wordSeconds = 'секунд';}
    return wordSeconds;
};

document.querySelector('body').innerHTML = 'Сегодня ' + weeks[week] + ', ' + today + ' ' + months[month] + ' ' + year + ' ' + 'года' + ', ' + hour + ' ' + rightHour(hour) + ' ' + minute + ' ' + rightMinute(minute) + ' ' + seconds + ' ' + rightSeconds(seconds);
return;
}, 1000);




