//パスワード
var pack = prompt("");
$('.true').css('display', 'none');




var pack_a = "neko"


if (pack == pack_a) {
    console.log("パスワードの認証に成功しました。");
    $('.true').css('display', 'inline');
    

} else {
    console.log("パスワードの認証に失敗しました。");
    location.href = "/top.html";


}
//メニュー
$('.menu').on('click', function () {
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
    $('.day').fadeToggle();
    //上記のコードはsection追加ごとに付け足す
    $('section').fadeToggle();
  });

//アニメーション
ScrollReveal().reveal('.left', {
    duration: 1600,
    origin: 'left',
    distance: '10px',
    reset: true
  });
  ScrollReveal().reveal('.right', {
    duration: 1600,
    origin: 'right',
    distance: '10px',
    reset: true
  });