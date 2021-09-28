
//メニュー
$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
  $('.hero').fadeToggle();
});



var pack_a = "E58FA4E5B79D"


if (Cookies.get('pw')=="ok") {
  $('.true').css('display', 'inline');
} else {
  while (pack!=pack_a) {
    var pack = prompt("こちらのサイトは広尾学園に在籍している生徒のみに公開を限定し、教育活動の一環として、運営しております。ご理解いただけますよう、よろしくお願い致します。なお、サイト内の写真や動画の無断複製はご遠慮ください。")
      $('.true').css('display', 'inline');
      Cookies.set('pw', 'ok');
      const pw = Cookies.get('pw');
  }
}



