let links = document.querySelectorAll('.has-tooltip');
let div = document.createElement('div');


links.forEach((link) => {
  link.addEventListener('click', (event) => {
  event.preventDefault();

  div.classList.add('tooltip');

    if (div.classList.contains("tooltip_active")) {
      div.classList.remove('tooltip_active');

      if (div.textContent == link.title) {
        return false;
        }
    }

    div.textContent = link.title
    link.append(div)
    div.classList.add('tooltip_active')


    const position = link.getBoundingClientRect();
    div.style.left = position.left + 'px';
    div.style.top = position.bottom + 5 + 'px';

})

});