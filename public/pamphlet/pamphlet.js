$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
  $('section').fadeToggle();
});