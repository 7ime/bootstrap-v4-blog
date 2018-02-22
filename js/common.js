"use strict"

console.log('Welcome')

$(function() {

        //Многоуровневое меню bootstrap

		$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        if ( !$(this).next().hasClass('show') ) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        
        $(this).parent("li").toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-menu .show').removeClass("show");
        });
        
        if(!$parent.parent().hasClass('navbar-nav')) {
            $el.next().css({ 
            	"top": $el[0].offsetTop + 0, "left": $parent.outerWidth() - 0 
            });
        }

        return false;
		});


        //Автоматическое всплывающее модальное окно bootstrap
        setTimeout( function() {
            $('#Newsletter').modal('show');
        }, 10000);


        //Scroll Up
        $('.scrollup').click(function() {
            $("html, body").animate({
              scrollTop:0
            },1000);
        })
        $(window).scroll(function() {
          
          if ($(this).scrollTop()>200) {
            
            $('.scrollup').fadeIn();
          }
          
          else {
            $('.scrollup').fadeOut();
          }
        });
});


