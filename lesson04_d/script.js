
let slised;
let aTrim;

const fun = function(a){

    if(typeof a === 'string'){
        slised = a.slice(0, 29);
        aTrim = a.trim();
        aTrim;
        if(slised.length < a.length){return (slised += '...');}
        else {return aTrim};
}   else {alert('Неверный тип данных');}

};
let  rez = fun('112999999999999999999999999999999999999999999999999992'); 
console.log(rez);  







