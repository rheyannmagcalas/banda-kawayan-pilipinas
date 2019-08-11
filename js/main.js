$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


    $('#info-details').hide();
    var info_hidden = true
    $("#see_more a").click(function() {
        if(info_hidden){
          info_hidden=false
           $('#info-details').show();
           $("#see_more a").text("READ LESS")
           $('html, body').animate({
             scrollTop: $("#info-details").offset().top
           }, 1000);
        }else{
          info_hidden = true
          $('#info-details').hide();
          $("#see_more a").text("SEE MORE")
          $('html, body').animate({
             scrollTop: $("#about").offset().top
           }, 1000);
        }
       
    });
  
});

$(document).ready(function(){
   $('ul#ul-about-us li').click(function(e) 
    { 
      $("#header-ul li.active").removeClass('active');
      $("#li-about-us").addClass('active');
    });

   $('#header-ul li').click(function(e) 
    { 
      if(this.id != "li-about-us"){
        $("#header-ul li.active").removeClass('active');
        $(this).addClass('active');
      }
    });

   $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });
});


