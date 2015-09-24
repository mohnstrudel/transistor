(function($){
  
  $.fn.equalizeHeights = function() {
    var maxHeight = this.map(function(i,e) {
      return $(e).height();
    }).get();

    return this.height( Math.max.apply(this, maxHeight) );
  };
  
  $(document).ready(function(){
    
    startInit();
    
    $(document).on('click', '#menu-top-link', function(){
      if ($(window).width() > 480) {
        $('body').css({'overflow':'hidden'});
      }
      
      $('#menu-top').fadeIn();
      
      if ($(window).height() < 1000 && $(window).width() > 480) {
        $('.menu-top .column').height($(window).height() - 200);
      }
      
      if ($(window).width() > 480) {
        $('.menu-top .column').niceScroll({
          mousescrollstep: 70,
          cursorcolor: "#737373",
          cursorwidth: "5px",
          cursorborderradius: "10px",
          cursorborder: "none",
        });
        
        $('.menu-top .column').equalizeHeights();
      }
    });
    
    $(document).on('click', '#close-menu-top', function(){
      $('#menu-top').fadeOut(400, function(){
        if ($(window).width() > 480) {
          $('body').css({'overflow':'auto'});
        }
      });
    });
    
    slidePageInit();
    
  });
  
  $(window).load(function(){
    
    if ($(window).width() > 480) {
      sliderInit();
    } else {
      
      $('.flex-slider-detail').flexslider({
        animation: "slide",
        slideshow: false,
        direction: "horizontal",
        mousewheel: false,
        controlNav: false,
        start: function(el) {
          var countAll = el.count,
              currentSlide = el.currentSlide + 1;
          
          if (countAll < 10) {
            countAll = '0' + countAll;
          }
          
          if (currentSlide < 10) {
            currentSlide = '0' + currentSlide;
          }
          
          $('.number-slide .total').text('/' + countAll);
          $('.number-slide .current').text(currentSlide);
        },
        after: function(el) {
          var currentSlide = el.currentSlide + 1;

          if (currentSlide < 10) {
            currentSlide = '0' + currentSlide;
          }
          
          $('.number-slide .current').text(currentSlide);
        }
      });
      
    }
    
  });
  
  /* map */

  var map;
  function initMap() {
    if ($('#map').length) {
    
      $('#map').height($('.content-block').height());
    
      map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(56, 37),
        zoom: 8,
        zoomControl: false,
        streetViewControl: false,
        scaleControl: false,
        scrollwheel: false,
        draggable: false,
        mapTypeControl: false,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            "featureType": "administrative",
            "stylers": [
              { "saturation": -100 }
            ]
          },{
            "featureType": "landscape",
            "stylers": [
              { "saturation": -100 },
              { "lightness": 30 }
            ]
          },{
            "featureType": "road",
            "stylers": [
              { "saturation": -100 },
              { "lightness": 44 }
            ]
          },{
            "featureType": "poi",
            "stylers": [
              { "saturation": -100 },
              { "lightness": 5 }
            ]
          },{
            "featureType": "water",
            "stylers": [
              { "saturation": -100 }
            ]
          }
        ]
      });
    
    }
  }
  
  google.maps.event.addDomListener(window, 'load', initMap);
  
  /* map ends */
  
  function startInit() {
    $(".cd-section, html").niceScroll({
      mousescrollstep: 70,
      cursorcolor: "#737373",
      cursorwidth: "5px",
      cursorborderradius: "10px",
      cursorborder: "none",
    });
    
    if ($(window).width() < 480) {
      
      if ($('.cd-side-navigation .nav .active')) {
        $('.cd-side-navigation .nav').animate({left:'-'+$('.cd-side-navigation .nav .active').parents('li').offset().left});
      }

      var startPoint = 0,
          finishPoint = $('.cd-side-navigation').width() * 3;
      
      $('.cd-side-navigation').swipe({
        swipeRight: function(event, direction, distance, duration, fingerCount) {
          
          startPoint = startPoint + $('.cd-side-navigation').width();
          
          if (startPoint > 0) {
            startPoint = startPoint - $('.cd-side-navigation').width();
          }
          
          $('.cd-side-navigation .nav').animate({left: startPoint});
        },
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
          
          startPoint = startPoint - $('.cd-side-navigation').width();

          if (Math.abs(startPoint) > finishPoint) {
            startPoint = startPoint + $('.cd-side-navigation').width();
          }
          
          $('.cd-side-navigation .nav').animate({left: startPoint});
        },
        threshold: 0
      });
      
      var startMenuPoint = 0,
          finishMenuPoint = $(window).width() * 3;
      
      $('#menu-top .menu-wrap').swipe({
        swipeRight: function(event, direction, distance, duration, fingerCount) {
          
          startMenuPoint = startMenuPoint + $(window).width();
          
          if (startMenuPoint > 0) {
            startMenuPoint = startMenuPoint - $(window).width();
          }
          
          $('#menu-top .row').animate({left: startMenuPoint});
          $('.menu-top .nav').animate({left: startMenuPoint});
        },
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
          
          startMenuPoint = startMenuPoint - $(window).width();
          
          if (Math.abs(startMenuPoint) > finishMenuPoint) {
            startMenuPoint = startMenuPoint + $(window).width();
          }
          
          $('#menu-top .row').animate({left: startMenuPoint});
          $('.menu-top .nav').animate({left: startMenuPoint});
        },
        threshold: 0
      });
    }
  }
  
  function sliderInit() {
    var mobileControlNav = false,
        desktopControlNav = true,
        optionControlNav;
    
    if ($(window).width() > 480) {
      optionControlNav = desktopControlNav;
    } else {
      optionControlNav = mobileControlNav;
    }
    
    $('.flex-slider').flexslider({
      animation: "slide",
      slideshow: false,
      direction: "vertical",
      mousewheel: true,
      directionNav: false,
      controlNav: optionControlNav,
      start: function(el) {
        if ($('.parallax-block')) {
          $(".parallax-block img").attr('src', $(el).find('.flex-active-slide .image img').attr('src'));
        }
      },
      after: function(el) {
        if ($('.parallax-block')) {
          $(".parallax-block img").attr('src', $(el).find('.flex-active-slide .image img').attr('src'));
        }
      }
    });
    
    if ($.fn.parallax !== undefined) {
      /*$('.parallax-layer').parallax({
        mouseport: $('.content-block'),
        yparallax: false
			});*/
    }
    
    $('.flex-slider .flex-control-nav').css({'margin-top':'-'+$('.flex-control-nav').height()/2+'px'});
    
    $('.flex-slider-detail').flexslider({
      animation: "slide",
      slideshow: false,
      direction: "horizontal",
      mousewheel: false,
      controlNav: false,
      customDirectionNav: $(".custom-navigation a"),
      start: function(el) {
        var countAll = el.count,
            currentSlide = el.currentSlide + 1;
        
        if (countAll < 10) {
          countAll = '0' + countAll;
        }
        
        if (currentSlide < 10) {
          currentSlide = '0' + currentSlide;
        }
        
        $('.number-slide .total').text('/' + countAll);
        $('.number-slide .current').text(currentSlide);
      },
      after: function(el) {
        var currentSlide = el.currentSlide + 1;

        if (currentSlide < 10) {
          currentSlide = '0' + currentSlide;
        }
        
        $('.number-slide .current').text(currentSlide);
      }
    });
  }
  
  function slidePageInit() {
    /* slide page */
    
    //set some variables
    var isAnimating = false,
      firstLoad = false,
      newScaleValue = 1;

    //cache DOM elements
    var dashboard = $('.cd-side-navigation'),
      mainContent = $('.cd-main'),
      loadingBar = $('#cd-loading-bar'),
      currNumber = 0;

    //select a new section
    dashboard.on('click', 'a', function(event){
      event.preventDefault();
      
      var target = $(this),
        //detect which section user has chosen
        sectionTarget = target.data('menu'),
        num = target.data('num');
      
      if( !target.hasClass('selected') && !isAnimating ) {
        //if user has selected a section different from the one alredy visible - load the new content
        triggerAnimation(sectionTarget, true, num);
      }

      firstLoad = true;
    });

    //detect the 'popstate' event - e.g. user clicking the back button
    $(window).on('popstate', function() {
        if( firstLoad ) {
          /*
          Safari emits a popstate event on page load - check if firstLoad is true before animating
          if it's false - the page has just been loaded 
          */
            var newPageArray = location.pathname.split('/'),
            //this is the url of the page to be loaded 
            newPage = newPageArray[newPageArray.length - 1].replace('.html', '');
            if( !isAnimating ) triggerAnimation(newPage, false);
        }
        firstLoad = true;
    });

    //scroll to content if user clicks the .cd-scroll icon
    /*mainContent.on('click', '.cd-scroll', function(event){
      event.preventDefault();
      var scrollId = $(this.hash);
      $(scrollId).velocity('scroll', { container: $(".cd-section") }, 200);
    });*/

    //start animation
    function triggerAnimation(newSection, bool, number) {
      number = number || 0;
      var css = 'left';
      isAnimating =  true;
      
      if (number < currNumber) {
        css = 'right';
      }
      
      currNumber = number;
      
      newSection = ( newSection == '' ) ? 'index' : newSection;
      dashboard.find('a').removeClass('selected');
      //update dashboard
      dashboard.find('*[data-menu="'+newSection+'"]').addClass('selected')/*.parents('li').siblings('li').children('.selected').removeClass('selected')*/;
      //trigger loading bar animation
      //initializeLoadingBar(newSection);
      //load new content
      loadNewContent(newSection, bool, css);
    }

    function initializeLoadingBar(section) {
      var	selectedItem =  dashboard.find('.selected'),
        barHeight = selectedItem.outerHeight(),
        barTop = selectedItem.offset().top,
        windowHeight = $(window).height(),
        maxOffset = ( barTop + barHeight/2 > windowHeight/2 ) ? barTop : windowHeight- barTop - barHeight,
        scaleValue = ((2*maxOffset+barHeight)/barHeight).toFixed(3)/1 + 0.001;
      
      //place the loading bar next to the selected dashboard element
      loadingBar.data('scale', scaleValue).css({
          height: barHeight,
          top: barTop
      }).attr('class', '').addClass('loading '+section);
    }

    function loadNewContent(newSection, bool, css) {
      css = css || 'right';
      var sign = '';
      
      if (css == 'left') {
        sign = '-';
      }
      setTimeout(function(){
        //animate loading bar
        //loadingBarAnimation();
        
        //create a new section element and insert it into the DOM
        var section = $('<section class="cd-section overflow-hidden '+newSection+' '+css+'"></section>').appendTo(mainContent);
        //load the new content from the proper html file
        section.load(newSection+'.html .cd-section > *', function(event){
          $('.cd-section').first().animate({
            left: sign+'100%',
            'opacity': 0
          }, 1000);
          //finish up the animation and then make the new section visible
          var scaleMax = loadingBar.data('scale');

          /*loadingBar.velocity('stop').velocity({
            scaleY: scaleMax
          }, 600, function(){*/
            //add the .visible class to the new section element -> it will cover the old one
            section.prev('.visible').removeClass('visible').end().addClass('visible').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
              resetAfterAnimation(section);
            });

            //if browser doesn't support transition
            if( $('.no-csstransitions').length > 0 ) {
              resetAfterAnimation(section);
            }
            
            switch (newSection) {
              case 'index':
              
              break
              
              case 'services':
              
              break
              
              case 'teams':
              
              break
              
              case 'contacts':
                initMap();
              break
            }
            
            if ($(window).width() > 480) {
              $('.flex-slider').flexslider({
                animation: "slide",
                slideshow: false,
                direction: "vertical",
                mousewheel: true,
                directionNav: false
              });
              
              $('.flex-slider .flex-control-nav').css({'margin-top':'-'+$('.flex-control-nav').height()/2+'px'});
            }
            
            startInit();
            slidePageInit();

            var url = newSection+'.html';

            if(url!=window.location && bool){
                  //add the new page to the window.history
                  //if the new page was triggered by a 'popstate' event, don't add it
                  window.history.pushState({path: url},'',url);
              }
          //});
        });

      }, 100);
    }

    function loadingBarAnimation() {
      var scaleMax = loadingBar.data('scale');
      if( newScaleValue + 1 < scaleMax) {
        newScaleValue = newScaleValue + 1;
      } else if ( newScaleValue + 0.5 < scaleMax ) {
        newScaleValue = newScaleValue + 0.5;
      }
      
      loadingBar.velocity({
        scaleY: newScaleValue
      }, 100, loadingBarAnimation);
    }

    function resetAfterAnimation(newSection) {
      //once the new section animation is over, remove the old section and make the new one scrollable
      newSection.removeClass('overflow-hidden').prev('.cd-section').fadeOut(400, function(){
        $(this).remove();
      });
      isAnimating =  false;
      //reset your loading bar
      //resetLoadingBar();
    }

    function resetLoadingBar() {
      loadingBar.removeClass('loading').velocity({
        scaleY: 1
      }, 1);
    }
    
    /* slide page end */
  }
  
})(jQuery);