/**
 * 
 *
 * This file contains all template JS functions
 *
 * @package Namakwala 
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Owl Carousel
          - Home Slider 
          - Product Slider 
          - Product Desc Slider 
 * 02 - Navbar Fixed top
 * 03 - Side Navbar
 * 04 - Search
 * 05 - Mailchimp Form
 * 06 - Facts Count
 * 07 - Contact Dropdown
 * 08 - Popup Dialog
 * 09 - Preloader 

--------------------------------------------------------------*/
(function($) {
  "use strict";
  
  var $window = $( window )
  var counter = $( '.counter' )
  var search = $( '.search' )
  var product = $( '.product-slider' ) 
  var homeslider = $( '#home-slider' ) 


// Owl Carousel 
    // Home Slider    
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      margin: 0,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 1
        },
        1100: {
            items: 1
        }
      }
    });
  
  // Product Slider 
    product.owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: false,
      autoplayTimeout: 2500,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      autoplay: true,
      slideSpeed: 600,
      margin: 0, 
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            nav: false
        },
        600: {
            nav: false
        },
        768: {
            nav: false
        },
        1100: {            
            nav: false
        }
      }
    }); 

  // Prod Desc Slider 
     $("#prod-desc-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      nav: true,
      autoplayTimeout: 250000,
      smartSpeed: 2000,
      autoHeight: true,
      touchDrag: true,
      mouseDrag: true,
      autoplay: true,
      slideSpeed: 15000,
      margin: 80, 
      navText:['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            nav: false
        },
        600: {
            nav: false
        },
        768: {
            nav: false
        },
        1100: {            
            nav: true
        }
      }
    });


// Navbar Fixed Top
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 80) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }); 


// SideNav
  $('.openbtn').on('click', function () {
    document.getElementById("sidenav").style.width = "250px";
  });

  $('.closebtn').on('click', function () {
    document.getElementById("sidenav").style.width = "0";
  });


// Search
  $('.search-icon').on('click', function (e) {
    e.preventDefault();
    search.addClass('active');
  });

  $('.search-close').on('click', function (e) {
    e.preventDefault();
    search.removeClass('active');
  });


// Mailchimp Form
  $('#subscribe-form').ajaxChimp({
      url: 'http://blahblah.us1.list-manage.com/subscribe/post?u=5afsdhfuhdsiufdba6f8802&id=4djhfdsh9'
  });


// Facts Count 
  if (counter.length) {   
    $().ready(function( $ ) {
      counter.counterUp({
        delay: 20,
        time: 2000
      });
    });  
  }

// Contact Dropdown
  $(function(){
    $("#cateogery").on("change",function(){
        var selectedVal=$( "#cateogery option:selected" ).val();
        $("#subcategory > optgroup").attr("disabled");
        $("#subcategory > optgroup").hide();
        $('#subcategory > optgroup[label="'+selectedVal+'"]').removeAttr("disabled");
        $('#subcategory > optgroup[label="'+selectedVal+'"]').show()
    });  
  });

// Popup Dialog
    $(function() {
      $('.gallery-popup').magnificPopup({
        delegate: '.gallery-img a',
        type: 'image',    
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',    
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return '<small>by Namakwala</small>';
          }
        }
      });
    });
    
// Preloader   
  $window.on('load', function(){ 
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow'); 
  }); 


})(jQuery);