$(document).ready(function () {
  // Sticky Navigation

  $(".section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  // Scroll
  $(".scroll-plan").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-plans").offset().top },
      1000
    );
  });

  $(".scroll-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-features").offset().top },
      1000
    );
  });

  // Smooth Scrolling

  $(function () {
    $("a[href*='#']:not([href='#'])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  // Animations on scroll

  // Mobile Navigatoin
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
