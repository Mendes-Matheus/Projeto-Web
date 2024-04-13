function slider_index_carouselInit() {
    $('.owl-carousel.slider_index_carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 25,
        stagePadding: 2,
        autoplay: true,
        nav: true,
        navText: ["&#10094;","&#10095;"],   
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
            
        }
    });
}
slider_index_carouselInit();


function slider_carouselInit() {
  $(".owl-carousel.slider_carousel").owlCarousel({
    dots: false,
    loop: true,
    margin: 25,
    stagePadding: 1,
    autoplay: true,
    nav: true,
    navText: ["&#x3008;", "&#x3009;"],
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });
}
slider_carouselInit();


// function slider_carouselInit() {
//     $(".owl-carousel.slider_carousel").owlCarousel({
//       dots: false,
//       loop: true,
//       margin: 25,
//       stagePadding: 1,
//       autoplay: true,
//       nav: true,
//       navText: ["&#x3008;", "&#x3009;"],
//       autoplayTimeout: 1500,
//       autoplayHoverPause: true,
//       responsive: {
//         0: {
//           items: 2,
//         },
//         768: {
//           items: 3,
//         },
//         992: {
//           items: 5,
//         },
//       },
//     });
//   }
//   slider_carouselInit();

// function slider_carouselInit() {
//     $(".owl-carousel.slider_carousel").owlCarousel({
//       dots: false,
//       loop: true,
//       margin: 25,
//       stagePadding: 1,
//       autoplay: true,
//       nav: true,
//       navText: ["&#x3008;", "&#x3009;"],
//       autoplayTimeout: 1500,
//       autoplayHoverPause: true,
//       responsive: {
//         0: {
//           items: 2,
//         },
//         768: {
//           items: 3,
//         },
//         992: {
//           items: 5,
//         },
//       },
//     });
//   }
//   slider_carouselInit();