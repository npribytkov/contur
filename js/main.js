$('#slider').slick({
    dots: true,
    arrows: false
});

$(document).on("click", ".mobile_menu_container .parent", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).siblings("ul").addClass("loaded").addClass("activity");
});
$(document).on("click", ".mobile_menu_container .back", function(e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).parent().parent().removeClass("loaded");
    $(this).parent().parent().parent().parent().addClass("activity");
});
$(document).on("click", ".mobile_menu", function(e) {
    e.preventDefault();
    $(".mobile_menu_container").addClass("loaded");
    $(".mobile_menu_overlay").fadeIn();
});
$(document).on("click", ".mobile-filter", function(e) {
    e.preventDefault();
    $(".filter-block-container").addClass("loaded");
    $(".mobile_menu_overlay").fadeIn();
});
$(document).on("click", ".mobile_menu_overlay", function(e) {
    $(".mobile_menu_container").removeClass("loaded");
    $(".filter-block-container").removeClass("loaded");
    $(this).fadeOut(function() {
        $(".mobile_menu_container .loaded").removeClass("loaded");
        $(".mobile_menu_container .activity").removeClass("activity");
        $(".filter-block-container .loaded").removeClass("loaded");
        $(".filter-block-container .activity").removeClass("activity");
    });
});
$('.model-list').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1175,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
            }
        },

    ]
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 580,
            settings: {
                vertical: false,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 380,
            settings: {
                vertical: false,
                slidesToShow: 2,
            }
        }
    ]
});
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
$('.video-list .video-item').click(function (e){
    $('.video-item.big iframe.player').remove();
    $('.video-item').removeClass('big play');
    $('.video-item .player').empty();
    $(this).addClass('big');
    $('.video-list').prepend($(this));

    $(this).addClass('play');
    if ($(this).find('.player').length == 0){
        $(this).find('.img').append(' <div class="player"></div>')
    }
    player = new YT.Player($(this).find('.player')[0], {
        height: '645',
        width: '100%',
        videoId: $(this).data('src'),
        events: {
            'onReady': onPlayerReady,
        }
    });
});


function onPlayerReady(event) {
    event.target.playVideo();
}
$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 800);
    return false;
});