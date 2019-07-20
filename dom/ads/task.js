let cur = 1;
const cases = document.querySelectorAll('.rotator__case');

const show = function(cases) {
    setInterval(() => {
        for(let i = 0; i < cases.length; i++) {
            for(let j = 0; j < cases.length; j++) {
                cases[j].classList.remove('rotator__case_active');
			}
			cases[cur].classList.add('rotator__case_active');			
		}
		cur++;
	}, 1000);
}
show(cases);