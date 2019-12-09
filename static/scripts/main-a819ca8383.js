!(function(t) {
  "use strict"
  t.fn.fitVids = function(e) {
    var s = { customSelector: null }
    if (!document.getElementById("fit-vids-style")) {
      var i = document.head || document.getElementsByTagName("head")[0],
        n =
          ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
        o = document.createElement("div")
      ;(o.innerHTML = '<p>x</p><style id="fit-vids-style">' + n + "</style>"),
        i.appendChild(o.childNodes[1])
    }
    return (
      e && t.extend(s, e),
      this.each(function() {
        var e = [
          "iframe[src*='player.vimeo.com']",
          "iframe[src*='youtube.com']",
          "iframe[src*='youtube-nocookie.com']",
          "iframe[src*='kickstarter.com'][src*='video.html']",
          "object",
          "embed",
        ]
        s.customSelector && e.push(s.customSelector)
        var i = t(this).find(e.join(","))
        ;(i = i.not("object object")),
          i.each(function() {
            var e = t(this)
            if (
              !(
                ("embed" === this.tagName.toLowerCase() &&
                  e.parent("object").length) ||
                e.parent(".fluid-width-video-wrapper").length
              )
            ) {
              var s =
                  "object" === this.tagName.toLowerCase() ||
                  (e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)))
                    ? parseInt(e.attr("height"), 10)
                    : e.height(),
                i = isNaN(parseInt(e.attr("width"), 10))
                  ? e.width()
                  : parseInt(e.attr("width"), 10),
                n = s / i
              if (!e.attr("id")) {
                var o = "fitvid" + Math.floor(999999 * Math.random())
                e.attr("id", o)
              }
              e
                .wrap('<div class="fluid-width-video-wrapper"></div>')
                .parent(".fluid-width-video-wrapper")
                .css("padding-top", 100 * n + "%"),
                e.removeAttr("height").removeAttr("width")
            }
          })
      })
    )
  }
})(window.jQuery || window.Zepto),
  !(function(t) {
    "use strict"
    var e
    ;(e = {
      slippryWrapper: '<div class="sy-box" />',
      slideWrapper: '<div class="sy-slides-wrap" />',
      slideCrop: '<div class="sy-slides-crop" />',
      boxClass: "sy-list",
      elements: "li",
      activeClass: "sy-active",
      fillerClass: "sy-filler",
      loadingClass: "sy-loading",
      adaptiveHeight: !0,
      start: 1,
      loop: !0,
      captionsSrc: "img",
      captions: "overlay",
      captionsEl: ".sy-caption",
      initSingle: !0,
      responsive: !0,
      preload: "visible",
      pager: !0,
      pagerClass: "sy-pager",
      controls: !0,
      controlClass: "sy-controls",
      prevClass: "sy-prev",
      prevText: "Previous",
      nextClass: "sy-next",
      nextText: "Next",
      hideOnEnd: !0,
      transition: "fade",
      kenZoom: 120,
      slideMargin: 0,
      transClass: "transition",
      speed: 800,
      easing: "swing",
      continuous: !0,
      useCSS: !0,
      auto: !0,
      autoDirection: "next",
      autoHover: !0,
      autoHoverDelay: 100,
      autoDelay: 500,
      pause: 4e3,
      onSliderLoad: function() {
        return this
      },
      onSlideBefore: function() {
        return this
      },
      onSlideAfter: function() {
        return this
      },
    }),
      (t.fn.slippry = function(s) {
        var i,
          n,
          o,
          a,
          r,
          l,
          c,
          d,
          p,
          h,
          u,
          f,
          v,
          g,
          m,
          y,
          b,
          w,
          C,
          $,
          T,
          x,
          S,
          E
        return (
          (n = this),
          0 === n.length
            ? this
            : n.length > 1
            ? (n.each(function() {
                t(this).slippry(s)
              }),
              this)
            : ((i = {}),
              (i.vars = {}),
              (u = function() {
                var t, e, s
                ;(e = document.createElement("div")),
                  (s = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    MSTransition: "msTransitionEnd",
                    OTransition: "oTransitionEnd",
                    transition: "transitionEnd transitionend",
                  })
                for (t in s) if (void 0 !== e.style[t]) return s[t]
              }),
              ($ = (function() {
                var t = document.createElement("div"),
                  e = ["Khtml", "Ms", "O", "Moz", "Webkit"],
                  s = e.length
                return function(i) {
                  if (i in t.style) return !0
                  for (
                    i = i.replace(/^[a-z]/, function(t) {
                      return t.toUpperCase()
                    });
                    s--;

                  )
                    if (e[s] + i in t.style) return !0
                  return !1
                }
              })()),
              (S = function(e, s) {
                var i, n, o, a
                return (
                  (i = s.split(".")),
                  (n = t(e)),
                  (o = ""),
                  (a = ""),
                  t.each(i, function(t, e) {
                    e.indexOf("#") >= 0
                      ? (o += e.replace(/^#/, ""))
                      : (a += e + " ")
                  }),
                  o.length && n.attr("id", o),
                  a.length && n.attr("class", t.trim(a)),
                  n
                )
              }),
              (E = function() {
                var t, e, s, n
                ;(s = {}),
                  (n = {}),
                  (t = 100 - i.settings.kenZoom),
                  (n.width = i.settings.kenZoom + "%"),
                  i.vars.active.index() % 2 === 0
                    ? ((n.left = t + "%"),
                      (n.top = t + "%"),
                      (s.left = "0%"),
                      (s.top = "0%"))
                    : ((n.left = "0%"),
                      (n.top = "0%"),
                      (s.left = t + "%"),
                      (s.top = t + "%")),
                  (e = i.settings.pause + 2 * i.settings.speed),
                  i.vars.active.css(n),
                  i.vars.active.animate(s, {
                    duration: e,
                    easing: i.settings.easing,
                    queue: !1,
                  })
              }),
              (p = function() {
                i.vars.fresh
                  ? (i.vars.slippryWrapper.removeClass(i.settings.loadingClass),
                    (i.vars.fresh = !1),
                    i.settings.auto && n.startAuto(),
                    i.settings.useCSS ||
                      "kenburns" !== i.settings.transition ||
                      E(),
                    i.settings.onSliderLoad.call(void 0, i.vars.active.index()))
                  : t(
                      "." + i.settings.fillerClass,
                      i.vars.slideWrapper
                    ).addClass("ready")
              }),
              (g = function(e, s) {
                var n, o, a
                ;(n = e / s),
                  (o = (1 / n) * 100 + "%"),
                  (a = t("." + i.settings.fillerClass, i.vars.slideWrapper)),
                  a.css({ paddingTop: o }),
                  p()
              }),
              (a = function(e) {
                var s, i
                void 0 !== t("img", e).attr("src")
                  ? t("<img />")
                      .load(function() {
                        ;(s = e.width()), (i = e.height()), g(s, i)
                      })
                      .attr("src", t("img", e).attr("src"))
                  : ((s = e.width()), (i = e.height()), g(s, i))
              }),
              (o = function() {
                if (
                  (0 ===
                    t("." + i.settings.fillerClass, i.vars.slideWrapper)
                      .length &&
                    i.vars.slideWrapper.append(
                      t('<div class="' + i.settings.fillerClass + '" />')
                    ),
                  i.settings.adaptiveHeight === !0)
                )
                  a(t("." + i.settings.activeClass, n))
                else {
                  var e, s, o
                  ;(s = 0),
                    (o = 0),
                    t(i.vars.slides).each(function() {
                      t(this).height() > s && ((e = t(this)), (s = e.height())),
                        (o += 1),
                        o === i.vars.count &&
                          (void 0 === e && (e = t(t(i.vars.slides)[0])), a(e))
                    })
                }
              }),
              (v = function() {
                i.settings.pager &&
                  (t(
                    "." + i.settings.pagerClass + " li",
                    i.vars.slippryWrapper
                  ).removeClass(i.settings.activeClass),
                  t(
                    t(
                      "." + i.settings.pagerClass + " li",
                      i.vars.slippryWrapper
                    )[i.vars.active.index()]
                  ).addClass(i.settings.activeClass))
              }),
              (w = function() {
                !i.settings.loop &&
                  i.settings.hideOnEnd &&
                  (t("." + i.settings.prevClass, i.vars.slippryWrapper)[
                    i.vars.first ? "hide" : "show"
                  ](),
                  t("." + i.settings.nextClass, i.vars.slippryWrapper)[
                    i.vars.last ? "hide" : "show"
                  ]())
              }),
              (l = function() {
                var e, s
                i.settings.captions !== !1 &&
                  ((e =
                    "img" !== i.settings.captionsSrc
                      ? i.vars.active.attr("title")
                      : void 0 !== t("img", i.vars.active).attr("title")
                      ? t("img", i.vars.active).attr("title")
                      : t("img", i.vars.active).attr("alt")),
                  (s =
                    "custom" !== i.settings.captions
                      ? t(i.settings.captionsEl, i.vars.slippryWrapper)
                      : t(i.settings.captionsEl)),
                  void 0 !== e && "" !== e ? s.html(e).show() : s.hide())
              }),
              (n.startAuto = function() {
                void 0 === i.vars.timer &&
                  void 0 === i.vars.delay &&
                  ((i.vars.delay = window.setTimeout(
                    function() {
                      ;(i.vars.autodelay = !1),
                        (i.vars.timer = window.setInterval(function() {
                          ;(i.vars.trigger = "auto"),
                            b(i.settings.autoDirection)
                        }, i.settings.pause))
                    },
                    i.vars.autodelay
                      ? i.settings.autoHoverDelay
                      : i.settings.autoDelay
                  )),
                  i.settings.autoHover &&
                    i.vars.slideWrapper
                      .unbind("mouseenter")
                      .unbind("mouseleave")
                      .bind("mouseenter", function() {
                        void 0 !== i.vars.timer
                          ? ((i.vars.hoverStop = !0), n.stopAuto())
                          : (i.vars.hoverStop = !1)
                      })
                      .bind("mouseleave", function() {
                        i.vars.hoverStop &&
                          ((i.vars.autodelay = !0), n.startAuto())
                      }))
              }),
              (n.stopAuto = function() {
                window.clearInterval(i.vars.timer),
                  (i.vars.timer = void 0),
                  window.clearTimeout(i.vars.delay),
                  (i.vars.delay = void 0)
              }),
              (n.refresh = function() {
                i.vars.slides.removeClass(i.settings.activeClass),
                  i.vars.active.addClass(i.settings.activeClass),
                  i.settings.responsive ? o() : p(),
                  w(),
                  v(),
                  l()
              }),
              (y = function() {
                n.refresh()
              }),
              (h = function() {
                ;(i.vars.moving = !1),
                  i.vars.active.removeClass(i.settings.transClass),
                  i.vars.fresh || i.vars.old.removeClass("sy-ken"),
                  i.vars.old.removeClass(i.settings.transClass),
                  i.settings.onSlideAfter.call(
                    void 0,
                    i.vars.active,
                    i.vars.old.index(),
                    i.vars.active.index()
                  ),
                  i.settings.auto &&
                    ((i.vars.hoverStop && void 0 !== i.vars.hoverStop) ||
                      n.startAuto())
              }),
              (m = function() {
                var e, s, o, a, r, l, c
                i.settings.onSlideBefore.call(
                  void 0,
                  i.vars.active,
                  i.vars.old.index(),
                  i.vars.active.index()
                ),
                  i.settings.transition !== !1
                    ? ((i.vars.moving = !0),
                      "fade" === i.settings.transition ||
                      "kenburns" === i.settings.transition
                        ? (i.vars.fresh
                            ? (i.settings.useCSS
                                ? i.vars.slides.css({
                                    transitionDuration: i.settings.speed + "ms",
                                    opacity: 0,
                                  })
                                : i.vars.slides.css({ opacity: 0 }),
                              i.vars.active.css("opacity", 1),
                              "kenburns" === i.settings.transition &&
                                i.settings.useCSS &&
                                ((r = i.settings.pause + 2 * i.settings.speed),
                                i.vars.slides.css({
                                  animationDuration: r + "ms",
                                }),
                                i.vars.active.addClass("sy-ken")),
                              h())
                            : i.settings.useCSS
                            ? (i.vars.old
                                .addClass(i.settings.transClass)
                                .css("opacity", 0),
                              i.vars.active
                                .addClass(i.settings.transClass)
                                .css("opacity", 1),
                              "kenburns" === i.settings.transition &&
                                i.vars.active.addClass("sy-ken"),
                              t(window)
                                .off("focus")
                                .on("focus", function() {
                                  i.vars.moving &&
                                    i.vars.old.trigger(i.vars.transition)
                                }),
                              i.vars.old.one(i.vars.transition, function() {
                                return h(), this
                              }))
                            : ("kenburns" === i.settings.transition && E(),
                              i.vars.old
                                .addClass(i.settings.transClass)
                                .animate(
                                  { opacity: 0 },
                                  i.settings.speed,
                                  i.settings.easing,
                                  function() {
                                    h()
                                  }
                                ),
                              i.vars.active
                                .addClass(i.settings.transClass)
                                .css("opacity", 0)
                                .animate(
                                  { opacity: 1 },
                                  i.settings.speed,
                                  i.settings.easing
                                )),
                          y())
                        : ("horizontal" === i.settings.transition ||
                            "vertical" === i.settings.transition) &&
                          ((l =
                            "horizontal" === i.settings.transition
                              ? "left"
                              : "top"),
                          (e =
                            "-" +
                            i.vars.active.index() *
                              (100 + i.settings.slideMargin) +
                            "%"),
                          i.vars.fresh
                            ? (n.css(l, e), h())
                            : ((c = {}),
                              i.settings.continuous &&
                                (!i.vars.jump ||
                                  ("controls" !== i.vars.trigger &&
                                    "auto" !== i.vars.trigger) ||
                                  ((s = !0),
                                  (a = e),
                                  i.vars.first
                                    ? ((o = 0),
                                      i.vars.active.css(
                                        l,
                                        i.vars.count *
                                          (100 + i.settings.slideMargin) +
                                          "%"
                                      ),
                                      (e =
                                        "-" +
                                        i.vars.count *
                                          (100 + i.settings.slideMargin) +
                                        "%"))
                                    : ((o =
                                        (i.vars.count - 1) *
                                          (100 + i.settings.slideMargin) +
                                        "%"),
                                      i.vars.active.css(
                                        l,
                                        -(100 + i.settings.slideMargin) + "%"
                                      ),
                                      (e =
                                        100 + i.settings.slideMargin + "%")))),
                              i.vars.active.addClass(i.settings.transClass),
                              i.settings.useCSS
                                ? ((c[l] = e),
                                  (c.transitionDuration =
                                    i.settings.speed + "ms"),
                                  n.addClass(i.settings.transition),
                                  n.css(c),
                                  t(window)
                                    .off("focus")
                                    .on("focus", function() {
                                      i.vars.moving &&
                                        n.trigger(i.vars.transition)
                                    }),
                                  n.one(i.vars.transition, function() {
                                    return (
                                      n.removeClass(i.settings.transition),
                                      s &&
                                        (i.vars.active.css(l, o),
                                        (c[l] = a),
                                        (c.transitionDuration = "0ms"),
                                        n.css(c)),
                                      h(),
                                      this
                                    )
                                  }))
                                : ((c[l] = e),
                                  n
                                    .stop()
                                    .animate(
                                      c,
                                      i.settings.speed,
                                      i.settings.easing,
                                      function() {
                                        return (
                                          s &&
                                            (i.vars.active.css(l, o),
                                            n.css(l, a)),
                                          h(),
                                          this
                                        )
                                      }
                                    ))),
                          y()))
                    : (y(), h())
              }),
              (C = function(t) {
                ;(i.vars.first = i.vars.last = !1),
                  "prev" === t || 0 === t
                    ? (i.vars.first = !0)
                    : ("next" === t || t === i.vars.count - 1) &&
                      (i.vars.last = !0)
              }),
              (b = function(e) {
                var s, o
                i.vars.moving ||
                  ("auto" !== i.vars.trigger && n.stopAuto(),
                  (s = i.vars.active.index()),
                  "prev" === e
                    ? ((o = e),
                      s > 0
                        ? (e = s - 1)
                        : i.settings.loop && (e = i.vars.count - 1))
                    : "next" === e
                    ? ((o = e),
                      s < i.vars.count - 1
                        ? (e = s + 1)
                        : i.settings.loop && (e = 0))
                    : ((e -= 1), (o = s > e ? "prev" : "next")),
                  (i.vars.jump = !1),
                  "prev" === e ||
                    "next" === e ||
                    (e === s && !i.vars.fresh) ||
                    (C(e),
                    (i.vars.old = i.vars.active),
                    (i.vars.active = t(i.vars.slides[e])),
                    ((0 === s && "prev" === o) ||
                      (s === i.vars.count - 1 && "next" === o)) &&
                      (i.vars.jump = !0),
                    m()))
              }),
              (n.goToSlide = function(t) {
                ;(i.vars.trigger = "external"), b(t)
              }),
              (n.goToNextSlide = function() {
                ;(i.vars.trigger = "external"), b("next")
              }),
              (n.goToPrevSlide = function() {
                ;(i.vars.trigger = "external"), b("prev")
              }),
              (c = function() {
                if (i.settings.pager && i.vars.count > 1) {
                  var e, s, n
                  for (
                    e = i.vars.slides.length,
                      n = t('<ul class="' + i.settings.pagerClass + '" />'),
                      s = 1;
                    e + 1 > s;
                    s += 1
                  )
                    n.append(
                      t("<li />").append(
                        t('<a href="#' + s + '">' + s + "</a>")
                      )
                    )
                  i.vars.slippryWrapper.append(n),
                    t(
                      "." + i.settings.pagerClass + " a",
                      i.vars.slippryWrapper
                    ).click(function() {
                      return (
                        (i.vars.trigger = "pager"),
                        b(parseInt(this.hash.split("#")[1], 10)),
                        !1
                      )
                    }),
                    v()
                }
              }),
              (d = function() {
                i.settings.controls &&
                  i.vars.count > 1 &&
                  (i.vars.slideWrapper.append(
                    t('<ul class="' + i.settings.controlClass + '" />')
                      .append(
                        '<li class="' +
                          i.settings.prevClass +
                          '"><a href="#prev">' +
                          i.settings.prevText +
                          "</a></li>"
                      )
                      .append(
                        '<li class="' +
                          i.settings.nextClass +
                          '"><a href="#next">' +
                          i.settings.nextText +
                          "</a></li>"
                      )
                  ),
                  t(
                    "." + i.settings.controlClass + " a",
                    i.vars.slippryWrapper
                  ).click(function() {
                    return (
                      (i.vars.trigger = "controls"),
                      b(this.hash.split("#")[1]),
                      !1
                    )
                  }),
                  w())
              }),
              (f = function() {
                i.settings.captions !== !1 &&
                  ("overlay" === i.settings.captions
                    ? i.vars.slideWrapper.append(
                        t('<div class="sy-caption-wrap" />').html(
                          S("<div />", i.settings.captionsEl)
                        )
                      )
                    : "below" === i.settings.captions &&
                      i.vars.slippryWrapper.append(
                        t('<div class="sy-caption-wrap" />').html(
                          S("<div />", i.settings.captionsEl)
                        )
                      ))
              }),
              (x = function() {
                b(i.vars.active.index() + 1)
              }),
              (T = function(e) {
                var s, n, o, a
                return (
                  (a = "all" === i.settings.preload ? e : i.vars.active),
                  (o = t("img, iframe", a)),
                  (s = o.length),
                  0 === s
                    ? void x()
                    : ((n = 0),
                      void o.each(function() {
                        t(this)
                          .one("load error", function() {
                            ++n === s && x()
                          })
                          .each(function() {
                            this.complete && t(this).load()
                          })
                      }))
                )
              }),
              (n.getCurrentSlide = function() {
                return i.vars.active
              }),
              (n.getSlideCount = function() {
                return i.vars.count
              }),
              (n.destroySlider = function() {
                i.vars.fresh === !1 &&
                  (n.stopAuto(),
                  (i.vars.moving = !1),
                  i.vars.slides.each(function() {
                    void 0 !== t(this).data("sy-cssBckup")
                      ? t(this).attr("style", t(this).data("sy-cssBckup"))
                      : t(this).removeAttr("style"),
                      void 0 !== t(this).data("sy-classBckup")
                        ? t(this).attr("class", t(this).data("sy-classBckup"))
                        : t(this).removeAttr("class")
                  }),
                  void 0 !== n.data("sy-cssBckup")
                    ? n.attr("style", n.data("sy-cssBckup"))
                    : n.removeAttr("style"),
                  void 0 !== n.data("sy-classBckup")
                    ? n.attr("class", n.data("sy-classBckup"))
                    : n.removeAttr("class"),
                  i.vars.slippryWrapper.before(n),
                  i.vars.slippryWrapper.remove(),
                  (i.vars.fresh = void 0))
              }),
              (n.reloadSlider = function() {
                n.destroySlider(), r()
              }),
              (r = function() {
                var o
                return (
                  (i.settings = t.extend({}, e, s)),
                  (i.vars.slides = t(i.settings.elements, n)),
                  (i.vars.count = i.vars.slides.length),
                  i.settings.useCSS &&
                    ($("transition") || (i.settings.useCSS = !1),
                    (i.vars.transition = u())),
                  n.data("sy-cssBckup", n.attr("style")),
                  n.data("sy-classBackup", n.attr("class")),
                  n
                    .addClass(i.settings.boxClass)
                    .wrap(i.settings.slippryWrapper)
                    .wrap(i.settings.slideWrapper)
                    .wrap(i.settings.slideCrop),
                  (i.vars.slideWrapper = n.parent().parent()),
                  (i.vars.slippryWrapper = i.vars.slideWrapper
                    .parent()
                    .addClass(i.settings.loadingClass)),
                  (i.vars.fresh = !0),
                  i.vars.slides.each(function() {
                    t(this).addClass("sy-slide " + i.settings.transition),
                      i.settings.useCSS && t(this).addClass("useCSS"),
                      "horizontal" === i.settings.transition
                        ? t(this).css(
                            "left",
                            t(this).index() * (100 + i.settings.slideMargin) +
                              "%"
                          )
                        : "vertical" === i.settings.transition &&
                          t(this).css(
                            "top",
                            t(this).index() * (100 + i.settings.slideMargin) +
                              "%"
                          )
                  }),
                  i.vars.count > 1 || i.settings.initSingle
                    ? (-1 === t("." + i.settings.activeClass, n).index()
                        ? ((o =
                            "random" === i.settings.start
                              ? Math.round(Math.random() * (i.vars.count - 1))
                              : i.settings.start > 0 &&
                                i.settings.start <= i.vars.count
                              ? i.settings.start - 1
                              : 0),
                          (i.vars.active = t(i.vars.slides[o]).addClass(
                            i.settings.activeClass
                          )))
                        : (i.vars.active = t("." + i.settings.activeClass, n)),
                      d(),
                      c(),
                      f(),
                      void T(i.vars.slides))
                    : this
                )
              }),
              r(),
              this)
        )
      })
  })(jQuery),
  (function(t, e) {
    "function" == typeof define && define.amd
      ? define([], e(t))
      : "object" == typeof exports
      ? (module.exports = e(t))
      : (t.smoothScroll = e(t))
  })(
    "undefined" != typeof global ? global : this.window || this.global,
    function(t) {
      "use strict"
      var e,
        s,
        i,
        n,
        o = {},
        a = "querySelector" in document && "addEventListener" in t,
        r = {
          selector: "[data-scroll]",
          selectorHeader: "[data-scroll-header]",
          speed: 500,
          easing: "easeInOutCubic",
          offset: 0,
          updateURL: !0,
          callback: function() {},
        },
        l = function() {
          var t = {},
            e = !1,
            s = 0,
            i = arguments.length
          "[object Boolean]" === Object.prototype.toString.call(arguments[0]) &&
            ((e = arguments[0]), s++)
          for (
            var n = function(s) {
              for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) &&
                  (e &&
                  "[object Object]" === Object.prototype.toString.call(s[i])
                    ? (t[i] = l(!0, t[i], s[i]))
                    : (t[i] = s[i]))
            };
            i > s;
            s++
          ) {
            var o = arguments[s]
            n(o)
          }
          return t
        },
        c = function(t) {
          return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
        },
        d = function(t, e) {
          var s,
            i,
            n = e.charAt(0),
            o = "classList" in document.documentElement
          for (
            "[" === n &&
            ((e = e.substr(1, e.length - 2)),
            (s = e.split("=")),
            s.length > 1 &&
              ((i = !0), (s[1] = s[1].replace(/"/g, "").replace(/'/g, ""))));
            t && t !== document;
            t = t.parentNode
          ) {
            if ("." === n)
              if (o) {
                if (t.classList.contains(e.substr(1))) return t
              } else if (
                new RegExp("(^|\\s)" + e.substr(1) + "(\\s|$)").test(
                  t.className
                )
              )
                return t
            if ("#" === n && t.id === e.substr(1)) return t
            if ("[" === n && t.hasAttribute(s[0])) {
              if (!i) return t
              if (t.getAttribute(s[0]) === s[1]) return t
            }
            if (t.tagName.toLowerCase() === e) return t
          }
          return null
        },
        p = function(t) {
          for (
            var e,
              s = String(t),
              i = s.length,
              n = -1,
              o = "",
              a = s.charCodeAt(0);
            ++n < i;

          ) {
            if (((e = s.charCodeAt(n)), 0 === e))
              throw new InvalidCharacterError(
                "Invalid character: the input contains U+0000."
              )
            o +=
              (e >= 1 && 31 >= e) ||
              127 == e ||
              (0 === n && e >= 48 && 57 >= e) ||
              (1 === n && e >= 48 && 57 >= e && 45 === a)
                ? "\\" + e.toString(16) + " "
                : e >= 128 ||
                  45 === e ||
                  95 === e ||
                  (e >= 48 && 57 >= e) ||
                  (e >= 65 && 90 >= e) ||
                  (e >= 97 && 122 >= e)
                ? s.charAt(n)
                : "\\" + s.charAt(n)
          }
          return o
        },
        h = function(t, e) {
          var s
          return (
            "easeInQuad" === t && (s = e * e),
            "easeOutQuad" === t && (s = e * (2 - e)),
            "easeInOutQuad" === t &&
              (s = 0.5 > e ? 2 * e * e : -1 + (4 - 2 * e) * e),
            "easeInCubic" === t && (s = e * e * e),
            "easeOutCubic" === t && (s = --e * e * e + 1),
            "easeInOutCubic" === t &&
              (s =
                0.5 > e
                  ? 4 * e * e * e
                  : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1),
            "easeInQuart" === t && (s = e * e * e * e),
            "easeOutQuart" === t && (s = 1 - --e * e * e * e),
            "easeInOutQuart" === t &&
              (s = 0.5 > e ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e),
            "easeInQuint" === t && (s = e * e * e * e * e),
            "easeOutQuint" === t && (s = 1 + --e * e * e * e * e),
            "easeInOutQuint" === t &&
              (s =
                0.5 > e
                  ? 16 * e * e * e * e * e
                  : 1 + 16 * --e * e * e * e * e),
            s || e
          )
        },
        u = function(t, e, s) {
          var i = 0
          if (t.offsetParent)
            do (i += t.offsetTop), (t = t.offsetParent)
            while (t)
          return (i = i - e - s), i >= 0 ? i : 0
        },
        f = function() {
          return Math.max(
            t.document.body.scrollHeight,
            t.document.documentElement.scrollHeight,
            t.document.body.offsetHeight,
            t.document.documentElement.offsetHeight,
            t.document.body.clientHeight,
            t.document.documentElement.clientHeight
          )
        },
        v = function(t) {
          return t && "object" == typeof JSON && "function" == typeof JSON.parse
            ? JSON.parse(t)
            : {}
        },
        g = function(e, s) {
          t.history.pushState &&
            (s || "true" === s) &&
            "file:" !== t.location.protocol &&
            t.history.pushState(
              null,
              null,
              [
                t.location.protocol,
                "//",
                t.location.host,
                t.location.pathname,
                t.location.search,
                e,
              ].join("")
            )
        },
        m = function(t) {
          return null === t ? 0 : c(t) + t.offsetTop
        }
      o.animateScroll = function(e, s, o) {
        var a = v(e ? e.getAttribute("data-options") : null),
          c = l(c || r, o || {}, a)
        s = "#" + p(s.substr(1))
        var d =
            "#" === s
              ? t.document.documentElement
              : t.document.querySelector(s),
          y = t.pageYOffset
        i || (i = t.document.querySelector(c.selectorHeader)), n || (n = m(i))
        var b,
          w,
          C,
          $ = u(d, n, parseInt(c.offset, 10)),
          T = $ - y,
          x = f(),
          S = 0
        g(s, c.updateURL)
        var E = function(i, n, o) {
            var a = t.pageYOffset
            ;(i == n || a == n || t.innerHeight + a >= x) &&
              (clearInterval(o), d.focus(), c.callback(e, s))
          },
          k = function() {
            ;(S += 16),
              (w = S / parseInt(c.speed, 10)),
              (w = w > 1 ? 1 : w),
              (C = y + T * h(c.easing, w)),
              t.scrollTo(0, Math.floor(C)),
              E(C, $, b)
          },
          I = function() {
            b = setInterval(k, 16)
          }
        0 === t.pageYOffset && t.scrollTo(0, 0), I()
      }
      var y = function(t) {
          var s = d(t.target, e.selector)
          s &&
            "a" === s.tagName.toLowerCase() &&
            (t.preventDefault(), o.animateScroll(s, s.hash, e))
        },
        b = function(t) {
          s ||
            (s = setTimeout(function() {
              ;(s = null), (n = m(i))
            }, 66))
        }
      return (
        (o.destroy = function() {
          e &&
            (t.document.removeEventListener("click", y, !1),
            t.removeEventListener("resize", b, !1),
            (e = null),
            (s = null),
            (i = null),
            (n = null))
        }),
        (o.init = function(s) {
          a &&
            (o.destroy(),
            (e = l(r, s || {})),
            (i = t.document.querySelector(e.selectorHeader)),
            (n = m(i)),
            t.document.addEventListener("click", y, !1),
            i && t.addEventListener("resize", b, !1))
        }),
        o
      )
    }
  ),
  +(function(t) {
    "use strict"
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        }
      for (var s in e) if (void 0 !== t.style[s]) return { end: e[s] }
      return !1
    }
    ;(t.fn.emulateTransitionEnd = function(e) {
      var s = !1,
        i = this
      t(this).one("bsTransitionEnd", function() {
        s = !0
      })
      var n = function() {
        s || t(i).trigger(t.support.transition.end)
      }
      return setTimeout(n, e), this
    }),
      t(function() {
        ;(t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function(e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0
              },
            })
      })
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      return this.each(function() {
        var s = t(this),
          n = s.data("bs.alert")
        n || s.data("bs.alert", (n = new i(this))),
          "string" == typeof e && n[e].call(s)
      })
    }
    var s = '[data-dismiss="alert"]',
      i = function(e) {
        t(e).on("click", s, this.close)
      }
    ;(i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.close = function(e) {
        function s() {
          a.detach()
            .trigger("closed.bs.alert")
            .remove()
        }
        var n = t(this),
          o = n.attr("data-target")
        o || ((o = n.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, "")))
        var a = t(o)
        e && e.preventDefault(),
          a.length || (a = n.closest(".alert")),
          a.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (a.removeClass("in"),
            t.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", s)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : s())
      })
    var n = t.fn.alert
    ;(t.fn.alert = e),
      (t.fn.alert.Constructor = i),
      (t.fn.alert.noConflict = function() {
        return (t.fn.alert = n), this
      }),
      t(document).on("click.bs.alert.data-api", s, i.prototype.close)
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.button"),
          o = "object" == typeof e && e
        n || i.data("bs.button", (n = new s(this, o))),
          "toggle" == e ? n.toggle() : e && n.setState(e)
      })
    }
    var s = function(e, i) {
      ;(this.$element = t(e)),
        (this.options = t.extend({}, s.DEFAULTS, i)),
        (this.isLoading = !1)
    }
    ;(s.VERSION = "3.3.5"),
      (s.DEFAULTS = { loadingText: "loading..." }),
      (s.prototype.setState = function(e) {
        var s = "disabled",
          i = this.$element,
          n = i.is("input") ? "val" : "html",
          o = i.data()
        ;(e += "Text"),
          null == o.resetText && i.data("resetText", i[n]()),
          setTimeout(
            t.proxy(function() {
              i[n](null == o[e] ? this.options[e] : o[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0), i.addClass(s).attr(s, s))
                  : this.isLoading &&
                    ((this.isLoading = !1), i.removeClass(s).removeAttr(s))
            }, this),
            0
          )
      }),
      (s.prototype.toggle = function() {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]')
        if (e.length) {
          var s = this.$element.find("input")
          "radio" == s.prop("type")
            ? (s.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == s.prop("type") &&
              (s.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            s.prop("checked", this.$element.hasClass("active")),
            t && s.trigger("change")
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
      })
    var i = t.fn.button
    ;(t.fn.button = e),
      (t.fn.button.Constructor = s),
      (t.fn.button.noConflict = function() {
        return (t.fn.button = i), this
      }),
      t(document)
        .on("click.bs.button.data-api", '[data-toggle^="button"]', function(s) {
          var i = t(s.target)
          i.hasClass("btn") || (i = i.closest(".btn")),
            e.call(i, "toggle"),
            t(s.target).is('input[type="radio"]') ||
              t(s.target).is('input[type="checkbox"]') ||
              s.preventDefault()
        })
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function(e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type))
          }
        )
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.carousel"),
          o = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e),
          a = "string" == typeof e ? e : o.slide
        n || i.data("bs.carousel", (n = new s(this, o))),
          "number" == typeof e
            ? n.to(e)
            : a
            ? n[a]()
            : o.interval && n.pause().cycle()
      })
    }
    var s = function(e, s) {
      ;(this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = s),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    }
    ;(s.VERSION = "3.3.5"),
      (s.TRANSITION_DURATION = 600),
      (s.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (s.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev()
              break
            case 39:
              this.next()
              break
            default:
              return
          }
          t.preventDefault()
        }
      }),
      (s.prototype.cycle = function(e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        )
      }),
      (s.prototype.getItemIndex = function(t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        )
      }),
      (s.prototype.getItemForDirection = function(t, e) {
        var s = this.getItemIndex(e),
          i =
            ("prev" == t && 0 === s) ||
            ("next" == t && s == this.$items.length - 1)
        if (i && !this.options.wrap) return e
        var n = "prev" == t ? -1 : 1,
          o = (s + n) % this.$items.length
        return this.$items.eq(o)
      }),
      (s.prototype.to = function(t) {
        var e = this,
          s = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          )
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function() {
              e.to(t)
            })
          : s == t
          ? this.pause().cycle()
          : this.slide(t > s ? "next" : "prev", this.$items.eq(t))
      }),
      (s.prototype.pause = function(e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        )
      }),
      (s.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
      }),
      (s.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
      }),
      (s.prototype.slide = function(e, i) {
        var n = this.$element.find(".item.active"),
          o = i || this.getItemForDirection(e, n),
          a = this.interval,
          r = "next" == e ? "left" : "right",
          l = this
        if (o.hasClass("active")) return (this.sliding = !1)
        var c = o[0],
          d = t.Event("slide.bs.carousel", { relatedTarget: c, direction: r })
        if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), a && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active")
            var p = t(this.$indicators.children()[this.getItemIndex(o)])
            p && p.addClass("active")
          }
          var h = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: r,
          })
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(e),
                o[0].offsetWidth,
                n.addClass(r),
                o.addClass(r),
                n
                  .one("bsTransitionEnd", function() {
                    o.removeClass([e, r].join(" ")).addClass("active"),
                      n.removeClass(["active", r].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function() {
                        l.$element.trigger(h)
                      }, 0)
                  })
                  .emulateTransitionEnd(s.TRANSITION_DURATION))
              : (n.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(h)),
            a && this.cycle(),
            this
          )
        }
      })
    var i = t.fn.carousel
    ;(t.fn.carousel = e),
      (t.fn.carousel.Constructor = s),
      (t.fn.carousel.noConflict = function() {
        return (t.fn.carousel = i), this
      })
    var n = function(s) {
      var i,
        n = t(this),
        o = t(
          n.attr("data-target") ||
            ((i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""))
        )
      if (o.hasClass("carousel")) {
        var a = t.extend({}, o.data(), n.data()),
          r = n.attr("data-slide-to")
        r && (a.interval = !1),
          e.call(o, a),
          r && o.data("bs.carousel").to(r),
          s.preventDefault()
      }
    }
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", n)
      .on("click.bs.carousel.data-api", "[data-slide-to]", n),
      t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
          var s = t(this)
          e.call(s, s.data())
        })
      })
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      var s,
        i =
          e.attr("data-target") ||
          ((s = e.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""))
      return t(i)
    }
    function s(e) {
      return this.each(function() {
        var s = t(this),
          n = s.data("bs.collapse"),
          o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e)
        !n && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
          n || s.data("bs.collapse", (n = new i(this, o))),
          "string" == typeof e && n[e]()
      })
    }
    var i = function(e, s) {
      ;(this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, s)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    }
    ;(i.VERSION = "3.3.5"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function() {
        var t = this.$element.hasClass("width")
        return t ? "width" : "height"
      }),
      (i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            n =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing")
          if (
            !(
              n &&
              n.length &&
              ((e = n.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var o = t.Event("show.bs.collapse")
            if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
              n &&
                n.length &&
                (s.call(n, "hide"), e || n.data("bs.collapse", null))
              var a = this.dimension()
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [a](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1)
              var r = function() {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [a](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse")
              }
              if (!t.support.transition) return r.call(this)
              var l = t.camelCase(["scroll", a].join("-"))
              this.$element
                .one("bsTransitionEnd", t.proxy(r, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [a](this.$element[0][l])
            }
          }
        }
      }),
      (i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse")
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var s = this.dimension()
            this.$element[s](this.$element[s]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1)
            var n = function() {
              ;(this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse")
            }
            return t.support.transition
              ? void this.$element[s](0)
                  .one("bsTransitionEnd", t.proxy(n, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n.call(this)
          }
        }
      }),
      (i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
      }),
      (i.prototype.getParent = function() {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function(s, i) {
              var n = t(i)
              this.addAriaAndCollapsedClass(e(n), n)
            }, this)
          )
          .end()
      }),
      (i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var s = t.hasClass("in")
        t.attr("aria-expanded", s),
          e.toggleClass("collapsed", !s).attr("aria-expanded", s)
      })
    var n = t.fn.collapse
    ;(t.fn.collapse = s),
      (t.fn.collapse.Constructor = i),
      (t.fn.collapse.noConflict = function() {
        return (t.fn.collapse = n), this
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function(i) {
          var n = t(this)
          n.attr("data-target") || i.preventDefault()
          var o = e(n),
            a = o.data("bs.collapse"),
            r = a ? "toggle" : n.data()
          s.call(o, r)
        }
      )
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      var s = e.attr("data-target")
      s ||
        ((s = e.attr("href")),
        (s = s && /#[A-Za-z]/.test(s) && s.replace(/.*(?=#[^\s]*$)/, "")))
      var i = s && t(s)
      return i && i.length ? i : e.parent()
    }
    function s(s) {
      ;(s && 3 === s.which) ||
        (t(n).remove(),
        t(o).each(function() {
          var i = t(this),
            n = e(i),
            o = { relatedTarget: this }
          n.hasClass("open") &&
            ((s &&
              "click" == s.type &&
              /input|textarea/i.test(s.target.tagName) &&
              t.contains(n[0], s.target)) ||
              (n.trigger((s = t.Event("hide.bs.dropdown", o))),
              s.isDefaultPrevented() ||
                (i.attr("aria-expanded", "false"),
                n.removeClass("open").trigger("hidden.bs.dropdown", o))))
        }))
    }
    function i(e) {
      return this.each(function() {
        var s = t(this),
          i = s.data("bs.dropdown")
        i || s.data("bs.dropdown", (i = new a(this))),
          "string" == typeof e && i[e].call(s)
      })
    }
    var n = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      a = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
      }
    ;(a.VERSION = "3.3.5"),
      (a.prototype.toggle = function(i) {
        var n = t(this)
        if (!n.is(".disabled, :disabled")) {
          var o = e(n),
            a = o.hasClass("open")
          if ((s(), !a)) {
            "ontouchstart" in document.documentElement &&
              !o.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", s)
            var r = { relatedTarget: this }
            if (
              (o.trigger((i = t.Event("show.bs.dropdown", r))),
              i.isDefaultPrevented())
            )
              return
            n.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger("shown.bs.dropdown", r)
          }
          return !1
        }
      }),
      (a.prototype.keydown = function(s) {
        if (
          /(38|40|27|32)/.test(s.which) &&
          !/input|textarea/i.test(s.target.tagName)
        ) {
          var i = t(this)
          if (
            (s.preventDefault(),
            s.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var n = e(i),
              a = n.hasClass("open")
            if ((!a && 27 != s.which) || (a && 27 == s.which))
              return (
                27 == s.which && n.find(o).trigger("focus"), i.trigger("click")
              )
            var r = " li:not(.disabled):visible a",
              l = n.find(".dropdown-menu" + r)
            if (l.length) {
              var c = l.index(s.target)
              38 == s.which && c > 0 && c--,
                40 == s.which && c < l.length - 1 && c++,
                ~c || (c = 0),
                l.eq(c).trigger("focus")
            }
          }
        }
      })
    var r = t.fn.dropdown
    ;(t.fn.dropdown = i),
      (t.fn.dropdown.Constructor = a),
      (t.fn.dropdown.noConflict = function() {
        return (t.fn.dropdown = r), this
      }),
      t(document)
        .on("click.bs.dropdown.data-api", s)
        .on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
          t.stopPropagation()
        })
        .on("click.bs.dropdown.data-api", o, a.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, a.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          a.prototype.keydown
        )
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e, i) {
      return this.each(function() {
        var n = t(this),
          o = n.data("bs.modal"),
          a = t.extend({}, s.DEFAULTS, n.data(), "object" == typeof e && e)
        o || n.data("bs.modal", (o = new s(this, a))),
          "string" == typeof e ? o[e](i) : a.show && o.show(i)
      })
    }
    var s = function(e, s) {
      ;(this.options = s),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function() {
              this.$element.trigger("loaded.bs.modal")
            }, this)
          )
    }
    ;(s.VERSION = "3.3.5"),
      (s.TRANSITION_DURATION = 300),
      (s.BACKDROP_TRANSITION_DURATION = 150),
      (s.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (s.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
      }),
      (s.prototype.show = function(e) {
        var i = this,
          n = t.Event("show.bs.modal", { relatedTarget: e })
        this.$element.trigger(n),
          this.isShown ||
            n.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
              i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
              })
            }),
            this.backdrop(function() {
              var n = t.support.transition && i.$element.hasClass("fade")
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                n && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus()
              var o = t.Event("shown.bs.modal", { relatedTarget: e })
              n
                ? i.$dialog
                    .one("bsTransitionEnd", function() {
                      i.$element.trigger("focus").trigger(o)
                    })
                    .emulateTransitionEnd(s.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(o)
            }))
      }),
      (s.prototype.hide = function(e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(s.TRANSITION_DURATION)
              : this.hideModal())
      }),
      (s.prototype.enforceFocus = function() {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function(t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus")
            }, this)
          )
      }),
      (s.prototype.escape = function() {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function(t) {
                27 == t.which && this.hide()
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
      }),
      (s.prototype.resize = function() {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal")
      }),
      (s.prototype.hideModal = function() {
        var t = this
        this.$element.hide(),
          this.backdrop(function() {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal")
          })
      }),
      (s.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null)
      }),
      (s.prototype.backdrop = function(e) {
        var i = this,
          n = this.$element.hasClass("fade") ? "fade" : ""
        if (this.isShown && this.options.backdrop) {
          var o = t.support.transition && n
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + n)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function(t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    )
              }, this)
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return
          o
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION)
            : e()
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in")
          var a = function() {
            i.removeBackdrop(), e && e()
          }
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", a)
                .emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION)
            : a()
        } else e && e()
      }),
      (s.prototype.handleUpdate = function() {
        this.adjustDialog()
      }),
      (s.prototype.adjustDialog = function() {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        })
      }),
      (s.prototype.resetAdjustments = function() {
        this.$element.css({ paddingLeft: "", paddingRight: "" })
      }),
      (s.prototype.checkScrollbar = function() {
        var t = window.innerWidth
        if (!t) {
          var e = document.documentElement.getBoundingClientRect()
          t = e.right - Math.abs(e.left)
        }
        ;(this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar())
      }),
      (s.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10)
        ;(this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth)
      }),
      (s.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
      }),
      (s.prototype.measureScrollbar = function() {
        var t = document.createElement("div")
        ;(t.className = "modal-scrollbar-measure"), this.$body.append(t)
        var e = t.offsetWidth - t.clientWidth
        return this.$body[0].removeChild(t), e
      })
    var i = t.fn.modal
    ;(t.fn.modal = e),
      (t.fn.modal.Constructor = s),
      (t.fn.modal.noConflict = function() {
        return (t.fn.modal = i), this
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function(s) {
          var i = t(this),
            n = i.attr("href"),
            o = t(
              i.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            a = o.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(n) && n }, o.data(), i.data())
          i.is("a") && s.preventDefault(),
            o.one("show.bs.modal", function(t) {
              t.isDefaultPrevented() ||
                o.one("hidden.bs.modal", function() {
                  i.is(":visible") && i.trigger("focus")
                })
            }),
            e.call(o, a, this)
        }
      )
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.tooltip"),
          o = "object" == typeof e && e
        ;(n || !/destroy|hide/.test(e)) &&
          (n || i.data("bs.tooltip", (n = new s(this, o))),
          "string" == typeof e && n[e]())
      })
    }
    var s = function(t, e) {
      ;(this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e)
    }
    ;(s.VERSION = "3.3.5"),
      (s.TRANSITION_DURATION = 150),
      (s.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (s.prototype.init = function(e, s, i) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(s)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          )
        for (var n = this.options.trigger.split(" "), o = n.length; o--; ) {
          var a = n[o]
          if ("click" == a)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            )
          else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin",
              l = "hover" == a ? "mouseleave" : "focusout"
            this.$element.on(
              r + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              )
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle()
      }),
      (s.prototype.getDefaults = function() {
        return s.DEFAULTS
      }),
      (s.prototype.getOptions = function(e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        )
      }),
      (s.prototype.getDelegateOptions = function() {
        var e = {},
          s = this.getDefaults()
        return (
          this._options &&
            t.each(this._options, function(t, i) {
              s[t] != i && (e[t] = i)
            }),
          e
        )
      }),
      (s.prototype.enter = function(e) {
        var s =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type)
        return (
          s ||
            ((s = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, s)),
          e instanceof t.Event &&
            (s.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          s.tip().hasClass("in") || "in" == s.hoverState
            ? void (s.hoverState = "in")
            : (clearTimeout(s.timeout),
              (s.hoverState = "in"),
              s.options.delay && s.options.delay.show
                ? void (s.timeout = setTimeout(function() {
                    "in" == s.hoverState && s.show()
                  }, s.options.delay.show))
                : s.show())
        )
      }),
      (s.prototype.isInStateTrue = function() {
        for (var t in this.inState) if (this.inState[t]) return !0
        return !1
      }),
      (s.prototype.leave = function(e) {
        var s =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type)
        return (
          s ||
            ((s = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, s)),
          e instanceof t.Event &&
            (s.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          s.isInStateTrue()
            ? void 0
            : (clearTimeout(s.timeout),
              (s.hoverState = "out"),
              s.options.delay && s.options.delay.hide
                ? void (s.timeout = setTimeout(function() {
                    "out" == s.hoverState && s.hide()
                  }, s.options.delay.hide))
                : s.hide())
        )
      }),
      (s.prototype.show = function() {
        var e = t.Event("show.bs." + this.type)
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e)
          var i = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          )
          if (e.isDefaultPrevented() || !i) return
          var n = this,
            o = this.tip(),
            a = this.getUID(this.type)
          this.setContent(),
            o.attr("id", a),
            this.$element.attr("aria-describedby", a),
            this.options.animation && o.addClass("fade")
          var r =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, o[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(r)
          c && (r = r.replace(l, "") || "top"),
            o
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(r)
              .data("bs." + this.type, this),
            this.options.container
              ? o.appendTo(this.options.container)
              : o.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type)
          var d = this.getPosition(),
            p = o[0].offsetWidth,
            h = o[0].offsetHeight
          if (c) {
            var u = r,
              f = this.getPosition(this.$viewport)
            ;(r =
              "bottom" == r && d.bottom + h > f.bottom
                ? "top"
                : "top" == r && d.top - h < f.top
                ? "bottom"
                : "right" == r && d.right + p > f.width
                ? "left"
                : "left" == r && d.left - p < f.left
                ? "right"
                : r),
              o.removeClass(u).addClass(r)
          }
          var v = this.getCalculatedOffset(r, d, p, h)
          this.applyPlacement(v, r)
          var g = function() {
            var t = n.hoverState
            n.$element.trigger("shown.bs." + n.type),
              (n.hoverState = null),
              "out" == t && n.leave(n)
          }
          t.support.transition && this.$tip.hasClass("fade")
            ? o
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(s.TRANSITION_DURATION)
            : g()
        }
      }),
      (s.prototype.applyPlacement = function(e, s) {
        var i = this.tip(),
          n = i[0].offsetWidth,
          o = i[0].offsetHeight,
          a = parseInt(i.css("margin-top"), 10),
          r = parseInt(i.css("margin-left"), 10)
        isNaN(a) && (a = 0),
          isNaN(r) && (r = 0),
          (e.top += a),
          (e.left += r),
          t.offset.setOffset(
            i[0],
            t.extend(
              {
                using: function(t) {
                  i.css({ top: Math.round(t.top), left: Math.round(t.left) })
                },
              },
              e
            ),
            0
          ),
          i.addClass("in")
        var l = i[0].offsetWidth,
          c = i[0].offsetHeight
        "top" == s && c != o && (e.top = e.top + o - c)
        var d = this.getViewportAdjustedDelta(s, e, l, c)
        d.left ? (e.left += d.left) : (e.top += d.top)
        var p = /top|bottom/.test(s),
          h = p ? 2 * d.left - n + l : 2 * d.top - o + c,
          u = p ? "offsetWidth" : "offsetHeight"
        i.offset(e), this.replaceArrow(h, i[0][u], p)
      }),
      (s.prototype.replaceArrow = function(t, e, s) {
        this.arrow()
          .css(s ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(s ? "top" : "left", "")
      }),
      (s.prototype.setContent = function() {
        var t = this.tip(),
          e = this.getTitle()
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right")
      }),
      (s.prototype.hide = function(e) {
        function i() {
          "in" != n.hoverState && o.detach(),
            n.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + n.type),
            e && e()
        }
        var n = this,
          o = t(this.$tip),
          a = t.Event("hide.bs." + this.type)
        return (
          this.$element.trigger(a),
          a.isDefaultPrevented()
            ? void 0
            : (o.removeClass("in"),
              t.support.transition && o.hasClass("fade")
                ? o
                    .one("bsTransitionEnd", i)
                    .emulateTransitionEnd(s.TRANSITION_DURATION)
                : i(),
              (this.hoverState = null),
              this)
        )
      }),
      (s.prototype.fixTitle = function() {
        var t = this.$element
        ;(t.attr("title") ||
          "string" != typeof t.attr("data-original-title")) &&
          t.attr("data-original-title", t.attr("title") || "").attr("title", "")
      }),
      (s.prototype.hasContent = function() {
        return this.getTitle()
      }),
      (s.prototype.getPosition = function(e) {
        e = e || this.$element
        var s = e[0],
          i = "BODY" == s.tagName,
          n = s.getBoundingClientRect()
        null == n.width &&
          (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top,
          }))
        var o = i ? { top: 0, left: 0 } : e.offset(),
          a = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          r = i
            ? { width: t(window).width(), height: t(window).height() }
            : null
        return t.extend({}, n, a, r, o)
      }),
      (s.prototype.getCalculatedOffset = function(t, e, s, i) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - s / 2 }
          : "top" == t
          ? { top: e.top - i, left: e.left + e.width / 2 - s / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - i / 2, left: e.left - s }
          : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width }
      }),
      (s.prototype.getViewportAdjustedDelta = function(t, e, s, i) {
        var n = { top: 0, left: 0 }
        if (!this.$viewport) return n
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport)
        if (/right|left/.test(t)) {
          var r = e.top - o - a.scroll,
            l = e.top + o - a.scroll + i
          r < a.top
            ? (n.top = a.top - r)
            : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
          var c = e.left - o,
            d = e.left + o + s
          c < a.left
            ? (n.left = a.left - c)
            : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
      }),
      (s.prototype.getTitle = function() {
        var t,
          e = this.$element,
          s = this.options
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof s.title ? s.title.call(e[0]) : s.title))
      }),
      (s.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random())
        while (document.getElementById(t))
        return t
      }),
      (s.prototype.tip = function() {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          )
        return this.$tip
      }),
      (s.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"))
      }),
      (s.prototype.enable = function() {
        this.enabled = !0
      }),
      (s.prototype.disable = function() {
        this.enabled = !1
      }),
      (s.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
      }),
      (s.prototype.toggle = function(e) {
        var s = this
        e &&
          ((s = t(e.currentTarget).data("bs." + this.type)),
          s ||
            ((s = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, s))),
          e
            ? ((s.inState.click = !s.inState.click),
              s.isInStateTrue() ? s.enter(s) : s.leave(s))
            : s.tip().hasClass("in")
            ? s.leave(s)
            : s.enter(s)
      }),
      (s.prototype.destroy = function() {
        var t = this
        clearTimeout(this.timeout),
          this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null)
          })
      })
    var i = t.fn.tooltip
    ;(t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = s),
      (t.fn.tooltip.noConflict = function() {
        return (t.fn.tooltip = i), this
      })
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.popover"),
          o = "object" == typeof e && e
        ;(n || !/destroy|hide/.test(e)) &&
          (n || i.data("bs.popover", (n = new s(this, o))),
          "string" == typeof e && n[e]())
      })
    }
    var s = function(t, e) {
      this.init("popover", t, e)
    }
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js")
    ;(s.VERSION = "3.3.5"),
      (s.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (s.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (s.prototype.constructor = s),
      (s.prototype.getDefaults = function() {
        return s.DEFAULTS
      }),
      (s.prototype.setContent = function() {
        var t = this.tip(),
          e = this.getTitle(),
          s = this.getContent()
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof s
                  ? "html"
                  : "append"
                : "text"
            ](s),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide()
      }),
      (s.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
      }),
      (s.prototype.getContent = function() {
        var t = this.$element,
          e = this.options
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        )
      }),
      (s.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"))
      })
    var i = t.fn.popover
    ;(t.fn.popover = e),
      (t.fn.popover.Constructor = s),
      (t.fn.popover.noConflict = function() {
        return (t.fn.popover = i), this
      })
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(s, i) {
      ;(this.$body = t(document.body)),
        (this.$scrollElement = t(t(s).is(document.body) ? window : s)),
        (this.options = t.extend({}, e.DEFAULTS, i)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process()
    }
    function s(s) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.scrollspy"),
          o = "object" == typeof s && s
        n || i.data("bs.scrollspy", (n = new e(this, o))),
          "string" == typeof s && n[s]()
      })
    }
    ;(e.VERSION = "3.3.5"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function() {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        )
      }),
      (e.prototype.refresh = function() {
        var e = this,
          s = "offset",
          i = 0
        ;(this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((s = "position"), (i = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function() {
              var e = t(this),
                n = e.data("target") || e.attr("href"),
                o = /^#./.test(n) && t(n)
              return (
                (o && o.length && o.is(":visible") && [[o[s]().top + i, n]]) ||
                null
              )
            })
            .sort(function(t, e) {
              return t[0] - e[0]
            })
            .each(function() {
              e.offsets.push(this[0]), e.targets.push(this[1])
            })
      }),
      (e.prototype.process = function() {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          s = this.getScrollHeight(),
          i = this.options.offset + s - this.$scrollElement.height(),
          n = this.offsets,
          o = this.targets,
          a = this.activeTarget
        if ((this.scrollHeight != s && this.refresh(), e >= i))
          return a != (t = o[o.length - 1]) && this.activate(t)
        if (a && e < n[0]) return (this.activeTarget = null), this.clear()
        for (t = n.length; t--; )
          a != o[t] &&
            e >= n[t] &&
            (void 0 === n[t + 1] || e < n[t + 1]) &&
            this.activate(o[t])
      }),
      (e.prototype.activate = function(e) {
        ;(this.activeTarget = e), this.clear()
        var s =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          i = t(s)
            .parents("li")
            .addClass("active")
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy")
      }),
      (e.prototype.clear = function() {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active")
      })
    var i = t.fn.scrollspy
    ;(t.fn.scrollspy = s),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function() {
        return (t.fn.scrollspy = i), this
      }),
      t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
          var e = t(this)
          s.call(e, e.data())
        })
      })
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.tab")
        n || i.data("bs.tab", (n = new s(this))), "string" == typeof e && n[e]()
      })
    }
    var s = function(e) {
      this.element = t(e)
    }
    ;(s.VERSION = "3.3.5"),
      (s.TRANSITION_DURATION = 150),
      (s.prototype.show = function() {
        var e = this.element,
          s = e.closest("ul:not(.dropdown-menu)"),
          i = e.data("target")
        if (
          (i ||
            ((i = e.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var n = s.find(".active:last a"),
            o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            a = t.Event("show.bs.tab", { relatedTarget: n[0] })
          if (
            (n.trigger(o),
            e.trigger(a),
            !a.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var r = t(i)
            this.activate(e.closest("li"), s),
              this.activate(r, r.parent(), function() {
                n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] })
              })
          }
        }
      }),
      (s.prototype.activate = function(e, i, n) {
        function o() {
          a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            n && n()
        }
        var a = i.find("> .active"),
          r =
            n &&
            t.support.transition &&
            ((a.length && a.hasClass("fade")) || !!i.find("> .fade").length)
        a.length && r
          ? a
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(s.TRANSITION_DURATION)
          : o(),
          a.removeClass("in")
      })
    var i = t.fn.tab
    ;(t.fn.tab = e),
      (t.fn.tab.Constructor = s),
      (t.fn.tab.noConflict = function() {
        return (t.fn.tab = i), this
      })
    var n = function(s) {
      s.preventDefault(), e.call(t(this), "show")
    }
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', n)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
  })(jQuery),
  +(function(t) {
    "use strict"
    function e(e) {
      return this.each(function() {
        var i = t(this),
          n = i.data("bs.affix"),
          o = "object" == typeof e && e
        n || i.data("bs.affix", (n = new s(this, o))),
          "string" == typeof e && n[e]()
      })
    }
    var s = function(e, i) {
      ;(this.options = t.extend({}, s.DEFAULTS, i)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition()
    }
    ;(s.VERSION = "3.3.5"),
      (s.RESET = "affix affix-top affix-bottom"),
      (s.DEFAULTS = { offset: 0, target: window }),
      (s.prototype.getState = function(t, e, s, i) {
        var n = this.$target.scrollTop(),
          o = this.$element.offset(),
          a = this.$target.height()
        if (null != s && "top" == this.affixed) return s > n ? "top" : !1
        if ("bottom" == this.affixed)
          return null != s
            ? n + this.unpin <= o.top
              ? !1
              : "bottom"
            : t - i >= n + a
            ? !1
            : "bottom"
        var r = null == this.affixed,
          l = r ? n : o.top,
          c = r ? a : e
        return null != s && s >= n
          ? "top"
          : null != i && l + c >= t - i
          ? "bottom"
          : !1
      }),
      (s.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(s.RESET).addClass("affix")
        var t = this.$target.scrollTop(),
          e = this.$element.offset()
        return (this.pinnedOffset = e.top - t)
      }),
      (s.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
      }),
      (s.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            i = this.options.offset,
            n = i.top,
            o = i.bottom,
            a = Math.max(t(document).height(), t(document.body).height())
          "object" != typeof i && (o = n = i),
            "function" == typeof n && (n = i.top(this.$element)),
            "function" == typeof o && (o = i.bottom(this.$element))
          var r = this.getState(a, e, n, o)
          if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "")
            var l = "affix" + (r ? "-" + r : ""),
              c = t.Event(l + ".bs.affix")
            if ((this.$element.trigger(c), c.isDefaultPrevented())) return
            ;(this.affixed = r),
              (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(s.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix")
          }
          "bottom" == r && this.$element.offset({ top: a - e - o })
        }
      })
    var i = t.fn.affix
    ;(t.fn.affix = e),
      (t.fn.affix.Constructor = s),
      (t.fn.affix.noConflict = function() {
        return (t.fn.affix = i), this
      }),
      t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
          var s = t(this),
            i = s.data()
          ;(i.offset = i.offset || {}),
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            e.call(s, i)
        })
      })
  })(jQuery)
