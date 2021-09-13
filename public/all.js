
//メニューにおけるライブ配信の表示変更
//ture→配信中 false→配信停止中
live_menu = false




//メニュー
if (live_menu == true) {
  $('.live a').css('color', '#bb3527');
  $('.live a').html('LIVE配信-現在配信中');
} else {
  $('.live a').css('color', '#000000');
  $('.live a').html('LIVE配信');
}

