let weekAll = [ ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
                ['Monday, Tuesday, Wednsday, Thursday, Friday, Saturday, Sunday']
];

let yourLang = prompt('Выберите язык: ru/en');
let lang = yourLang.toLowerCase();

let result = lang === 'ru' ? weekAll[0] : weekAll[1];
alert (result);
