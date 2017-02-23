// window.onload

// When do they fire ?

//     window.onload

// By
// default, it is fired when the entire page loads, including its content(images, css, scripts, etc.)
// In some browsers it now takes over the role of document.onload and fires when the DOM is ready as well.
// document.onload

// It is called when the DOM is ready which can be prior to images and other external content is loaded.





$(document).foundation();
new WOW().init();
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

var portFolioCarousel = $('#portfolioCarousel');
$('#topCarousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

portFolioCarousel.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        }
    }
});
portFolioCarousel.on('changed.owl.carousel', function (property) {
    var current = property.item.index;
    var owlImg = $(property.target).find(".owl-item").eq(current).find("img");
    //console.log('Image current is ' + vibImage.attr('src'));
    var vibImage = new Image();
    vibImage.src = owlImg.attr('src');
   // var vibrant = new Vibrant(vibImage);
   // var swatches = vibrant.swatches();
   // console.log(swatches['Vibrant'].getHex());
    //$('.portfolio-bg').css("background", "" + swatches['DarkVibrant'].getHex());
    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
        var colorThief = new ColorThief();
        var col = colorThief.getColor(vibImage);
        var colString = "rgb(" + col+")";
        console.log(colString);
        $('.portfolio-bg').css("background", colString);
});



$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
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
//   $(window).load(function() {
//       $('#loader').fadeOut('slow', function() {
//           $(this).remove();
//       });
//   });


// $(document).ready(function () {
//     var movementStrength = 25;
//     var height = movementStrength / $(window).height();
//     var width = movementStrength / $(window).width();
//     $(".home-top-container").mousemove(function (e) {
//         var pageX = e.pageX - ($(window).width() / 2);
//         var pageY = e.pageY - ($(window).height() / 2);
//         var newvalueX = width * pageX * -3 ;
//         var newvalueY = height * pageY * -3;
//         $('.home-top-container').css("background-position", newvalueX + "px     " + newvalueY + "px");
//     });
// });