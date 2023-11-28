$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true,
                }
            }
        ]
    });

    $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
        $(this)
          .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
          .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
      });
    

      function toggleSlide(item) { 
        $(item).each(function(i) {
            $(this).on('click', function(e) { 
                e.preventDefault();
                $('.catalogue-item__content').eq(i).toggleClass('catalogue-item__content_active');
                $('.catalogue-item__list').eq(i).toggleClass('catalogue-item__list_active');
            })
        })
    };
    
    toggleSlide('.catalogue-item__link');
    toggleSlide('.catalogue-item__back')
});