import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Core Swiper styles
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function BannerOne() {
  const { i18n } = useTranslation();
  const swiperRef = useRef(null);

  useEffect(() => {
    // Function to add animation classes
    const animationProperties = () => {
      document.querySelectorAll("[data-ani]").forEach((element) => {
        const animationName = element.getAttribute("data-ani");
        element.classList.add(animationName);
      });

      document.querySelectorAll("[data-ani-delay]").forEach((element) => {
        const delayTime = element.getAttribute("data-ani-delay");
        element.style.animationDelay = delayTime;
      });
    };

    animationProperties();
  }, []);

  // Event handler for custom navigation arrows
  const handleSliderNavigation = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (direction === "prev") {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  };

  return (
    <div className="th-hero-wrapper hero-1" id="hero">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]} // Initialize necessary modules
        effect="fade" // Use fade effect
        loop={true} // Enable loop
        speed={3000}
        pagination={{
          el: ".swiper-pagination", // Custom pagination container
          clickable: true, // Enable clickable pagination
        }}
        navigation={{
          nextEl: ".slider-next", // Custom next button
          prevEl: ".slider-prev", // Custom prev button
        }}
        autoplay={{
          delay: 5000, // Time in milliseconds to wait between slides
          disableOnInteraction: false, // Don't stop autoplay when user interacts
        }}
        className="th-slider hero-slider-1"
        style={{ height: "100vh" }}
        id="heroSlide1"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: "url(/assets/images/HomeBsanner/Terra1.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Torre delle Stelle
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Where Sardinia Slows Down{" "}
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <Link
                      to={`/${i18n.resolvedLanguage || "en"}/stays`}
                      className="th-btn th-icon"
                      style={{
                        minWidth: "240px",
                        display: "inline-flex",
                        justifyContent: "center",
                      }}
                    >
                      Explore Stays
                    </Link>
                    <Link
                      to={`/${i18n.resolvedLanguage || "en"}/destination`}
                      className="th-btn style2 th-icon"
                      style={{
                        minWidth: "240px",
                        display: "inline-flex",
                        justifyContent: "center",
                      }}
                    >
                      Discover the Area
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage: "url(/assets/images/HomeBsanner/Verde1.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Villa Verde
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Where Holidays are Effortless{" "}
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <Link
                      to={`/${i18n.resolvedLanguage || "en"}/stays`}
                      className="th-btn th-icon"
                      style={{
                        minWidth: "240px",
                        display: "inline-flex",
                        justifyContent: "center",
                      }}
                    >
                      Explore Stays
                    </Link>
                    <Link
                      to={`/${i18n.resolvedLanguage || "en"}/destination`}
                      className="th-btn style2 th-icon"
                      style={{
                        minWidth: "240px",
                        display: "inline-flex",
                        justifyContent: "center",
                      }}
                    >
                      Discover the Area
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{
                  backgroundImage:
                    "url(/assets/images/HomeBsanner/Antares1.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Villa Antares
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Where the Horizon is Yours{" "}
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <Link
                      to={`/${i18n.resolvedLanguage || "en"}/stays`}
                      className="th-btn th-icon"
                      style={{
                        minWidth: "240px",
                        display: "inline-flex",
                        justifyContent: "center",
                      }}
                    >
                      Explore Stays
                    </Link>
                    <Link
                      to={`/${i18n.resolvedLanguage || "en"}/destination`}
                      className="th-btn style2 th-icon"
                      style={{
                        minWidth: "240px",
                        display: "inline-flex",
                        justifyContent: "center",
                      }}
                    >
                      Discover the Area
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="th-swiper-custom">
          <button
            className="slider-arrow slider-prev"
            onClick={() => handleSliderNavigation("prev")}
          >
            <img src="/assets/img/icon/right-arrow.svg" alt="Prev" />
          </button>
          <div
            className="swiper-pagination"
            style={{ transform: "translateY(90%)" }}
          />{" "}
          {/* Pagination container */}
          <button
            className="slider-arrow slider-next"
            onClick={() => handleSliderNavigation("next")}
          >
            <img src="/assets/img/icon/left-arrow.svg" alt="Next" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default BannerOne;
