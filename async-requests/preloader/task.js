const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readystatechange', loading);

function loading() {
    if(xhr.readyState === xhr.DONE ) {
        loader.classList.toggle('loader_active');

        let data = JSON.parse(xhr.responseText);
        let valute = data.response.Valute;

        for (let item in valute) {
            items.insertAdjacentHTML("afterBegin",
            `<div class="item">
              <div class="item__code">${valute[item].CharCode}
              </div>
              <div class="item__value">${valute[item].Value}
              </div>
              <div class="item__currency">руб.
              </div>
            </div>`);
        }
    }
}

xhr.send();
