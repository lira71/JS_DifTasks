let weekRu = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let weekEn = 'Monday, Tuesday, Wednsday, Thursday, Friday, Saturday, Sunday';

let yourLang = prompt('Выберите язык: ru/en');
let lang = yourLang.toLowerCase();
if (lang === 'ru'){
    alert(weekRu);
} else if (lang === 'en'){
    alert(weekEn);
} else {
    alert('Проверьте введённые данные');
}

