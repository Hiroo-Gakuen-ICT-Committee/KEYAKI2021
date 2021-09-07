var pack = prompt("パスワードを入力してください。");
$('body').addClass('kesu');



pack_a="neko"



if (pack == pack_a) {
    console.log("パスワードの認証に成功しました。");
    $('body').removeClass('kesu');

}
