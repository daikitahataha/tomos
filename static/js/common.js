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
        var $win = $(window);

        $win.on('load resize', function() {
          var windowWidth = window.innerWidth;

          if(windowWidth < 500){
            $(this).css('opacity', '0.5');
          }else{
            $(this).css('opacity', '1');
          }
        });
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

    $('.lead_img2').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        var $win = $(window);

        $win.on('load resize', function() {
          var windowWidth = window.innerWidth;

          if(windowWidth < 500){
            $(this).css('opacity', '0.5');
          }else{
            $(this).css('opacity', '1');
          }
        });
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

    $('.left').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
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

    $('.right').each(function(){
      var scroll = $(window).scrollTop();
      var targetElement = $(this).offset().top;
      var windowHeight = $(window).height();

      if (scroll > targetElement - windowHeight + 200){
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateX(0)');
      }
    });

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
