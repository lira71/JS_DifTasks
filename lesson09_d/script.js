let dateId;
let currentDate = new Date();

let weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

function update(){

let clockDate = document.getElementById('liveDate');

let week = currentDate.getDay() - 1;
clockDate.children[0].innerHTML = weeks[week];

let today = currentDate.getDate();
clockDate.children[1].innerHTML = today;

let month = currentDate.getMonth();
clockDate.children[2].innerHTML = months[month];

let year = currentDate.getFullYear();
clockDate.children[3].innerHTML = year;

let hour = currentDate.getHours();
clockDate.children[4].innerHTML = hour;

let rightHour = function(a) {
    let wordHour;
    if ((a === 1) || (a > 20 && a % 10 === 1)) {
        wordHour = 'час';}
    else if ((a >= 2 && a <= 4) || (a > 20 && a % 10 >= 2 && a % 10 <= 4)) {
        wordHour = 'часа';
    } else {wordHour = 'часов';}
    return wordHour;
};

clockDate.children[5].innerHTML = rightHour(hour);

let minute = currentDate.getMinutes();
clockDate.children[6].innerHTML = minute;

let rightMinute = function(a) {
    let wordMinute;
    if ((a === 1) || (a > 20 && a % 10 === 1)) {
        wordMinute = 'минута';}
    else if ((a >= 2 && a <=4) || (a > 20 && a % 10 >= 2 && a % 10 <= 4)) {
        wordMinute = 'минуты';
    } else {wordMinute = 'минут';}
    return wordMinute;
};

clockDate.children[7].innerHTML = rightMinute(minute);

let seconds = currentDate.getSeconds();
clockDate.children[8].innerHTML = seconds;

let rightSeconds = function(a) {
    let wordSeconds;
    if ((a === 1) || (a > 20 && a % 10 === 1)) {
        wordSeconds = 'секунда';}
    else if ((a >= 2 && a <=4) || (a > 20 && a % 10 >= 2 && a % 10 <= 4)) {
        wordSeconds = 'секунды';
    } else {wordSeconds = 'секунд';}
    return wordSeconds;
};

clockDate.children[9].innerHTML = rightSeconds(seconds);

};

function clockDateStart(){
    dateId = setInterval(update, 1000);
    update();
};

clockDateStart();

//console.log('Сегодня ' + weeks[week] + ', ' + today + ' ' + months[month] + ' ' + year + ' ' + 'года' + ', ' + hour + ' ' + rightHour(hour) + ' ' + minute + ' ' + rightMinute(minute) + ' ' + seconds + ' ' + rightSeconds(seconds));