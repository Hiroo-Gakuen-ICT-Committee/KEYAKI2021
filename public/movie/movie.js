var pack = prompt("パスワードを入力してください。");
$('.true').css('display', 'none');




var pack_a = "neko"


if (pack == pack_a) {
    console.log("パスワードの認証に成功しました。");
    $('.true').css('display', 'inline');

} else {
    console.log("パスワードの認証に失敗しました。");
    location.href = "/top.html";


}
