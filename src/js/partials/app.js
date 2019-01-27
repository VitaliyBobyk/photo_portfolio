$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 2,
      margin: 15,
      smartSpeed: 500,
      loop: true,
      nav: true,
      autoWidth: false,
      navigation : true,
      autoplay : true,
      autoplayTimeout : 3000,
      autoplayHoverPause : true,
    });
  });

$(window).on('load resize', function () {
  var width = window.innerWidth;
  if(width<501){
    $('.owl-carousel').owlCarousel('destroy'); 
  }
  else{
    $(function() {
      // Owl Carousel
      var owl = $(".owl-carousel");
      owl.owlCarousel({
        items: 2,
        margin: 15,
        smartSpeed: 500,
        loop: true,
        nav: true,
      });
    });
  }
});
