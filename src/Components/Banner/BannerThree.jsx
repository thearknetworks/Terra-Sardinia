"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

function BannerThree() {
  const slides = [
    "/assets/images/HomeBsanner/home banner 3.png",
    "/assets/images/HomeBsanner/Terra1.png",
    "/assets/images/HomeBsanner/Verde1.png",
    "/assets/images/HomeBsanner/Antares1.png",
    "/assets/images/HomeBsanner/home banner.png",
    "/assets/images/HomeBsanner/home banner 1.png",
    "/assets/images/HomeBsanner/home banner 2.png",
  ];

  useEffect(() => {
    document.querySelectorAll("[data-ani]").forEach((element) => {
      const animationName = element.getAttribute("data-ani");
      element.classList.add(animationName);
    });

    document.querySelectorAll("[data-ani-delay]").forEach((element) => {
      const delayTime = element.getAttribute("data-ani-delay");
      element.style.animationDelay = delayTime;
    });
  }, []);

  return (
    <section
      className="hero-3"
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="hero-slider-3"
        style={{
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                width: "100%",
                height: "100vh",
                minHeight: "100vh",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.4)), url("${encodeURI(
                  img
                )}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="container"
        style={{
          position: "absolute",
          top: "58%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          color: "#fff",
          pointerEvents: "none",
        }}
      >
        <div className="hero-style3">
          <h1 className="hero-title">Feel at Home in Sardinia</h1>
          <p className="hero-text">
            Between crystal-clear seas and Mediterranean nature, Villa Antares
            and Guesthouse Villa Verde welcome you to Torre delle Stelle for an
            unforgettable stay.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BannerThree;