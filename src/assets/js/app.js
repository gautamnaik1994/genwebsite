$(document).foundation();
var logoSquare = new Image()
logoSquare.src = "assets/img/logo_gen_h.svg";
var logoRect = new Image()
logoRect.src = "assets/img/logo_gen.svg";


 $(document).ready(function () {
     $('.c-dropdown').hover(
         function () {
             $(this).children('.c-sub-menu').slideDown(200);
         },
         function () {
             $(this).children('.c-sub-menu').slideUp(200);
         }
     );
 });

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 300) {
        $('.top-bar').removeClass('top-bar-before');
        $('.top-bar').addClass('top-bar-after');
        $("#logoImage").attr("src", logoSquare.src);
        //document.getElementById("logoImage").src = logoSquare.src;
    } else {

        $('.top-bar').addClass('top-bar-before');
        $('.top-bar').removeClass('top-bar-after');
                 $("#logoImage").attr("src", logoRect.src);
    }

});