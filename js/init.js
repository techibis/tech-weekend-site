(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax({
      height: '1000px'
    });

    $(document).ready(function(){
      $('.slider').slider({
        height: '600px',
        full_width: true});
    });

    $('.carousel.carousel-slider').carousel({full_width: true});
    
  }); // end of document ready
})(jQuery); // end of jQuery name space
