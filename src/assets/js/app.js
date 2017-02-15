$(document).foundation();
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
        $("#logoImage").attr("src", "assets/img/logo_gen_h.svg");
    } else {

        $('.top-bar').addClass('top-bar-before');
        $('.top-bar').removeClass('top-bar-after');
                 $("#logoImage").attr("src", "assets/img/logo_gen.svg");
    }

});