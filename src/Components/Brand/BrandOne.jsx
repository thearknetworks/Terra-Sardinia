import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

const brands = [
  "TerraSardiniaBlueLogoFinal.png",
  "VillaVerdeBlueLogoFinal.png",
  "VillaAntaresBlueLogoFinal.png",
  "TerraSardiniaBlueLogoFinal.png",
  "VillaVerdeBlueLogoFinal.png",
  "VillaAntaresBlueLogoFinal.png",
  "TerraSardiniaBlueLogoFinal.png",
  "VillaVerdeBlueLogoFinal.png",
  "VillaAntaresBlueLogoFinal.png",
  "TerraSardiniaBlueLogoFinal.png",
  "VillaVerdeBlueLogoFinal.png",
  "VillaAntaresBlueLogoFinal.png",
  "TerraSardiniaBlueLogoFinal.png",
  "VillaVerdeBlueLogoFinal.png",
  "VillaAntaresBlueLogoFinal.png",
  "TerraSardiniaBlueLogoFinal.png",
  "VillaVerdeBlueLogoFinal.png",
  "VillaAntaresBlueLogoFinal.png",
  "TerraSardiniaBlueLogoFinal.png",
  "VillaVerdeBlueLogoFinal.png",
  "VillaAntaresBlueLogoFinal.png",
];

function BrandOne({ className }) {
  return (
    <div className={`brand-area overflow-hidden space-top ${className}`}>
      <div className="container th-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BrandOne;
