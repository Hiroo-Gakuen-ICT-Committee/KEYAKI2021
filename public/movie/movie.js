var pack = prompt("パスワードを入力してください。");
$('true').addClass('kesu');
$('falese').addClass('kesu');




var pack_a="neko"


if (pack == pack_a) {
    console.log("パスワードの認証に成功しました。");
    $('true').removeClass('kesu');
    $('falese').addClass('kesu');
} else {
    console.log("パスワードの認証に失敗しました。");

    $('fales').removeClass('kesu');
    $('true').addClass('kesu');
    
}
