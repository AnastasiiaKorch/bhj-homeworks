const main = document.getElementById("modal_main");
const success = document.getElementById("modal_success");
const ShowSuccess = document.querySelector(".show-success");
const allClose = document.querySelectorAll("div.modal__close");

main.classList.add("modal_active");

ShowSuccess.onclick = () => {
  main.classList.remove("modal_active");
  success.classList.add("modal_active");
}
allClose.forEach(item => {
  item.onclick = () => {
    item.closest(".modal").classList.remove("modal_active")

  }
})

