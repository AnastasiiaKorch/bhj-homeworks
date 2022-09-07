let links = document.querySelectorAll(".tab");
let content = document.querySelectorAll(".tab__content");

function activeElement (i) {
   for (let link of links) {
      link.classList.remove("tab_active");
   }
   links[i].classList.add("tab_active");
}

function activeContent(i) {
   for(let contents of content) {
      contents.classList.remove("tab__content_active");
   }
   content[i].classList.add("tab__content_active")
}

links.forEach((item, ind) => {
   item.onclick = () => {
      activeElement(ind);
      activeContent(ind);
   }
})