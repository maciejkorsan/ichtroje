/* main js file */ 
var $=require('jquery');


$(document).ready(function(){

    var add_top = $('[data-js="add"]').offset();
    var el = $('[data-js="link"]');



    window.onscroll = function(){

        var sTop = $(window).scrollTop();

        console.log(sTop > add_top.top );
        if (sTop > add_top.top){
            el.removeClass('navigation__link--hidden');
        }else{
            el.addClass('navigation__link--hidden');
        }

    }




});



 