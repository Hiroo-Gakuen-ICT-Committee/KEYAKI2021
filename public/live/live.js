//メニュー
$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
  $('section').fadeToggle();
});
//パスワード

var pack_a = "neko"


if (document.cookie == "pw=true") {
  $('.true').css('display', 'inline');
} else {
  var pack = prompt("パスワードを入力してください。");
  if (pack == pack_a) {
    $('.true').css('display', 'inline');
    var now = new Date();
    now.setMinutes(now.getMinutes() + 60 * 48);  // 48時間持続
    document.cookie = "pw=true";
  } else if(pack=="古川"){
  location.href = "https://daiwaryu1121.com/post-36315/";
  }else {
  location.href = "/live.html";
  }
}



