// owl slider js start

$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: false,
            loop: false
        }
    }
})

// owl slider js end