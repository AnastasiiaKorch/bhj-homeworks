const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', loading);

function loading(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.onprogress = function (event) {
        progress.value = event.loaded / 100000;
    }
    xhr.send(formData);
}