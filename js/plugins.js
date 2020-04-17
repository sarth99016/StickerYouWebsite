$(document).ready(function() {
  "use strict";

  //Owl Carousel - blogs
  $(".related").owlCarousel({
    //Responsive
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40
      },
      375: {
        items: 1,
        stagePadding: 40
      },
      768: {
        items: 2,
        stagePadding: 40
      },
      1024: {
        items: 3
        // stagePadding: 0
      }
    }
  });

  //Owl Carousel
  $(".owl-carousel").owlCarousel({
    //Responsive
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2,
        stagePadding: 40
      },
      480: {
        items: 2,
        stagePadding: 40
      },
      600: {
        items: 2,
        stagePadding: 40
      },
      1000: {
        items: 5,
        stagePadding: 0,
        margin: 40,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        nav: true
      }
    }
  });

  // Where we located on the page
  var curPos = null;

  // Determin if scrolling up show the header
  // if ($(window).scroll() < curPos) {
  //   $("header").removeClass("hide");
  // }

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() < pos) {
  //     $("header").removeClass("sticky hide");
  //   }
  // });

  // hide scrollbar when menu opens
  $(".navbar-toggler").click(function() {
    $("body").toggleClass("hide-scroll-y");
  });

  let winH = $("html,body").innerHeight();
  let headerH = $("header").innerHeight();
  let lastScroll = 0;

  // Menu & Search Dissapear On Scroll 1/4 Page and reappear on scrolling up
  $(window).scroll(function() {
    let sTop = $(this).scrollTop();

    if ($(this).scrollTop() > winH / 10) {
      if (sTop > lastScroll) {
        $(".page-header").css("top", `-${headerH}px`);
      } else {
        $(".page-header").css("top", "0");
      }

      lastScroll = sTop;
    } else {
      lastScroll = 0;
    }
  });

  // hide navbar search by the time you scroll down to the first row of product
  $(window).scroll(function() {
    if ($(".feature-products .custom-stickers") === true) {
      const firstRowH = $(".feature-products .custom-stickers").offset().top;
      const pageHeaderH = $(".page-header").innerHeight();

      if ($(this).scrollTop() >= firstRowH - pageHeaderH) {
        $("header").addClass("hide");
      } else {
        $("header").removeClass("hide");
      }
    }
  });

  // Navigate to bottom text on cliking "LEARN ABOUT CUSTOM STICKERS"
  $(".learn-about-custome-stickers").click(function() {
    const customTextOffset = $(".custom-stickers-text").offset().top;

    $("body, html").animate(
      {
        scrollTop: customTextOffset
      },
      600
    );
  });
});
