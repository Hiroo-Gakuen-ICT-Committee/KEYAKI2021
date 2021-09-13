//配信ページ配信モード変更
//ture→配信中 false→配信停止中
live_web = false

//配信ページ
if (live_web == true) {
  $('h1').remove();
  $('.hero').css('background-image', 'none');
  $('body').css('background-color', '#000000');
  $('.menu__line').css('background', '#c2c7c2');
  $('.texts_1').css('background', '#000000');
  //$('.start').css('display', 'inline');
  $('.texts_1').css('margin-top', '0px');



} else {

}