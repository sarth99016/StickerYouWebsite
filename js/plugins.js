$(document).ready(function () {
  "use strict";

  $(".owl-carousel").owlCarousel({
    //Responsive
    loop: false,
    margin: 10,
    nav: false,
    dots: true,  
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
        stagePadding: 1,
      },
      480: {
        items: 2,
        stagePadding: 18,
      },
      600: {
        items: 2,
        stagePadding: 18,
      },
      1000: {
        items: 5,
        stagePadding: 0,
        margin: 18,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>",
        ],
        nav: true,
        mouseDrag: true,
        touchDrage: true,
      },
    },
  });

  $(".owl-lg-4").owlCarousel({
    //Responsive
    loop: true,
    margin: 10,
    nav: false,
    dots: true,  
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
        stagePadding: 10,
      },
      480: {
        items: 2,
        stagePadding: 18,
      },
      600: {
        items: 2,
        stagePadding: 18,
      },
      1000: {
        items: 4,
        stagePadding: 0,
        margin: 18,
        navText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>",
        ],
        nav: true,
        mouseDrag: true,
        touchDrage: true,
      },
    },
  });


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
        stagePadding: 10,
      },
      375: {
        items: 1,
        stagePadding: 18,
      },
      768: {
        items: 2,
        stagePadding: 18,
      },
      1024: {
        items: 3,
        // stagePadding: 0
      },
    },
  });
                                                                     

  //Owl Carousel
  $("#owl-two").owlCarousel({
    //Responsive
    loop:true,
    autoHeight:true,
    margin: 10,
    nav: false,
    dots: false,
    center: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,               
      },
     
      360: {
        items: 2,     
       
      },    
      600: {
        items: 2,         
     
      },
      1000: {
        items: 3,           
        mouseDrag: true,
        touchDrage: true,
      },
    },
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
  $(".navbar-toggler").click(function () {
    $("body", "html").toggleClass("hide-scroll-y");
  });

  let winH = $("html,body").innerHeight();
  let headerH = $("header").innerHeight();
  let lastScroll = 0;

  // Menu & Search Dissapear On Scroll 1/4 Page and reappear on scrolling up
  $(window).scroll(function () {
    console.log($(this).scrollTop());
    let sTop = $(this).scrollTop();
    let headerH = $("header").innerHeight();
    if ($(this).scrollTop() > winH / 10) {
      if (sTop > lastScroll) {
        $(".page-header").css("top", `-${headerH + 15}px`);
      } else {
        $(".page-header").css("top", "0");
      }

      lastScroll = sTop;
    } else {
      lastScroll = 0;
    }
     // Show scroll-to-top button when the user scrolls to specific point
    if($(this).scrollTop() > 300) {
      $('.toTop').css('bottom', '30px')
    } else {
      $('.toTop').css('bottom', '-100px')
    }
  });

  // hide navbar search by the time you scroll down to the first row of product
  $(window).scroll(function () {
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
  $(".learn-about-custome-stickers").click(function () {
    const customTextOffset = $(".custom-stickers-text").offset().top;

    $("body, html").animate(
      {
        scrollTop: customTextOffset,
      },
      600
    );
  });

  // Show Calculator Tooltip
  $("#calculator-custom-input").bind("keydown", function () {
    $(this).offsetParent().find(".tool-tip").removeClass("hide");
  });

  //Show width & Height Tooltip
  $("#qq-width, #qq-height").bind("focus", function () {
    $(this).offsetParent().find(".tool-tip").removeClass("hide");
  });

  //Hide width & Height Tooltip on clicking outside the inuput
  $("#qq-width, #qq-height").bind("blur", function (e) {
    hideTooltip(e);
  });

  //Hide width & Height ToolTip when user inputs right values
  $("#qq-width").bind("keyup mouseup", function (e) {
    let num = $(e.target).val();
    let min = $(e.target).attr("min");
    let max = $(e.target).attr("max");

    if (num >= 0.75 && num <= 8) {
      hideTooltip(e);
    } else {
      $(this).offsetParent().find(".tool-tip").removeClass("hide");
    }
  });

  //Hide width & Height ToolTip when user inputs right values
  $("#qq-height").bind("keyup mouseup", function (e) {
    let num = $(e.target).val();
    let min = $(e.target).attr("min");
    let max = $(e.target).attr("max");

    if (num >= 0.75 && num <= 11) {
      hideTooltip(e);
    } else {
      $(this).offsetParent().find(".tool-tip").removeClass("hide");
    }
  });

  // Show Calculator Tooltip Messages
  $("#calculator-custom-input").bind("keyup mouseup", function (e) {
    const keyCodes = [
      8,
      38,
      40,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
    ];
    const leftRightArrows = [37, 39];

    let num = $("#calculator-custom-input").val();
    let min = $("#calculator-custom-input").attr("min");

    if (keyCodes.indexOf(e.which) != -1) {
      for (let i = 10; i <= 10000; i++) {
        if (i % 10 == 0) {
          if (
            (num - min >= 0 && num == i) ||
            (num > 10 && num != i && num < 10000)
          ) {
            preLoader();

            setTimeout(hideTooltip(e.target), 1000);

            setTimeout(showPrice, 1000);
          } else if (num == "") {
            $(".calculator-box .tool-tip .text").text("This field is required");
          } else if (num > i) {
            $(".calculator-box .tool-tip .text").text(
              "Enter value between 10 and 10000"
            );
          } else if (num == 0) {
            $(".calculator-box .tool-tip .text").text(
              "Enter value between 10 and 10000"
            );
          } else {
            $(".calculator-box .tool-tip .text").text(
              "Enter value between 10 and 10000"
            );
          }
        }
      }
    } else if (leftRightArrows.indexOf(e.which) != -1) {
      setTimeout(hideTooltip, 1000);
    } else {
      $(".calculator-box .tool-tip .text").text(
        "Enter value between 10 and 10000"
      );
    }
  });

  //Hide ToolTip General Function
  function hideTooltip(e) {
    $(e).offsetParent("div").find(".tool-tip").addClass("hide");
  }

  // Show Price Function
  function showPrice() {
    let num = $("#calculator-custom-input").val();

    // Calc price
    let base = 5;
    let multiplyer = num / 10;
    let price = (base * multiplyer - 0.01).toFixed(2);

    $(".custom-calculator-input-wrapper .discount-price .price .loader").css(
      "display",
      "none"
    );
    $(".custom-calculator-input-wrapper .discount-price .price span").text(
      price
    );
  }

  // Show PreLoader for a while
  function preLoader() {
    $(".custom-calculator-input-wrapper .discount-price .price .loader").css(
      "display",
      "block"
    );
    $(".custom-calculator-input-wrapper .discount-price .price span").text("");
  }

  // Add custome css when carousel viewing less than 5 products
  const products = document.querySelectorAll(".owl-carousel .card");
  const owlStage = document.querySelectorAll(".owl-stage");

  //OnLoad
  window.addEventListener("load", () => {
    owlStage.forEach((owl) => {
      if (products.length < 5) {
        owl.lastChild.style.marginRight = "0";
      }

      if (products.length > 2) {
        if (window.innerWidth < 992) {
          owl.style.marginLeft = "-40px";
        }
      }
    });
  });

  //OnResize
  window.addEventListener("resize", () => {
    owlStage.forEach((owl) => {
      if (products.length < 5) {
        owl.lastChild.style.marginRight = "0";
      }

      if (products.length > 2) {
        if (window.innerWidth < 992) {
          owl.style.marginLeft = "-40px";
        } else {
          owl.style.marginLeft = "0";
        }
      }
    });

  });

  // show secondary menu on hovering dropdown links
  const menuItem = document.querySelectorAll(
    ".dropdown-menu .menu_list .dropdown-item"
  );

  // menuItem.forEach(e => {

  // e.addEventListener('mouseover', e => {

  // const secondaryMenu = `${e.currentTarget.getAttribute('data-show')}`

  // $(`#${secondaryMenu}`).addClass('animate');

  // });

  // e.addEventListener('mouseleave', e => {

  //   const secondaryMenu = `${e.currentTarget.getAttribute('data-show')}`

  //   $(`#${secondaryMenu}`).removeClass('animate');

  // });

  // })

  //show main menu dropdown on hovering navbar links
  const navLinks = document.querySelectorAll(".collapse .dropdown");

  navLinks.forEach((e) => {
    // Show Menu Dropdwon
    e.addEventListener("mouseover", (e) => {
      const menuDropDown = e.currentTarget.querySelector(".dropdown-menu");

      $(e.currentTarget).addClass("show");

      $(menuDropDown).addClass("show");
    });

    //Hide Menu Dropdown
    e.addEventListener("mouseleave", (e) => {
      const menuDropDown = e.currentTarget.querySelector(".dropdown-menu");

      $(e.currentTarget).removeClass("show");

      $(menuDropDown).removeClass("show");
    });
  });

  // Mobile menu slide from the right
  const mobileMenuItem = document.querySelectorAll(
    ".mobile-menu .menu-links .menu-item > a"
  );
  const backwardItem = document.querySelectorAll(".backward > a");
  const mobileSubMenuItem = document.querySelectorAll(
    "#mobileShopMenu .menu_list a"
  );

  //slide in form the right
  mobileMenuItem.forEach((e) => {
    e.addEventListener("click", (e) => {
      document.querySelector(`${e.currentTarget.hash}`).classList.add("slided");
      e.preventDefault();
    });
  });

  //slide out form the left
  backwardItem.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.currentTarget.offsetParent.classList.remove("slided");
    });
  });

  //Slide subMenu From the right
  mobileSubMenuItem.forEach((e) => {
    e.addEventListener("click", (e) => {
      document.querySelector(`${e.currentTarget.hash}`).classList.add("slided");
      e.preventDefault();
    });
  });

  //Select between options
  $('.popup-options .option').each(function () {
    $(this).click(function(e) {
      $(e.currentTarget).find('input').attr('aria-checked', 'true');
      $(e.currentTarget).parent().siblings().find('input').attr('aria-checked', 'false');
      $('.popup-options input[aria-checked="false"]').removeAttr('checked').parent().parent().find('.option_img').removeClass('selected')
      $('.popup-options input[aria-checked="true"]').parent().parent().find('.option_img').addClass('selected')
    })
  });

  //close pop-up window
  $('.popup-header .close-icon , .popup-content .cancel').click(function() {
    $('.popup-window, .overlay').fadeOut()
  });

  //open popup window
  $('.stickers-wrapper .sticker a, .order-table .product_img').each(function() {
    $(this).click(function() {
      $('.popup-window, .overlay').fadeIn()
    })
  });

  //Expand  the contracted BreadCrumb items
  $('.breadcrumb').each(function() {
    $(this).click(function() {
      $('.contract').toggleClass('contracted');
      $(this).find('.target').toggleClass('contracted');
    })
  });

  //Tooltip
  document.querySelectorAll('[data-toggle="tooltip"]').forEach(function(e) {
    let target = document.querySelector(`.${e.getAttribute('data-toggle')}`);
    //mouse hover
    e.addEventListener('mouseenter', function() {target.classList.add('show')});
    e.addEventListener('mouseleave', function() {target.classList.remove('show')});
  })

 
});
