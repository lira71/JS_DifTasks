setInterval (function (){

    let currentDate = new Date();
    let today = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    function zeroZero(a){
	    if (a > 0 && a < 10) { 
	    	return '0' + a;
	    } else { return a;}
    };

    document.querySelector('body').innerHTML = zeroZero(today) + '.' + zeroZero(month) + '.' + zeroZero(year) + ' ' + '-' + ' ' + zeroZero(hour) + ':' + zeroZero(minute) + ':' + zeroZero(seconds);
 
    return;
}, 1000);



