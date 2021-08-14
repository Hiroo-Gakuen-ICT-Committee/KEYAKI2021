$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
  $('section').fadeToggle();
});

//出てくるやつ
ScrollReveal().reveal('.text', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true,
});
ScrollReveal().reveal('.back', {
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
ScrollReveal().reveal('.texts_5', {
  duration: 1600,
  origin: 'right',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.texts_1', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.texts_2', {
  duration: 1600,
  origin: 'right',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.theme_video', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.twitter', {
  duration: 1600,
  origin: 'left',
  distance: '50px',
  reset: true
});
ScrollReveal().reveal('.instagram', {
  duration: 1600,
  origin: 'right',
  distance: '50px',
  reset: true
});