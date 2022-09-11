let fontSize = Array.from(document.getElementsByClassName("font-size"));
let book = document.getElementById('book');

fontSize[0].addEventListener('click', function() {
  fontSize[1].classList.remove('font-size_active');
  fontSize[2].classList.remove('font-size_active');
  fontSize[0].classList.add('font-size_active');
  book.classList.add('book_fs-small');
  event.preventDefault();
});

fontSize[1].addEventListener('click', function() {
  fontSize[0].classList.remove('font-size_active');
  fontSize[2].classList.remove('font-size_active');
  fontSize[1].classList.add('font-size_active');
  book.className = 'book';
  event.preventDefault();
});

fontSize[2].addEventListener('click', function() {
  fontSize[1].classList.remove('font-size_active');
  fontSize[0].classList.remove('font-size_active');
  fontSize[2].classList.add('font-size_active');
  book.classList.add('book_fs-big');
  event.preventDefault();
});
