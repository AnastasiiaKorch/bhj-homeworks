const reveals = document.querySelectorAll(".reveal");

document.addEventListener('scroll', function() {
  for (let reveal of reveals) {
    if (reveal) {
      let top = reveal.getBoundingClientRect().top;
      const view = window.innerHeight;
      if (top < view) reveal.classList.add("reveal_active");
      else reveal.classList.remove("reveal_active");
    }
  }
});