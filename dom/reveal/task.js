const reveals = document.querySelectorAll(".reveal");

document.addEventListener('scroll', function() {
  for (let reveal of reveals) {
    if (reveal) {
      const { top, bottom } = reveal.getBoundingClientRect();
      const view = window.innerHeight
      if(bottom < 0 || top > view){
        reveal.classList.remove("reveal_active")
      }
      else{
        reveal.classList.add("reveal_active")
      }
    }
  }
})
