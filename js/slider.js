$(window).on("load", function () {
    if (vW < 992) {
        $(".portfolios-wrap").addClass("container");
      }
});
jQuery(document).ready(function ($) {
    (function ($) {
      "use strict";
      if ($(".portfolios").length) {
        var vW = $(window).width();
        var vH = $(window).height();
        if (vW > 991) {
          $(".portfolios").css("paddingLeft", vW + "px");
          var portfolioController = new ScrollMagic.Controller();
          var portfolioW =
            $(".portfolios a").outerWidth() * $(".portfolios a").length;
          var item = $(".portfolios");
          var action = gsap
            .timeline()
            .to(item, { x: -(portfolioW + vW) + "px", ease: Linear.easeNone });
          var portfolioScene = new ScrollMagic.Scene({
            triggerElement: ".portfolio-hook",
            triggerHook: 0.15,
            duration: portfolioW - vW,
            reverse: !0,
          })
  
            .setPin(".portfolio", { pushFollowers: !0 })
            .addTo(portfolioController);
  
          var portfolioVscroll = new ScrollMagic.Scene({
            triggerElement: ".portfolio",
            triggerHook: 0.8,
            duration: portfolioW - vW / 2,
            reverse: !0,
          })
          
            .setTween(action)
            .addTo(portfolioController);
        }
      }
    })(jQuery);
  });