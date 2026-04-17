import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useParams } from "react-router-dom";
import services from "../data/data-service.json";

function TourOne() {
  const { lang = "en" } = useParams();

  return (
    <section
      className="tour-area position-relative bg-top-center overflow-hidden space bg-no-repeat"
      id="service-sec"
      style={{ backgroundImage: "url(/assets/img/bg/tour_bg_1.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="title-area text-center">
              <span className="sub-title">Enhance Your Stay</span>
              <h2 className="sec-title">Experiences to Remember</h2>
              <p className="sec-text">
                Beyond your stay, discover a selection of experiences designed
                to make your time in Sardinia truly special. From sailing the
                coastline to guided tours and moments of wellness, each service
                is chosen to complement your journey and turn simple days into
                lasting memories.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-area tour-slider">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1300: { slidesPerView: 3 },
            }}
            spaceBetween={24}
            grabCursor={true}
            className="swiper th-slider has-shadow slider-drag-wrap"
          >
            {services.map((item) => (
              <SwiperSlide key={item.slug || item.id}>
                <div className="tour-box th-ani gsap-cursor">
                  <div className="tour-box_img global-img">
                    <img src={item.cardImage} alt={item.listTitle} />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      <Link to={`/${lang}/services/${item.slug}`}>
                        {item.listTitle}
                      </Link>
                    </h3>
                    <div className="tour-rating">
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.0 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.0</strong> out of 5
                        </span>
                      </div>
                      <span className="woocommerce-review-link">
                        (5.0 Rating)
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TourOne;
