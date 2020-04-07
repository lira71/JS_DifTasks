
 window.onload = function () {
	let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

	let days = document.querySelector('.days');
	let element;
	let date = new Date;

		for (let i = 0; i < week.length; i++) {
			element = document.createElement('li');
				if (i == 5 || i == 6) {
					element.classList.add('weekend');
				}

				if (((i + 1) == date.getDay()) || ((i == 6) && (date.getDay() == 0))) {
					element.classList.add('current');
				}
			element.textContent = week[i];
			days.appendChild(element);
		}
	
}