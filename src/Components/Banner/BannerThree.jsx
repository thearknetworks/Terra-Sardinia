"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/effect-fade";

function BannerThree() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        zindex: 10000,
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
          zindex: 1,
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
                  img,
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
          // pointerEvents: "none",
          zindex: 50,
        }}
      >
        <div
          className="hero-style3 flex flex-col md:!items-center   gap-6"
          style={
            width < 768
              ? {
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }
              : { alignItems: "flex-start" }
          }
        >
          <h1 className="hero-title">Feel at Home in Sardinia</h1>

          <p className="hero-text">
            Between crystal-clear seas and Mediterranean nature, Villa Antares
            and Guesthouse Villa Verde welcome you to Torre delle Stelle for an
            unforgettable stay.
          </p>
          <div
            className="img2 "
            style={{
              height: "125px",
              width: "125px",

              zIndex: 10,
              border: "0px solid #1CA8CB",
              zindex: 10000000,
            }}
          >
            <button
              className="play-btn bg-transparent border-none cursor-pointer "
              onClick={() => setModalIsOpen(true)}
              style={{
                boxShadow: "none",
                border: "none",
                height: "125px",
                width: "125px",
              }}
            >
              <i
                className="fa-sharp fa-solid fa-play bg-[#1CA8CB]"
                style={{
                  scale: "1.5",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Video Popup"
        // className="video-modal"
        overlayClassName="video-modal-overlay"
      >
        <button className="close-btn" onClick={() => setModalIsOpen(false)}>
          &times;
        </button>
        <div
          style={{
            // width: "min(90vw, 1200px)",
            width: "0vw",
            height: "80vh",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <video
            width="100%"
            height="100%"
            src="/assets/Videos/film sardegna-.mp4"
            controls
            autoplay
            style={{
              height: "100%",
            }}
          />
        </div>
      </Modal>
    </section>
  );
}

export default BannerThree;
