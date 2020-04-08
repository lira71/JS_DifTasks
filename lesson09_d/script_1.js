let dateId;

let currentDate = new Date();

function update(){

    let clockDate = document.getElementById('liveDate');

    function zeroZero(a){
	    if (a > 0 && a < 10) { 
	    	return '0' + a;
	    } else { return a;}
    };

    let today = currentDate.getDate();
    clockDate.children[0].innerHTML = zeroZero(today);

    let month = currentDate.getMonth() + 1;
    clockDate.children[1].innerHTML = zeroZero(month);

    let year = currentDate.getFullYear();
    clockDate.children[2].innerHTML = zeroZero(year);

    let hour = currentDate.getHours();
    clockDate.children[3].innerHTML = zeroZero(hour);

    let minute = currentDate.getMinutes();
    clockDate.children[4].innerHTML = zeroZero(minute);

    let seconds = currentDate.getSeconds();
    clockDate.children[5].innerHTML = zeroZero(seconds);
};

function clockDateStart(){
    dateId = setInterval(update, 1000);
    update();
};

clockDateStart();

//console.log(zeroZero(today) + '.' + zeroZero(month) + '.' + zeroZero(year) + ' ' + '-' + ' ' + zeroZero(hour) + ':' + zeroZero(minute) + ':' + zeroZero(seconds));