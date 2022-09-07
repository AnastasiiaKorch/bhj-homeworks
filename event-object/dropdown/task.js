const links = document.querySelectorAll(".dropdown__link");
const selected = document.querySelector(".dropdown__value");
const downList = document.querySelector(".dropdown__list");

selected.onclick = () => {
  if(downList.classList.contains("dropdown__list_active")){
    downList.classLisr.remove("dropdown__list_active")
    return
  }
  downList.classList.add("dropdown__list_active")
  }

for(link of links){
  let button = link.closest(".dropdown__item").querySelector(".dropdown__link")
  button.onclick = () => {
    downList.classList.add("dropdown__list_active")
    selected.textContent = button.textContent;
    return false;
  }
}