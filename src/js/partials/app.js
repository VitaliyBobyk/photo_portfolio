$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      smartSpeed: 500,
      loop: true,
      nav: true,
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
        items: 3,
        margin: 10,
        smartSpeed: 500,
        loop: true,
        nav: true,
      });
    });
  }
});
