jQuery(function($){
  $(window).scroll(function(){
    $('.lead_tx_wrap').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity', '1');
        $(this).css('transform','translateX(0)');
      }
    });

    $('.lead_asakusa_img').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('transform','translateX(0)');
        $(this).css('opacity', '1');
        var $win = $(window);
      }

      if(window.matchMedia( "(max-width: 500px)" ).matches){
        $(this).css('transform', 'translateX(0)');
        $(this).css('opacity', '0.5');
      }
    });

    $('.lead_img2').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('transform', 'translateX(0)');
        $(this).css('opacity', '1');
        var $win = $(window);
      }
      if(window.matchMedia( "(max-width: 500px)" ).matches){
        $(this).css('transform', 'translateX(0)');
        $(this).css('opacity', '0.5');
      }
    });

    $('.lead_material1').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 100){
        $(this).css('opacity', '1');
        $(this).css('transform','translateX(0)');
      }
    });

    $('.lead_material2').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity', '1');
        $(this).css('transform','translateX(0)');
      }
    });

    $('.lead_tx_left').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });

    $('.param_item_title').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });

    $('.param_item_sub_title').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });

    $('.param_item_tx').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });

    $('.param_material1').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });

    /*$('.right').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });*/

    $('.param_material2').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 80){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });
  });
});
