$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
});

//出てくるやつ
ScrollReveal().reveal('.text', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});
ScrollReveal().reveal('.textimage img', {
  duration: 1600,
  origin: 'right',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.sns', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.yazirusi', {
  duration: 1600,
  origin: 'right',
  distance: '50px',
  reset: true
});