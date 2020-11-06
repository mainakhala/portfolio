// var stickingPosition = 0;
var i;
var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }


function openFormsTab(e, tabName) {
    var tablink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  }






$(document).ready(function() {
    stickingPosition = $("header nav").offset().top;


    $("#loginA").click(function(event) {
        if (!$(event.target).parents("#login-content").length) {
            $('#login-content').slideToggle();
            event.stopPropagation();
        }
    });

    $(document).on("click", function(event){
        if (!$(event.target).parents("#login-content").length) {
            $('#login-content').slideUp();
        }
    });

 
});
// end ready function




var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '16em', //distance from center
    start = -90, //shift start from 0
    $elements = $('.our-companies-Circle:not(:first-child)'),
    numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = 360 * type / numberOfElements;

$elements.each(function(i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;
    
    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});


$("intro-video").each(function(){
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})





// function galleryImgMargin(){
//     var photoMargin = $(".galleryCaption").height;
//     $(".galleryClick img").css("margin-bottom") = photoMargin;
// }



//Sticky Nav
// $(window).on("scroll", function() {
//     if ($(window).scrollTop() >= stickingPosition) {
//         if (!$("header nav").hasClass("sticky")) {
//             $("header").css("padding-bottom", $("header nav").outerHeight());
//             $("header nav").addClass("sticky");
//         }
//     } else if ($("header nav").hasClass("sticky")) {
//         $("header").removeAttr("style");
//         $("header nav").removeClass("sticky");
//     }
// });
     



// document.write("Last Updated: " + document.lastModified);