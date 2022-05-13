$(window).on("load", function () {
  var vW = $(window).width();
    if (vW < 992) {
        $(".ox10-all-projects").addClass("container");
      }
});
jQuery(document).ready(function ($) {
    (function ($) {
      "use strict";
      if ($(".ox10-projects").length) {
        var vW = $(window).width();
        var vH = $(window).height();
        if (vW > 991) {
          $(".ox10-projects").css("paddingLeft", vW + "px");
          var portfolioController = new ScrollMagic.Controller();
          var portfolioW =
            $(".ox10-projects a").outerWidth() * $(".ox10-projects a").length;
          var item = $(".ox10-projects");
          var action = gsap
            .timeline()
            .to(item, { x: -(portfolioW + vW) + "px", ease: Linear.easeNone });
          var portfolioScene = new ScrollMagic.Scene({
            triggerElement: ".ox10-projects-hook",
            triggerHook: 0.15,
            duration: portfolioW - vW,
            reverse: !0,
          })
  
            .setPin(".ox10-projects-section", { pushFollowers: !0 })
            .addTo(portfolioController);
  
          var portfolioVscroll = new ScrollMagic.Scene({
            triggerElement: ".ox10-projects-section",
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