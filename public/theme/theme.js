$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
  $('section').fadeToggle();
});
ScrollReveal().reveal('.yokokara', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});
ScrollReveal().reveal('.imi', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});
ScrollReveal().reveal('.item', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});
ScrollReveal().reveal('img', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});