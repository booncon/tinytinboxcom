import React from "react"
import SmoothScroll from "smooth-scroll"
import InstagramEmbed from "react-instagram-embed"
import Gumshoe from "gumshoejs"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount() {
    new SmoothScroll('a[href*="#"]', {
      offset: 70,
    })
    new Gumshoe("#spyNav a", {
      offset: 70,
    })

    var ParallaxManager, ParallaxPart

    ParallaxPart = (function() {
      function ParallaxPart(el) {
        this.el = el
        this.speed = parseFloat(this.el.getAttribute("data-parallax-speed"))
        this.maxScroll = parseInt(this.el.getAttribute("data-max-scroll"))
        this.opacityOffset = parseInt(
          this.el.getAttribute("data-opacity-offset")
        )
        this.changeOpacity = parseInt(
          this.el.getAttribute("data-change-opacity")
        )
      }

      ParallaxPart.prototype.update = function(scrollY) {
        if (scrollY > this.maxScroll) {
          return
        }
        var offset = -(scrollY * this.speed)
        this.setYTransform(offset)
        if (this.changeOpacity === 1 && scrollY >= this.opacityOffset) {
          var opacity = (this.maxScroll - scrollY) / this.maxScroll
          opacity = opacity >= 0 ? opacity : 0
          this.setFadeOut(opacity)
        } else {
          this.setFadeOut(1)
        }
      }

      ParallaxPart.prototype.setFadeOut = function(val) {
        this.el.style.opacity = val
      }

      ParallaxPart.prototype.setYTransform = function(val) {
        this.el.style.webkitTransform = "translate3d(0, " + val + "px, 0)"
        this.el.style.MozTransform = "translate3d(0, " + val + "px, 0)"
        this.el.style.OTransform = "translate3d(0, " + val + "px, 0)"
        this.el.style.transform = "translate3d(0, " + val + "px, 0)"
        this.el.style.msTransform = "translateY(" + val + "px)"
      }

      return ParallaxPart
    })()

    ParallaxManager = (function() {
      function ParallaxManager(elements) {
        this.elements = elements
        if (typeof elements === "object" && elements.item) {
          this.elements = Array.prototype.slice.call(elements)
        } else if (typeof elements === "string") {
          this.elements = document.querySelectorAll(elements)
          if (this.elements.length === 0) {
            throw new Error("Parallax: No elements found")
          }
          this.elements = Array.prototype.slice.call(this.elements)
        } else {
          throw new Error(
            "Parallax: Element variable is not a querySelector string, Array, or NodeList"
          )
        }
        for (var i in this.elements) {
          this.parts.push(new ParallaxPart(this.elements[i]))
        }
        window.addEventListener("scroll", this.onScroll.bind(this))
      }

      ParallaxManager.prototype.parts = []

      ParallaxManager.prototype.onScroll = function() {
        window.requestAnimationFrame(this.scrollHandler.bind(this))
      }

      ParallaxManager.prototype.scrollHandler = function() {
        var scrollY = Math.max(window.pageYOffset, 0)
        if (document.getElementById("mainNavBar") !== null) {
          if (scrollY > document.body.clientHeight) {
            document.getElementById("mainNavBar").classList.add("visible-bg")
          } else {
            document.getElementById("mainNavBar").classList.remove("visible-bg")
          }
          for (var i in this.parts) {
            this.parts[i].update(scrollY)
          }
        }
      }

      return ParallaxManager
    })()
    new ParallaxManager(".parallax-layer")
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          description="Tiny Tin Box is a digital children&#8217;s book
                          publisher based in Helsinki. Our team loves creating
                          and perfecting digital storybooks and games for children aged
                          two years and over."
        />
        <div className="wrap" role="document">
          <div className="content-wrap">
            <main role="main">
              <nav
                id="mainNavBar"
                className="navbar navbar-default navbar-fixed-top"
              >
                <div className="container-fluid menu-container">
                  <a className="navbar-brand" href="#top" data-scroll>
                    <img
                      src="/images/ttb-logo-svg-white.svg"
                      className="logo-small"
                      alt="Tiny Tin Box Logo White"
                    ></img>
                  </a>

                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#navbar-collapse-1"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className="collapse navbar-collapse"
                    id="navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav navbar-right lang-switcher">
                      <li>
                        <Link
                          className="#lang-item lang-item-2 lang-item-en lang-item-first current-lang"
                          to="/en/"
                        >
                          en
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="#lang-item lang-item-5 lang-item-de"
                          to="/de/"
                        >
                          DE
                        </Link>
                      </li>
                    </ul>
                    <ul id="spyNav" className="nav navbar-nav navbar-right">
                      <li>
                        <a data-scroll href="#our-apps">
                          Our Apps
                        </a>
                      </li>
                      <li>
                        <a data-scroll href="#about-us">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a data-scroll href="#rights-and-licences">
                          Rights and licences
                        </a>
                      </li>
                      <li>
                        <a data-scroll href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div id="top"></div>
              <div className="parallax-container">
                <div
                  className="parallax-layer layer-0"
                  data-parallax-speed="0.08"
                  data-max-scroll="765"
                  data-opacity-offset="200"
                  data-change-opacity="1"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 main-hero text-center">
                        <h1>Tiny Tin Box</h1>
                        <img
                          src="/images/ttb-logo-svg.svg"
                          className="logo-big"
                          alt="Logo Tiny Tin Box"
                        ></img>
                        <a
                          data-scroll
                          href="#main-content"
                          className="arrow hidden-xs hidden-sm"
                        >
                          <img
                            src="/images/Arrow.svg"
                            alt="Scroll down arrow"
                          ></img>
                        </a>
                      </div>
                      <div className="col-md-7 main-hero">
                        <p className="lead main-text">
                          Singing suitcases, flying sausage dogs and shaggy
                          trolls offering protection throughout the night. Our
                          storybook and nursery rhyme apps will whisk you away
                          to this colourful world!
                        </p>
                        <a
                          data-scroll
                          href="#main-content"
                          className="arrow mobile-arrow hidden-md hidden-lg"
                        >
                          <img
                            src="/images/Arrow.svg"
                            alt="Scroll down arrow "
                          ></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="parallax-layer layer-1"
                  data-parallax-speed="0.3"
                  data-max-scroll="8000"
                ></div>
                <div
                  className="parallax-layer layer-2"
                  data-parallax-speed="0.4"
                  data-max-scroll="1000"
                ></div>
                <div
                  className="parallax-layer layer-3"
                  data-parallax-speed="0.5"
                ></div>
                <div
                  className="parallax-layer layer-4"
                  data-parallax-speed="0.7"
                ></div>
                <div
                  className="parallax-layer layer-5"
                  data-parallax-speed="0.9"
                ></div>
              </div>

              <div className="content" id="main-content">
                <div>
                  <div className="container">
                    <div className="row ttb_projects_section" id="our-apps">
                      <div className="col-md-12">
                        <h2>Our Apps</h2>
                      </div>

                      <a
                        href="https://itunes.apple.com/app/id1136178511?fbclid=IwAR23Fs5mFLoF1DmNSjQj5G9eK-xtH_j4OlbRhhgCJ3eg6VaPoo0tbAdX_CY"
                        className="col-sm-2 col-xs-12"
                      >
                        <img
                          className="img-responsive img-app img-halfs content-centers "
                          src="/images/appIcon-600x0-c-default.png"
                          alt="Logo Tiny Rhyme Box AppStore"
                        ></img>
                        <br />
                        <p>Tiny Rhyme Box</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="paper paper-white">
                  <div className="container">
                    <div className="row ttb_infobox" id="about-us">
                      <div className="col-md-12">
                        <h2>About Us</h2>
                      </div>
                      <div className="col-sm-7 infobox-text">
                        <p>
                          Tiny Tin Box is a digital children&#8217;s book
                          publisher based in Helsinki. Our team loves creating
                          and perfecting storybooks and games for children aged
                          two years and over. We value original illustrations,
                          apt animations and beautiful design.
                          <br />
                          And we love lyricism. Whether Tiny Rhyme Box or a
                          narrative storybook – the interplay of metre, rhyme
                          and imagery is a common thread that runs through our
                          work and gives children a playful way of exploring the
                          world of words.
                          <br />
                          Our apps – sometimes funny, sometimes spooky, but
                          always age-appropriate – prompt important questions
                          and feature exciting details that encourage little
                          readers to listen and look closely.
                          <br />
                          But most importantly they are great fun!
                        </p>
                      </div>

                      <div className="col-sm-5">
                        <img
                          className="img-responsive img-spacer content-center"
                          src="/images/typewriter-1.svg"
                          alt="Icon Typewriter "
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="default">
                  <div className="container">
                    <div className="row ttb_infobox" id="rights-and-licences">
                      <div className="col-md-12">
                        <h2>Rights and licences</h2>
                      </div>

                      <div className="col-sm-5">
                        <img
                          className="img-responsive img-spacer content-center"
                          src="/images/copyrights.svg"
                          alt="Icon Copyright; Pen + paper"
                        ></img>
                      </div>

                      <div className="col-sm-7 infobox-text">
                        <p>
                          You like our apps? Would our stories and characters be
                          a good addition to your publishing programme? Feel
                          free to contact us at any time if you have questions
                          concerning usage rights, e.g. printing and
                          distribution rights, besides the right of translation,
                          musical rendering, etc.
                        </p>
                        <p>We look forward to hearing from you!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paper paper-white">
                  <div className="container">
                    <div className="row ttb_contact_section" id="contact">
                      <div className="col-md-12">
                        <h2>Contact</h2>
                      </div>

                      <div className="display-table">
                        <div className="col-md-4 paper paper-pink">
                          <img
                            className="img-circle contact-row-img"
                            src="/images/mam-400x400-c-default.jpg"
                            alt="Portrait Marion Tappeiner"
                          ></img>

                          <h3>Marion Tappeiner</h3>
                          <p>CEO</p>

                          <p>
                            <a href="mailto:marion.tappeiner@tinytinbox.com">
                              marion.tappeiner@tinytinbox.com
                            </a>
                            <br />
                            +39 329 4422894
                          </p>
                        </div>
                        <div className="col-md-4 paper paper-blue">
                          <img
                            className="img-circle contact-row-img"
                            src="/images/luk-400x400-c-default.jpg"
                            alt="Portrait Lukas Jakob Hafner"
                          ></img>
                          <h3>Lukas Jakob Hafner</h3>
                          <p>Art Director</p>
                          <p>
                            <a href="mailto:hello@tinytinbox.com">
                              hello@tinytinbox.com
                            </a>
                          </p>
                        </div>

                        <div className="col-md-4">
                          <img
                            className="contact-row-img"
                            src="/images/instagram.svg"
                            alt="Logo"
                          ></img>
                          <InstagramEmbed
                            url="https://www.instagram.com/p/BypHJKNgT0T/"
                            hideCaption={false}
                            containerTagName="div"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fireplace">
                  <img
                    src="/images/scene-ttb-box.png"
                    alt="Drawing Fireplace wit box "
                  ></img>
                </div>

                <footer>
                  <div className="container">
                    <div className="row">
                      <section className="widget text-4 widget_text">
                        {" "}
                        <div className="textwidget">
                          <div className="col-md-8">
                            <h3>Copyright</h3>
                            All contents on this website are protected by
                            copyright. Unless explicitly stated otherwise,
                            copyright is held by Tiny Tin Box Ltd. Any texts,
                            excerpts or artwork may only be used with the
                            express permission of the publisher.
                          </div>
                        </div>
                      </section>
                      <section className="widget text-5 widget_text">
                        {" "}
                        <div className="textwidget">
                          <div className="col-md-4">
                            <h3>Responsible for the content</h3>
                            <p>
                              <b>Tiny Tin Box Ltd.</b>
                              <br />
                              Suvilahdenkatu 4 B 42
                              <br />
                              00500 Helsinki
                            </p>
                          </div>
                        </div>
                      </section>
                      <section className="widget text-6 widget_text">
                        {" "}
                        <div className="textwidget">
                          <div className="col-md-12 footer-close">
                            © 2019 Tiny Tin Box Ltd. |{" "}
                            <Link to="/en/privacy-policy">Privacy policy</Link>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </footer>
              </div>
            </main>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
