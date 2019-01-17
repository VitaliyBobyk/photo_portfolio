$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.menu_main').addClass('fixed');
    } else {
        $('.menu_main').removeClass('fixed');
    }
  });