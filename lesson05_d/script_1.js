let n = 100;

for (let i = 2; i <= n; i++) {
    let simpleNumber = 1;
    if (i > 2 && i % 2 != 0)
    {
        for (let j = 3; j*j <= i ; j = j + 2)
        {
            if (i%j == 0)
            {
                simpleNumber = 0;
                break;
            }
        }
    }
    else if (i != 2) simpleNumber = 0;
    if (simpleNumber == 1) {console.log(i + ':' + ' ' + 'Делители этого числа:' + ' ' + '1 и ' + i);}
}

