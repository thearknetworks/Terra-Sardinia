import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const brands = [
  "Verde logo original.png",
  "Terra Logo original.png",
  "Antares logo original.png",
];

function BrandOne({ className }) {
  return (
    <div className={`brand-area overflow-hidden space-top ${className}`}>
      <div
        className="container th-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {/* <Swiper
          loop={true}
          speed={1000}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 6 },
            1400: { slidesPerView: 8 },
          }}
          className="brandSlider1"
        > */}
        {brands.map((brand, index) => (
          <div key={index}>
            <div className="brand-box">
              <Link to="#">
                <img
                  className="original"
                  src={`/assets/images/logo/${brand}`}
                  alt="Brand Logo"
                />
                <img
                  className="gray"
                  src={`/assets/images/logo/${brand}`}
                  alt="Brand Logo"
                />
              </Link>
            </div>
          </div>
        ))}
        {/* </Swiper> */}
      </div>
    </div>
  );
}

export default BrandOne;
