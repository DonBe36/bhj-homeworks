const slides = document.querySelectorAll('.slider__item');
const right = document.querySelector('.slider__arrow_next');
const left = document.querySelector('.slider__arrow_prev')

let slideInd = 0;

right.onclick = function () {
	slideInd++;
	for (let item of Array.from(slides)) {
		item.className = 'slider__item';
	};
	if (slideInd >= slides.length) {
		slideInd = 0;
	};
	slides[slideInd].className = 'slider__item slider__item_active';
};

left.onclick = function () {
	slideInd--;
	for (let item of Array.from(slides)) {
		item.className = 'slider__item';
	};
	if (slideInd < 0) {
		slideInd = slides.length - 1;
	};
	slides[slideInd].className = 'slider__item slider__item_active';
};