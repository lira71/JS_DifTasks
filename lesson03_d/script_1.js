let weekRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let weekEn = 'Monday, Tuesday, Wednsday, Thursday, Friday, Saturday, Sunday';

let yourLang = prompt('Выберите язык: ru/en');
let lang = yourLang.toLowerCase();

switch (lang){
    case 'ru':
        alert(weekRu);
        break;
    case 'en':
        alert(weekEn);
        break;
    default: 
        alert('Проверьте введённые данные');
}