import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { villaVerdeReviewsNewestFirst } from "../Resort/villaVerdeDetailsData";
import "swiper/css";
import "swiper/css/pagination";

function TestimonialOne() {
  return (
    <section
      className="testi-area overflow-hidden space shape-mockup-wrap"
      id="testi-sec"
    >
      <div className="container-fluid p-0">
        <div className="title-area mb-20 text-center">
          <span className="sub-title">What Clients Say About Us</span>
          <h2 className="sec-title">Testimonials</h2>
        </div>
        <div className="slider-area">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            slidesPerGroup={1}
            speed={1200}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
              1400: { slidesPerView: 3 },
            }}
            className="testiSlider1 has-shadow"
          >
            {villaVerdeReviewsNewestFirst.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={item.avatar} alt={item.name} />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">{item.name}</h3>
                        <span className="testi-card_desig">{item.date}</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star" />
                      ))}
                    </div>
                  </div>
                  <p className="testi-card_text">{item.body}</p>
                  <div className="testi-card-quote">
                    <img src="/assets/img/icon/testi-quote.svg" alt="img" />
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

export default TestimonialOne;
