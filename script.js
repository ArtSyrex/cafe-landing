jQuery(document).ready(function() {
    $("nav a").mPageScroll2id({
        scrollSpeed: 700
    });

    $("#phone").mask("+7(999)999-99-99");

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
    })

});