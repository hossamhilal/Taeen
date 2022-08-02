/*global $ */
(function($) {
    "use strict";

    // Loader 
    $(window).on('load', function(){
        $('body').addClass('stopScroll');

        $('.loader').fadeOut(1000, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        });
    }); 

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function () {
        $(this).toggleClass('open');
        $('.navMenu').toggleClass('show');
        $('.bodyOverlay').toggleClass('show');
        setTimeout(function () {
            $('body').toggleClass('stopScroll');
        }, 200);
    });

    // Header OWL 
    $('.owlClients').owlCarousel({
        rtl:true,
        margin: 10,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        autoplaySpeed : 3000,
        autoplayTimeout : 3000,
        smartSpeed: 3000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Feature Hover
    $('.feature').on('mouseenter', function() {
        $('.feature').removeClass('featureActive');
        $(this).addClass('featureActive');
    });

    // Navbar Scroll 
    $('.navMenu a').click(function(){
        let id = $(this).attr('href');
        $('html,body').animate({ 
            scrollTop: $(id).offset().top - 20
        },3000);
    });


    // Scroll To Top 
    $('.scrollTop').click( function() {
        $('html, body').animate({ 
            scrollTop: 0
        }, 3000);
    });

})(jQuery);

