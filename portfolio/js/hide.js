// JavaScript Document

//scroll fade pieces
//テキストなどをフワっと出すやつ。hideはクラスなので複数個所で使用可
//複数を時間差で出す時はセレクタに追加
//例$('.hide')->$('.hide,.hide2')
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