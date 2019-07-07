const imgCook = document.getElementById("cookie");
const click = document.getElementById("clicker__counter");
const img = function(){
    imgCook.width = 200;
};

function counterClicks() {
    click.textContent++;
    imgCook.width = 300;
    setTimeout(img, 100);
};

imgCook.onclick = counterClicks;

