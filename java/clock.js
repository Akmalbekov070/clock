const a = 3;
console.log(a);

const deg = 6;
const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#mill');
const bi = document.querySelector('#bi');
const bi2 = document.querySelector('#bi2');
const list = document.querySelector('#list');

const timers = document.querySelector('#timers'),
	time = document.querySelector('#time'),
	hourested = document.querySelector('#hourested');

//timer==========

time.addEventListener('click', () => {
	timers.style.display = 'block';
	hourested.style.display = 'none';
});

//buttonn=========
bi.addEventListener('click', () => {
	bi2.style.display = 'block';
	bi.style.display = 'none';
	list.style.display = 'block';
});
bi2.addEventListener('click', () => {
	bi2.style.display = 'none';
	bi.style.display = 'block';
	list.style.display = 'none';
});
//button end

//clock
const setClock = () => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * deg;
	let ss = day.getSeconds() * deg;

	hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	min.style.transform = `rotateZ(${mm}deg)`;
	sec.style.transform = `rotateZ(${ss}deg)`;
};

setClock();

setInterval(setClock, 1000);
//clock end
