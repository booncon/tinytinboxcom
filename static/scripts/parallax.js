var ParallaxManager, ParallaxPart;

ParallaxPart = (function() {
  function ParallaxPart(el) {
    this.el = el;
    this.speed = parseFloat(this.el.getAttribute('data-parallax-speed'));
    this.maxScroll = parseInt(this.el.getAttribute('data-max-scroll'));
    this.opacityOffset = parseInt(this.el.getAttribute('data-opacity-offset'));
    this.changeOpacity = parseInt(this.el.getAttribute('data-change-opacity'));
  }

  ParallaxPart.prototype.update = function(scrollY) {
    if (scrollY > this.maxScroll) { return; }
    var offset = -(scrollY * this.speed);
    this.setYTransform(offset);
    if (this.changeOpacity === 1 && scrollY >= this.opacityOffset) {
      var opacity = (this.maxScroll - scrollY) / this.maxScroll;
      opacity = (opacity >= 0) ? opacity : 0;
      this.setFadeOut(opacity);
    } else {
      this.setFadeOut(1);
    }
  };

  ParallaxPart.prototype.setFadeOut = function(val) {
    this.el.style.opacity     = val;
  };

  ParallaxPart.prototype.setYTransform = function(val) {
    this.el.style.webkitTransform = "translate3d(0, " + val + "px, 0)";
    this.el.style.MozTransform    = "translate3d(0, " + val + "px, 0)";
    this.el.style.OTransform      = "translate3d(0, " + val + "px, 0)";
    this.el.style.transform       = "translate3d(0, " + val + "px, 0)";
    this.el.style.msTransform     = "translateY(" + val + "px)";
  };

  return ParallaxPart;

})();

ParallaxManager = (function() {

  function ParallaxManager(elements) {
    this.elements = elements;
    if (typeof elements === 'object' && elements.item) {
      this.elements = Array.prototype.slice.call(elements);
    } else if (typeof elements === 'string') {
      this.elements = document.querySelectorAll(elements);
      if (this.elements.length === 0) {
        throw new Error("Parallax: No elements found");
      }
      this.elements = Array.prototype.slice.call(this.elements);
    } else {
      throw new Error("Parallax: Element variable is not a querySelector string, Array, or NodeList");
    }
    for (var i in this.elements) {
      this.parts.push(new ParallaxPart(this.elements[i]));
    }
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  ParallaxManager.prototype.parts = [];

  ParallaxManager.prototype.onScroll = function() {
    window.requestAnimationFrame(this.scrollHandler.bind(this));
  };

  ParallaxManager.prototype.scrollHandler = function() {
    var scrollY = Math.max(window.pageYOffset, 0);
    if (scrollY > $(window).height()) {
      $('#mainNavBar, body').addClass('visible-bg');
    } else {
      $('#mainNavBar, body').removeClass('visible-bg');
    }
    for (var i in this.parts) { this.parts[i].update(scrollY); }
  };

  return ParallaxManager;

})();
