jQuery(document).ready(function ($) {
    (function ($) {
      "use strict";
      if ($(".ox10-projects").length) {
        console.log("length ",$(".ox10-projects").length);
        var vW = $(window).width();
        console.log("vW ",vW);
        var vH = $(window).height();
        console.log("vH ",vH);
        if (vW > 991) {
          $(".ox10-projects").css("paddingLeft", vW + "px");
          var portfolioController = new ScrollMagic.Controller();
          console.log("portfolioController ",portfolioController);
          var portfolioW =
            $(".ox10-projects a").outerWidth() * $(".ox10-projects a").length;
            console.log("portfolioW",portfolioW);
          var item = $(".ox10-projects");
          console.log("item",item);
          var action = gsap
            .timeline()
            .to(item, { x: -(portfolioW + vW) + "px", ease: Linear.easeNone });
            console.log("action",action);
          var portfolioScene = new ScrollMagic.Scene({
            triggerElement: ".ox10-projects-hook",
            triggerHook: 0.15,
            duration: portfolioW - vW,
            reverse: !0,
          })
  
            .setPin(".ox10-projects-section", { pushFollowers: !0 })
            .addTo(portfolioController);
            console.log("portfolioScene",portfolioScene);
          var portfolioVscroll = new ScrollMagic.Scene({
            triggerElement: ".ox10-projects-section",
            triggerHook: 0.8,
            duration: portfolioW - vW / 2,
            reverse: !0,
          })
          
            .setTween(action)
            .addTo(portfolioController);
            console.log("portfolioVscroll",portfolioVscroll);
        }
      }
    })(jQuery);
  });

  (function ($) {
    "use strict";
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it =
        (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (
        Array.isArray(o) ||
        (it = _unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return { done: !0 };
          return { done: !1, value: o[i++] };
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    var images = document.querySelectorAll("img[data-src]");
    document.addEventListener("DOMContentLoaded", onReady);
    function onReady() {
      window.addEventListener("scroll", showImagesOnView, !1);
    }
    function showImagesOnView(e) {
      for (
        var _iterator = _createForOfIteratorHelperLoose(images), _step;
        !(_step = _iterator()).done;
  
      ) {
        var i = _step.value;
        if (i.getAttribute("src")) {
          continue;
        }
        var bounding = i.getBoundingClientRect();
        var isOnView =
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth);
        if (isOnView) {
          i.setAttribute("src", i.dataset.src);
          if (i.getAttribute("data-srcset")) {
            i.setAttribute("srcset", i.dataset.srcset);
          }
        }
      }
    }
  })(jQuery);