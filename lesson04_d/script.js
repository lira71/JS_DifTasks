
let slised;
let aTrim;

const fun = function(a){

    if(typeof a === 'string'){
        a = a.trim();
        slised = a.slice(0, 29);
        
        if(slised.length < a.length){return (slised += '...');}
        else {return slised};
}   else {alert('Неверный тип данных');}

};
let  rez = fun('   123456789012345678901234567890    '); 
console.log(rez);  







