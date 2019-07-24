const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

for (let a in hasTooltip) {
	hasTooltip[a].addEventListener("click", (e) => {
		e.preventDefault();
		let tooltip = Array.from(document.querySelectorAll(".tooltip")); 
		for (let i in tooltip) {
			tooltip[i].remove(); 
		}
		hasTooltip[a].insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${e.x}px; top: ${e.y}px">${e.target.title}</div>`);
	});
};

window.addEventListener("click", (e) => { 								
	if (e.target.className != "has-tooltip") { 							
		let tooltip = Array.from(document.querySelectorAll(".tooltip"));
		for (let i in tooltip) {
			tooltip[i].remove();
		};
	};
});