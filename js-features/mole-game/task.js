const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function checkWin() {
    if (dead.textContent == 10) {
        alert("Вы победили!");
        dead.textContent = 0;
        lost.textContent = 0;
    } else if(lost.textContent == 5) {
        alert("Вы проиграли!")
        dead.textContent = 0;
        lost.textContent = 0;
    };
};

const checkHole = function(clicked) {

    if (clicked.toElement.className == 'hole hole_has-mole'){
        dead.textContent++;
    };

    if (clicked.toElement.className == 'hole'){
        lost.textContent++;
    };

    checkWin();
};

let holes = document.getElementsByClassName("hole");

function getHole(index) {
    let hole = index;
    hole.onclick = checkHole;
};

for (let i = 0; i < holes.length; i++) {
    getHole(holes[i]);
};
