let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = "json";


xhr.addEventListener('readystatechange', answer);

function answer() {
    if( xhr.readyState === xhr.DONE ) {
        pollTitle.innerText = xhr.response.data.title;

        for (let answers of xhr.response.data.answers) {
            const text = `<button class="poll__answer">${answers}</button>`;
            pollAnswers.insertAdjacentHTML('beforeEnd', text);
        }

        for (let button of document.getElementsByClassName("poll__answer")) {
            button.addEventListener('click', () => {
                alert('Спасибо! Ваш голос засчитан');
            })
        }
    }
}
xhr.send();