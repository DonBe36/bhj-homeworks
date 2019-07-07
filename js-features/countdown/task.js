const count = function() {
    const timer = document.getElementById("timer");
    if (timer.textContent == 0) {
        alert(`Вы победили в конкурсе!`);
        clearInterval(interval);

    } else {
        timer.textContent -= 1;
    };
};  
  
let interval = setInterval(count, 1000);
