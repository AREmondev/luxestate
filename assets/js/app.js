$(document).ready(function () {
  // sticky
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 300) {
      $(".tap-to-home").removeClass("d-none");
    } else {
      $(".tap-to-home").addClass("d-none");
    }
    //  $(".sticky").addClass("stickyadd")
    // : $(".sticky").removeClass("stickyadd");
    if ($(window).scrollTop() >= 150) {
      $(".sticky").addClass("sticky-menu");
    } else {
      $(".sticky").removeClass("sticky-menu");
    }
  });

  // smouth scroll

  $(".main-menu a, a.to-home, a.logo").on("click", function (e) {
    if (this.hash !== " ") {
      e.preventDefault();
      var hash = $(this.hash);
      $("html, body").animate(
        { scrollTop: $(hash).offset().top },
        1500,
        "easeInOutExpo"
      );
    }
  });

  // menu

  $(".menu-btn").on("click", function () {
    $(".main-menu").toggleClass("show-menu");
    $(".menu-btn").toggleClass("menuopenclose");
  });

  $(".main-menu .menu > li > a").on("click", function () {
    $(".main-menu").toggleClass("show-menu");
    $(".menu-btn").toggleClass("menuopenclose");
  });
  // wow
  new WOW().init();
});
