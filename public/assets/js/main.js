(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	wowAnimation();
    aosAnimation();
    thmSwiperInit();
});



/*===========================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.tgmenu__wrap li.menu-item-has-children ul').length) {
	$('.tgmenu__wrap .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="plus-line"></span></div>');
}

//Mobile Nav Hide Show
if ($('.tgmobile__menu').length) {

	var mobileMenuContent = $('.tgmenu__wrap .tgmenu__main-menu').html();
	$('.tgmobile__menu .tgmobile__menu-box .tgmobile__menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.tgmobile__menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(300);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.tgmobile__menu-backdrop, .tgmobile__menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
};



/*=============================================
	=           Data Background             =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})



/*===========================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');
        $("#header-fixed-height").removeClass("active-height");

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
        $("#header-fixed-height").addClass("active-height");
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 100);

  });
}


/*=============================================
	=            Header Search            =
=============================================*/
$(".search-open-btn").on("click", function () {
    $(".search__popup").addClass("search-opened");
    $(".search-popup-overlay").addClass("search-popup-overlay-open");
});
$(".search-close-btn").on("click", function () {
    $(".search__popup").removeClass("search-opened");
    $(".search-popup-overlay").removeClass("search-popup-overlay-open");
});


/*=============================================
=     Offcanvas Menu      =
=============================================*/
$(".menu-tigger").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").addClass("active");
	return false;
});
$(".menu-close, .offCanvas__overly").on("click", function () {
	$(".offCanvas__info, .offCanvas__overly").removeClass("active");
});


/*===========================================
	=      Select2 Active      =
=============================================*/
$("#course-cat").select2({
    tags: true,
    theme: "bootstrap",
    minimumResultsForSearch: -1,
    dropdownCssClass: "course-category-dropdown",
});


/*=============================================
	=          Swiper active              =
=============================================*/
function thmSwiperInit() {
    const swiperElm = document.querySelectorAll(".thm-swiper__slider");
    swiperElm.forEach(function (swiperelm) {
        const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
        let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });
}

// Function to add animation classes
function animationProperties() {
    $('[data-ani]').each(function () {
        var animationName = $(this).data('ani');
        $(this).addClass(animationName);
    });

    $('[data-ani-delay]').each(function () {
        var delayTime = $(this).data('ani-delay');
        $(this).css('animation-delay', delayTime);
    });
}
animationProperties();
// Add click event handlers for external slider arrows based on data attributes
$('[data-slider-prev], [data-slider-next]').on('click', function () {
	var sliderSelector = $(this).data('slider-prev') || $(this).data('slider-next');
	var targetSlider = $(sliderSelector);

	if (targetSlider.length) {
		var swiper = targetSlider[0].swiper;

		if (swiper) {
			if ($(this).data('slider-prev')) {
				swiper.slidePrev(); 
			} else {
				swiper.slideNext(); 
			}
		}
	}
});

/*=============================================
	=    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}

/*=============================================
	=           Aos Active       =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}

/*=============================================
	=           Counter Number       =
=============================================*/
$(".counter-number").counterUp({
	delay: 10,
	time: 1000,
});

/*=============================================
	=           Progress Counter       =
=============================================*/
$('.progress-bar').waypoint(function() {
	$('.progress-bar').css({
	animation: "animate-positive 1.8s",
	opacity: "1"
	});
}, { offset: '100%' });

/*=============================================
	=           Masonary Active       =
=============================================*/
$(".masonary-active").imagesLoaded(function () {
    var $filter = ".masonary-active",
        $filterItem = ".filter-item",
        $filterMenu = ".filter-menu-active";

    if ($($filter).length > 0) {
        var $grid = $($filter).isotope({
            itemSelector: $filterItem,
            filter: "*",
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            },
        });

        // filter items on button click
        $($filterMenu).on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            $grid.isotope({
                filter: filterValue,
            });
        });

        // Menu Active Class
        $($filterMenu).on("click", "button", function (event) {
            event.preventDefault();
            $(this).addClass("active");
            $(this).siblings(".active").removeClass("active");
        });
    }
});

/*=============================================
	=           Price Slider       =
=============================================*/
$(".price_slider").slider({
    range: true,
    min: 10,
    max: 100,
    values: [10, 75],
    slide: function (event, ui) {
      $(".from").text("$" + ui.values[0]);
      $(".to").text("$" + ui.values[1]);
    }
  });
  $(".from").text("$" + $(".price_slider").slider("values", 0));
  $(".to").text("$" + $(".price_slider").slider("values", 1));

/*===========================================
	=    		 Cart Quantity  	         =
=============================================*/
$(".cart-plus-minus").append('<div class="dec qtybutton"><span>+</span></div><div class="inc qtybutton"><span>-</span></div>');
$(".qtybutton").on("click", function () {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
	if ($button.text() == "+") {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	$button.parent().find("input").val(newVal);
});

/*===========================================
	=    		 Section Position  	         =
=============================================*/
    // Interger Converter
    function convertInteger(str) {
        return parseInt(str, 10);
    }

    $.fn.sectionPosition = function (mainAttr, posAttr) {
        $(this).each(function () {
            var section = $(this);

            function setPosition() {
                var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
                    posData = section.attr(mainAttr), // where to position
                    posFor = section.attr(posAttr), // On Which section is for positioning
                    topMark = "top-half", // Pos top
                    bottomMark = "bottom-half", // Pos Bottom
                    parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
                    parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

                if (posData === topMark) {
                    $(posFor).css(
                        "padding-bottom",
                        parentPB + sectionHeight + "px"
                    );
                    section.css("margin-top", "-" + sectionHeight + "px");
                } else if (posData === bottomMark) {
                    $(posFor).css(
                        "padding-top",
                        parentPT + sectionHeight + "px"
                    );
                    section.css("margin-bottom", "-" + sectionHeight + "px");
                }
            }
            setPosition(); // Set Padding On Load
        });
    };

    var postionHandler = "[data-sec-pos]";
    if ($(postionHandler).length) {
        $(postionHandler).imagesLoaded(function () {
            $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
        });
    }

    /*===========================================
	=         Marquee Active         =
    =============================================*/
    if ($(".marquee_mode").length) {
        $('.marquee_mode').marquee({
            speed: 100,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible:true,
        });
    }

})(jQuery);