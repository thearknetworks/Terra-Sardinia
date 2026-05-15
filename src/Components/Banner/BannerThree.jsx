"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Modal from "react-modal";
import "swiper/css";
import "swiper/css/effect-fade";

Modal.setAppElement("#root");

function BannerThree() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const videoRef = useRef(null);

  const closeVideoModal = useCallback(() => {
    setModalIsOpen(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  const playVideoWithSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!modalIsOpen) return;
    playVideoWithSound();
  }, [modalIsOpen, playVideoWithSound]);
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
        className="container hero-3__content"
      >
        <div
          className={`hero-style3 hero-style3--home flex flex-col gap-6${
            width < 768 ? " hero-style3--mobile-portrait" : ""
          }`}
        >
          <div className="hero-style3__copy">
            <h1 className="hero-title">Feel at Home in Sardinia</h1>
            <p className="hero-text">
            Between crystal-clear seas and Mediterranean nature, Villa Antares
            and Guesthouse Villa Verde welcome you to Torre delle Stelle for an
            unforgettable stay.
            </p>
          </div>
          <div className="hero-style3__play img2">
            <button
              type="button"
              className="play-btn bg-transparent border-none cursor-pointer hero-style3__play-btn"
              onClick={() => setModalIsOpen(true)}
              aria-label="Play video"
            >
              <i className="fa-sharp fa-solid fa-play bg-[#1CA8CB]" />
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeVideoModal}
        onAfterOpen={playVideoWithSound}
        contentLabel="Video Popup"
        className="video-modal video-modal--portrait"
        overlayClassName="video-modal-overlay"
      >
        <button
          type="button"
          className="close-btn video-modal__close"
          onClick={closeVideoModal}
          aria-label="Close video"
        >
          &times;
        </button>
        <div className="video-modal__media">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="auto"
            src="/assets/Videos/film%20sardegna-.mp4"
            onClick={() => {
              const video = videoRef.current;
              if (video?.paused) playVideoWithSound();
            }}
          />
        </div>
      </Modal>
    </section>
  );
}

export default BannerThree;
