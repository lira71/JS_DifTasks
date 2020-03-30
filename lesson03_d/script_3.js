
let question = prompt('Введите Ваше имя:');
let yourName = question.toLowerCase();

let namePerson = 
    (yourName === 'артём') ? 'Директор' :
    (yourName === 'максим') ? 'Преподаватель' : 'Студент';

console.log(namePerson);
