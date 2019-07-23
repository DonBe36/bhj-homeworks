const rotatorCase = document.querySelectorAll(".rotator__case");
let Counter = 0;

function selectorRotator() {
		let presentValueRotator = rotatorCase[Counter];
		presentValueRotator.classList.remove("rotator__case_active");
		if (Counter === rotatorCase.length - 1) {
			Counter = 0;
		} else {
			Counter++;
		};
		presentValueRotator = rotatorCase[Counter];
		presentValueRotator.classList.add("rotator__case_active");
};

setInterval(selectorRotator, 1000);