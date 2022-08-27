const start = document.getElementById("timer");

function count() {
    start.textContent -= 1;

    if (start.textContent <= 0) {
        alert('Вы выиграли');
        clearInterval(timer);
    }

}

const timer = setInterval(count, 1000);