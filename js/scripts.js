// $('.carousel.carousel-multi-item .carousel-item').each(function(){
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(':first');
//   }
//   next.children(':first-child').clone().appendTo($(this));

//   for (var i=0;i<4;i++) {
//     next=next.next();
//     if (!next.length) {
//       next=$(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//   }
// });

// $('#recipeCarousel').carousel({
//   interval: 10000
// })

// $('.carousel .carousel-item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//     next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));

//     if (next.next().length>0) {
//     next.next().children(':first-child').clone().appendTo($(this));
//     }
//     else {
//       $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
// });

(function ($) {
  "use strict";

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    $('.primary-nav.desktop, .primary-nav.mobile').removeClass('d-none').addClass('d-flex');
    $('.primary-nav.desktop').css('display', 'flex !important');
    $('.primary-nav, .secondary-nav .currency.dropdown, .nav-group .search').hide();
    $('.secondary-nav a button').addClass('d-none');
    $('.page-header .container > .row').removeClass('flex-column');
    $('.primary-nav').removeClass('w-100')
  }

  // mobile menu login button
  var mobileLoginButton = $("#mobile-menu-login-button");
  // mobile my accout button text
  var mobileAccountButton = $("#mobile-menu-account-button");
  // custom qty Calculation button
  var customQty = $("#calculator-custom-qty");
  // selected cal input
  // var selectedInput = $(
  //   ".quote-calculator .calculator-bg li.d-flex.justify-content-between.align-items-center"
  // );

  var selectedInput = $(".quote-calculator .calculator-bg li");

  // select check icon
  var calcCheck = $(".price .calc-check");

  // manual carousel controls
  $(".next").click(function () {
    $("#product-carousel").carousel("next");
    return false;
  });
  $(".prev").click(function () {
    $("#product-carousel").carousel("prev");
    return false;
  });

  // console.log(
  //   $(".quote-calculator .calculator-bg #calculator-custom-input").val()
  // );

  // onload
  $('a[data-toggle=collapse]').each(function () {
    var chevron = $(this).parent().next('div');
    if (chevron.hasClass('in')) {
      $(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    } else {
      const id = this.id
      if (id === 'a-support') {
        $(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        return
      }
      $(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }
  });

  // click event
  $('a[data-toggle=collapse]').click(function () {
    // swap chevron
    $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
  });

  // verify if inner text is Login or Logout and adjust on click
  mobileLoginButton.click(function () {
    $(this).text($(this).text() === "Login" ? "Logout" : "Login");

    // toggle my account button
    if (mobileLoginButton.text() === "Logout") {
      mobileAccountButton.css("display", "block");
    } else {
      mobileAccountButton.css("display", "none");
    }
  });

  // Hide custom button and display field for custom calculation
  customQty.click(function () {
    $(this).hide();
    $(".custom-calculator-input-wrapper").show();
    $("#calculator-custom-input").focus();
    selectedInput.removeClass("activated-calc-input");
    $("i.calc-check").addClass("hide");
    $(".custom-calculator-input-wrapper .discount-price .price i.calc-check").removeClass('hide');
  });

  // Highlight - select from calculator
  // selectedInput.click(function() {
  //   if ($("i.calc-check").hasClass("fab fa-check")) {
  //     $("i.calc-check").removeClass("fab fa-check");
  //   }

  //   selectedInput.removeClass("activated-calc-input");
  //   $(this).addClass("activated-calc-input");
  //   $(this)
  //     .find("i.calc-check")
  //     .addClass("fab fa-check");
  //   $(".custom-calculator-input-wrapper").hide();
  //   $("#calculator-custom-qty").show();
  // });

  // Highlight - select from calculator -- DON'T REMOVE THIS CODE
  selectedInput.click(function () {
    $(this)
      .addClass("activated-calc-input")
      .siblings()
      .removeClass("activated-calc-input");

    if ($(this).find(calcCheck).hasClass("hide")) {
      $(this)
        .find(calcCheck)
        .removeClass("hide")
        .parent()
        .parent()
        .parent()
        .siblings()
        .find(".calc-check")
        .addClass("hide");
    }

    if (customQty.css("display") === "none") {
      $(".custom-calculator-input-wrapper").hide();
      customQty.show();
    }

    $('.tool-tip').addClass('hide');
  });

  // Hide menu when resizeing the screen to desktop view
  const guest = $('.category-items.guest');
  const host  = $('.dropdown-menu.host');
  const sibling  = $('h4.sibling');
  // Move the category list into a dropdown on mobile screen
  if ($(window).innerWidth() <= 768) {
    $('.category-items.guest').appendTo(host);
    $('.art-asset .row.guest').insertBefore('.art-asset .row.host')
  } else {
    $('.category-items.guest').insertAfter(sibling);
    $('.art-asset .row.guest').prependTo('.section-content')
  }

  $(window).resize(function () {
    if ($(this).innerWidth() > 991) {
      $(".mobile-menu").removeClass("show");
      $(".primary-nav.desktop .navbar-toggler").attr("aria-expanded", "false");
    }

    // Move the category list into a dropdown on mobile screen
    if ($(this).innerWidth() <= 768) {
      $('.category-items.guest').appendTo(host);
      $('.art-asset .row.guest').insertBefore('.art-asset .row.host')
    } else {
      $('.category-items.guest').insertAfter(sibling);
      $('.art-asset .row.guest').prependTo('.section-content')
    }
  });

  // Update Go To Cart Buttons On Cross Sell Page
  const btnToChange = $(".btn-update");
  const crossSellItemUpdate = $("#cross-sell-update > li:gt()");

  crossSellItemUpdate.on("click", function () {
    btnToChange.text("Update Cart");
  });

  // Cross Sell dynamic update cart or customize
  const csButton = $("#cs-cart-sticky");
  const csButtonText = $("h3.cross-sell-cart-btn-change.text-center");
  csButton.click(function () {
    if ($("h3.cross-sell-cart-btn-change.text-center:contains(Go To Cart)")) {
      //  if button says cart send to cart
      window.location.href = "#";
    } else {
      // Send to update cart
      window.location.href = "#";
    }
  });

  // Order Option Image Change & selection

  var onHoverSame = function () {
    if ($('input:radio[name="order-option"]').is(":checked")) {
      return;
    }
    $("img#same-design-img").attr(
      "src",
      "/img/stickermaker/HowWillYouOrder_Wizard_Selected.png"
    );
  };

  var offHoverSame = function () {
    if ($('input:radio[name="order-option"]').is(":checked")) {
      return;
    }
    $("img#same-design-img").attr(
      "src",
      "/img/stickermaker/HowWillYouOrder_Wizard.png"
    );
  };

  var onHoverMultiple = function () {
    if ($('input:radio[name="order-option"]').is(":checked")) {
      return;
    }
    $("img#many-design-img").attr(
      "src",
      "/img/stickermaker/HowWillYouOrder_PageMaker_Selected.png"
    );
  };

  var offHoverMultiple = function () {
    if ($('input:radio[name="order-option"]').is(":checked")) {
      return;
    }
    $("img#many-design-img").attr(
      "src",
      "/img/stickermaker/HowWillYouOrder_PageMaker.png"
    );
  };

  // Hover Effect For Same Design
  $("img#same-design-img").hover(onHoverSame, offHoverSame);
  // Hover Effect Multiple
  $("img#many-design-img").hover(onHoverMultiple, offHoverMultiple);

  // Selected Change

  $('input:radio[name="order-option"]').change(function () {
    if ($(this).is(":checked") && $(this).val() == "same-design") {
      //  Grey out multiple image
      $("img#many-design-img").attr(
        "src",
        "/img/stickermaker/HowWillYouOrder_PageMaker.png"
      );
      // Color Single Single Image Option
      $("img#same-design-img").attr(
        "src",
        "/img/stickermaker/HowWillYouOrder_Wizard_Selected.png"
      );
    } else {
      //  grey ou single image
      $("img#same-design-img").attr(
        "src",
        "/img/stickermaker/HowWillYouOrder_Wizard.png"
      );
      // Color Multiple Option
      $("img#many-design-img").attr(
        "src",
        "/img/stickermaker/HowWillYouOrder_PageMaker_Selected.png"
      );
    }
  });


  let item_length = $(".custom-stickers .content-item").length;
  if (item_length < 6) {
    $(".view-item").hide();
    $(".content-item").show();
  } else {
    $('.custom-stickers .content-item:lt(5)').show();
    $(".view-item").show();

  }

  $(".view-item").on("click", function (e) {
    e.preventDefault();
    $(".content-item:hidden").slideDown();
    $(".view-item").hide();
    $(".lessCount").show();

  });

  $(".lessCount").on("click", function (e) {
    e.preventDefault();
    $(".content-item").hide();
    $('.custom-stickers .content-item:lt(5)').show();
    $(".lessCount").hide();
    $(".view-item").show();
  });

  // toggle between selected category when user clicks
  $('.category-items .item').each(function() {
    const dropdownHeader = $('.selected-category .dropdown .btn .dropdown-title');
    $(this).on('click', function(e) {
      e.preventDefault()
      $(e.currentTarget).addClass('selected').parent().siblings().find('.item').removeClass('selected');
      // Change the selected category on dropdown header 
      let imgSrc = $(e.currentTarget).find('img').attr('src')
      let title = $(e.currentTarget).find('span').html();
      dropdownHeader.find('img').attr('src', `${imgSrc}`);
      dropdownHeader.find('h4').html(`${title}`);
     
    })
  })



})(jQuery);