// JavaScript Document

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {  //200pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

$(".toggle_img").on("click", function () {
  if ($(this).hasClass("change")) {
    $(this).attr("src", "http://pzweb.net/portfolio/images/repair1.jpg");
    $(this).toggleClass("change");
  } else {
    $(this).attr("src", "http://pzweb.net/portfolio/images/repair2.jpg");
    $(this).toggleClass("change");
  }
});

//scroll fade pieces
//テキストなどをフワっと出すやつ。hideはクラスなので複数個所で使用可
//複数を時間差で出す時はセレクタに追加
//例$('.hide_ts')->$('.hide_ts,.hide2_ts')
    $(function() {
      $(window).scroll(function() {
        $('.hide_ts,.hide2_ts').each(function() {
          var hTop = $(this).offset().top;
          var hHeight = $(this).height();
          var hBottom = hTop + hHeight;
          var wTop = $(window).scrollTop();
          var wHeight = $(window).height();
          var wBottom = wTop + wHeight;
          if (hBottom < wBottom) {
            $(this).css('opacity', '1');
          }
        });
      });
      $('html,body').animate({
        scrollTop: 0
      }, function() {
        $('.hide_ts,.hide2_ts').css("opacity", "0");
      });
    });