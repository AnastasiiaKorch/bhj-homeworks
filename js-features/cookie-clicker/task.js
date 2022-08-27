const element = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let count = 0;


element.onclick = function () {
   clicker.textContent = ++count;
   element.style.width = count % 2 === 0 ? '200px' : '300px';
}