var ParallaxManager, ParallaxPart
;(ParallaxPart = (function() {
  function t(t) {
    ;(this.el = t),
      (this.speed = parseFloat(this.el.getAttribute("data-parallax-speed"))),
      (this.maxScroll = parseInt(this.el.getAttribute("data-max-scroll"))),
      (this.opacityOffset = parseInt(
        this.el.getAttribute("data-opacity-offset")
      )),
      (this.changeOpacity = parseInt(
        this.el.getAttribute("data-change-opacity")
      ))
  }
  return (
    (t.prototype.update = function(t) {
      if (!(t > this.maxScroll)) {
        var e = -(t * this.speed)
        if (
          (this.setYTransform(e),
          1 === this.changeOpacity && t >= this.opacityOffset)
        ) {
          var s = (this.maxScroll - t) / this.maxScroll
          ;(s = s >= 0 ? s : 0), this.setFadeOut(s)
        } else this.setFadeOut(1)
      }
    }),
    (t.prototype.setFadeOut = function(t) {
      this.el.style.opacity = t
    }),
    (t.prototype.setYTransform = function(t) {
      ;(this.el.style.webkitTransform = "translate3d(0, " + t + "px, 0)"),
        (this.el.style.MozTransform = "translate3d(0, " + t + "px, 0)"),
        (this.el.style.OTransform = "translate3d(0, " + t + "px, 0)"),
        (this.el.style.transform = "translate3d(0, " + t + "px, 0)"),
        (this.el.style.msTransform = "translateY(" + t + "px)")
    }),
    t
  )
})()),
  (ParallaxManager = (function() {
    function t(t) {
      if (((this.elements = t), "object" == typeof t && t.item))
        this.elements = Array.prototype.slice.call(t)
      else {
        if ("string" != typeof t)
          throw new Error(
            "Parallax: Element variable is not a querySelector string, Array, or NodeList"
          )
        if (
          ((this.elements = document.querySelectorAll(t)),
          0 === this.elements.length)
        )
          throw new Error("Parallax: No elements found")
        this.elements = Array.prototype.slice.call(this.elements)
      }
      for (var e in this.elements)
        this.parts.push(new ParallaxPart(this.elements[e]))
      window.addEventListener("scroll", this.onScroll.bind(this))
    }
    return (
      (t.prototype.parts = []),
      (t.prototype.onScroll = function() {
        window.requestAnimationFrame(this.scrollHandler.bind(this))
      }),
      (t.prototype.scrollHandler = function() {
        var t = Math.max(window.pageYOffset, 0)
        t > $(window).height()
          ? $("#mainNavBar, body").addClass("visible-bg")
          : $("#mainNavBar, body").removeClass("visible-bg")
        for (var e in this.parts) this.parts[e].update(t)
      }),
      t
    )
  })()),
  (function(t) {
    var e = {
        common: {
          init: function() {
            t(function() {
              smoothScroll.init({ offset: 70 }),
                t(".menu-container a").click(function() {
                  t("#navbar-collapse-1").collapse("hide")
                }),
                t("#navbar-collapse-1").on("show.bs.collapse", function() {
                  t("#mainNavBar").addClass("mobile-menu-expanded")
                }),
                t("#navbar-collapse-1").on("hidden.bs.collapse", function() {
                  t("#mainNavBar").removeClass("mobile-menu-expanded")
                })
            })
          },
          finalize: function() {},
        },
        home: {
          init: function() {
            new ParallaxManager(".parallax-layer")
          },
          finalize: function() {},
        },
        page_template_template_ttb_static: {
          init: function() {
            var e = t("#mainNavBar").outerHeight()
            window.onscroll = function() {
              var s = Math.max(window.pageYOffset, 0)
              s > e
                ? t("#mainNavBar").addClass("visible-bg")
                : t("#mainNavBar").removeClass("visible-bg")
            }
          },
        },
      },
      s = {
        fire: function(t, s, i) {
          var n,
            o = e
          ;(s = void 0 === s ? "init" : s),
            (n = "" !== t),
            (n = n && o[t]),
            (n = n && "function" == typeof o[t][s]),
            n && o[t][s](i)
        },
        loadEvents: function() {
          s.fire("common"),
            t.each(
              document.body.className.replace(/-/g, "_").split(/\s+/),
              function(t, e) {
                s.fire(e), s.fire(e, "finalize")
              }
            ),
            s.fire("common", "finalize")
        },
      }
    t(document).ready(s.loadEvents)
  })(jQuery)
