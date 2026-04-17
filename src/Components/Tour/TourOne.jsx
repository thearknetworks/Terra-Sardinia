import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useParams } from "react-router-dom";
import services from "../data/data-service.json";

function serviceHref(lang, slug) {
  return slug === "ferry" ? `/${lang}/services/ferry` : `/${lang}/services/${slug}`;
}

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
              <span className="sub-title">Experiences to Remember</span>
              <h2 className="sec-title">Enhance Your Stay</h2>
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
                <Link
                  to={serviceHref(lang, item.slug)}
                  className="tour-box th-ani gsap-cursor clickable-card"
                >
                  <div className="tour-box_img global-img">
                    <img
                      src={item.cardImage || item.image}
                      alt={item.listTitle || ""}
                    />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">
                      {item.cardSubtitle || item.categoryLabel || ""}
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
                        5.0 star rating
                      </span>
                    </div>
                    <h4 className="tour-box_price">
                      <span className="currency">{item.listTitle}</span>
                    </h4>
                    <div
                      className="tour-action"
                      style={{ justifyContent: "flex-end" }}
                    >
                      <span className="th-btn style4 th-icon">Learn More</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TourOne;
