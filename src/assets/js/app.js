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

var ismenuactv = false;
var animtime = 700; //Keep this value same as "$animtime" in scss file 

$(document).ready(function () {

    var menu_icon = $('#menu-icon');
    var c_path = $('#c_path');
    var t_line = $('#t_line');
    var f_line = $('#f_line');

    menu_icon.click(function () {

        if (!ismenuactv) {
            c_path.addClass('path-anim');

            setTimeout(function () {
                c_path.addClass('cpath-end').removeClass('path-anim');
                t_line.addClass('linemoveup');
                f_line.addClass('linemovedown');
                ismenuactv = true;
            }, animtime);

        } else {

            c_path.addClass('path-anim-rev');
            setTimeout(function () {
                t_line.removeClass('linemoveup');
                f_line.removeClass('linemovedown');
                c_path.removeClass('cpath-end path-anim-rev');
                ismenuactv = false;
            }, animtime);
        }
    });
});