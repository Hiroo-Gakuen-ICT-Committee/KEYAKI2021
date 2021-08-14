$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
  $('section').fadeToggle();
});
ScrollReveal().reveal('h1', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});
ScrollReveal().reveal('h2', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});
ScrollReveal().reveal('.download', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});