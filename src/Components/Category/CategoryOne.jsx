import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryOne = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const { lang } = useParams();

  const categories = [
    {
      id: 1,
      title: "Private Villa",
      subtext: "Villa Antares",
      imgSrc: "/assets/images/StaysHomeScreen/Antares.png",
      route: `/${lang || "en"}/villa-antares`,
    },
    {
      id: 2,
      title: "Aquarius",
      subtext: "Villa Verde",
      imgSrc: "/assets/images/StaysHomeScreen/Aquarius-1.png",
      route: `/${lang || "en"}/villa-verde/aquarius`,
    },
    {
      id: 3,
      title: "Aries",
      subtext: "Villa Verde",
      imgSrc: "/assets/images/StaysHomeScreen/Aries-1.png",
      route: `/${lang || "en"}/villa-verde/aries`,
    },
    {
      id: 4,
      title: "Cancer",
      subtext: "Villa Verde",
      imgSrc: "/assets/images/StaysHomeScreen/Cancer-1.png",
      route: `/${lang || "en"}/villa-verde/cancer`,
    },
    {
      id: 5,
      title: "Virgo",
      subtext: "Villa Verde",
      imgSrc: "/assets/images/StaysHomeScreen/Virgo-1.png",
      route: `/${lang || "en"}/villa-verde/virgo`,
    },
    {
      id: 6,
      title: "Sagittarius",
      subtext: "Villa Verde",
      imgSrc: "/assets/images/StaysHomeScreen/Sagittarius-1.png",
      route: `/${lang || "en"}/villa-verde/sagittarius`,
    },
  ];

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current.swiper;

    // ✅ Start autoplay properly
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
    // ✅ Custom pagination with numbers
    if (swiperInstance.pagination) {
      swiperInstance.pagination.renderBullet = function (index, className) {
        let formattedNumber = index + 1 < 10 ? "0" + (index + 1) : index + 1;
        return `<span class="${className} number">${formattedNumber}</span>`;
      };
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
    // ✅ Custom wheel effect for category slider
    const multiplier = {
      translate: 0.1,
      rotate: 0.01,
    };

    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single");
      slides.forEach((slide) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty =
          Math.abs(r) * multiplier.translate -
          rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };

    raf();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="category-area bg-top-center bg-top-center overflow-hidden space bg-no-repeat"
      style={{
        // backgroundImage: "url(/assets/img/category/tour_category_bg.png)",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
        // backgroundPosition: "center",
        marginTop: "15%",
      }}
    >
      <div className="container th-container">
        <div className="title-area text-center">
          <span className="sub-title">Discover Our Villas</span>
          <h2 className="sec-title">Find Your Perfect Stay</h2>
        </div>

        {/* <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 5 },
          }}
          spaceBetween={64}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }} // ✅ Defined renderBullet inside pagination
          className="th-slider has-shadow categorySlider"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div
                className="category-card single"
                role="button"
                tabIndex={0}
                onClick={() => navigate(category.route)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    navigate(category.route);
                  }
                }}
              >
                <div className="box-img global-img">
                  <img
                    src={category.imgSrc}
                    alt={category.title}
                    loading="lazy"
                  />
                </div>
                <h3 className="box-title">{category.title}</h3>
                <p className="box-text">{category.subtext}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controller w-100 justify-content-center">
            <div
              className="swiper-pagination"
              style={{ maxWidth: "100%" }}
            ></div>
          </div>
        </Swiper> */}
        <div className="tab-content" id="nav-tabContent" style={{}}>
          <div
            className={`tab-pane fade show active`}
            id="tab-grid"
            role="tabpanel"
          >
            <div className="row gy-24 gx-24">
              <div className="col-md-6">
                <Link
                  to={"/villa-antares"}
                  className="tour-box th-ani clickable-card"
                >
                  <div className="tour-box_img global-img">
                    <img
                      src={"/assets/images/HomeBsanner/Antares1.png"}
                      alt={`test - test`}
                    />
                  </div>
                  <div className="tour-content">
                    <p className="stays-card-villa-label">test</p>
                    <h4 className="tour-box_price">
                      <span className="currency">test</span>
                    </h4>
                    <div className="tour-action">
                      <span>
                        <i className="fa-light fa-clock" />
                        minstay
                      </span>
                      <span className="th-btn style4">
                        <span
                          className="d-none d-xl-inline"
                          style={{
                            color: "inherit",
                            fontWeight: "inherit",
                          }}
                        >
                          View
                        </span>
                        Details
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link
                  to={"/villa-antares"}
                  className="tour-box th-ani clickable-card"
                >
                  <div className="tour-box_img global-img">
                    <img
                      src={"/assets/images/HomeBsanner/Antares1.png"}
                      alt={`test - test`}
                    />
                  </div>
                  <div className="tour-content">
                    <p className="stays-card-villa-label">test</p>
                    <h4 className="tour-box_price">
                      <span className="currency">test</span>
                    </h4>
                    <div className="tour-action">
                      <span>
                        <i className="fa-light fa-clock" />
                        minstay
                      </span>
                      <span className="th-btn style4">
                        <span
                          className="d-none d-xl-inline"
                          style={{
                            color: "inherit",
                            fontWeight: "inherit",
                          }}
                        >
                          View
                        </span>
                        Details
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryOne;
