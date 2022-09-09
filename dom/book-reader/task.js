const sizes = document.getElementsByClassName("font-size");
const book = document.getElementById("book");
let element = document.querySelector(".font-size_active");
const activeSize = "font-size_active";

for (let size of sizes) {
  size.onclick = () => {
    if (size.getAttribute("data-size") === "small"){
      deleteClass();
      size.classList.add(activeSize);
      book.classList.remove("font-size_big");
      book.classList.add("font-size_small")
    }
    else if(size.getAttribute("data-size") === "big"){
       deleteClass();
       size.classList.add(activeSize);
       book.classList.remove("font-size_small");
       book.classList.add("font-size_big");
    }
    else{
      deleteClass();
      size.classList.add(activeSize);
      book.classList.remove("font-size_small");
      book.classList.remove("font-size_big");
      }
   return false;
    }
}

function deleteClass() {
    element.classList.remove("font-size_active");
}
