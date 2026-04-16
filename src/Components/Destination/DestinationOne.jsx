import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Link, useParams } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Genn’e Mari",
    listings: "Crystal Waters",
    image: "/assets/img/destination/genne-mari-cover.png",
    slug: "/destination/genne-mari",
  },
  {
    id: 2,
    name: "Cann’e Sisa",
    listings: "Quiet Shores",
    image: "/assets/img/destination/canne-sisa-cover.png",
    slug: "/destination/canne-sisa",
  },
  {
    id: 3,
    name: "Porto Giunco",
    listings: "Iconic Beach",
    image: "/assets/img/destination/porto-giunco-cover.png",
    slug: "/destination/porto-giunco",
  },
  {
    id: 4,
    name: "Cala Delfino",
    listings: "Hidden Cove",
    image: "/assets/img/destination/cala-delfino-cover.png",
    slug: "/destination/cala-delfino",
  },
  {
    id: 5,
    name: "Cagliari",
    listings: "Historic City",
    image: "/assets/img/destination/cagliari-cover.png",
    slug: "/destination/cagliari",
  },
  {
    id: 6,
    name: "Saint Remy",
    listings: "Historic Bastion",
    image: "/assets/img/destination/saint-remy-cover.png",
    slug: "/destination/saint-remy",
  },
  {
    id: 7,
    name: "The Tower",
    listings: "Coastal Landmark",
    image: "/assets/img/destination/torre-delle-stelle-tower-cover.png",
    slug: "/destination/torre-delle-stelle-tower",
  },
  {
    id: 8,
    name: "Andycoc",
    listings: "Beach Dining",
    image: "/assets/img/destination/andycoc-cover.png",
    slug: "/destination/andycoc",
  },
  {
    id: 9,
    name: "Aquarium",
    listings: "Garden Dining",
    image: "/assets/img/destination/aquarium-cover.png",
    slug: "/destination/aquarium",
  },
  {
    id: 10,
    name: "Mosaico",
    listings: "Refined Dining",
    image: "/assets/img/destination/mosaico-cover.png",
    slug: "/destination/mosaico",
  },
  {
    id: 11,
    name: "Istellas Club",
    listings: "Beach Club",
    image: "/assets/img/destination/istellas-club-cover.png",
    slug: "/destination/istellas-club",
  },
  {
    id: 12,
    name: "Palmira",
    listings: "Local Hub",
    image: "/assets/img/destination/centro-palmira-cover.png",
    slug: "/destination/centro-palmira",
  },
  {
    id: 13,
    name: "Café do Mar",
    listings: "Sunset Spot",
    image: "/assets/img/destination/cafe-do-mar-cover.png",
    slug: "/destination/cafe-do-mar",
  },
];

const sliderOptions = {
  modules: [EffectCoverflow],
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "5",
  initialSlide: 0,
  grabCursor: true,
  loop: true, // Change from "true" to true
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 95,
    depth: 212,
    modifier: 1,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 3 },
  },
};

function DestinationOne() {
  const [cursorActive, setCursorActive] = useState(false);
  const { lang } = useParams();

  useEffect(() => {
    // Add event listeners for hover effect
    const sliderWrap = document.querySelector(".slider-drag-wrap");
    const sliderLink = document.querySelectorAll(".slider-drag-wrap a");

    const handleMouseEnter = () => setCursorActive(true);
    const handleMouseLeave = () => setCursorActive(false);

    if (sliderWrap) {
      sliderWrap.addEventListener("mouseenter", handleMouseEnter);
      sliderWrap.addEventListener("mouseleave", handleMouseLeave);
    }

    sliderLink.forEach((link) => {
      link.addEventListener("mouseenter", () => setCursorActive(false));
      link.addEventListener("mouseleave", () => setCursorActive(true));
    });

    // Clean up event listeners on component unmount
    return () => {
      if (sliderWrap) {
        sliderWrap.removeEventListener("mouseenter", handleMouseEnter);
        sliderWrap.removeEventListener("mouseleave", handleMouseLeave);
      }

      sliderLink.forEach((link) => {
        link.removeEventListener("mouseenter", () => setCursorActive(false));
        link.removeEventListener("mouseleave", () => setCursorActive(true));
      });
    };
  }, []);

  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Explore The Surroundings</span>
          <h2 className="sec-title">Places Worth Discovering</h2>
        </div>

        <div className={`slider-drag-wrap ${cursorActive ? "active" : ""}`}>
          <Swiper {...sliderOptions} className="destination-slider">
            {destinations.map((dest) => (
              <SwiperSlide key={dest.id}>
                <div className="destination-box gsap-cursor">
                  <Link
                    to={`/${lang || "en"}${dest.slug}`}
                    className="destination-img clickable-card"
                  >
                    <img src={dest.image} alt={dest.name} />
                    <div className="destination-content">
                      <div className="media-left">
                        <h4 className="box-title text-white">{dest.name}</h4>
                        <span className="destination-subtitle">
                          {dest.listings}
                        </span>
                      </div>
                      <div>
                        <span className="th-btn style2 th-icon">Explore</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DestinationOne;
