import React from "react";
import { Link, useParams } from "react-router-dom";

const CategoryOne = () => {
  const { lang } = useParams();
  const titleStyle = {
    color:
      "var(--tourm-react-netlify-app-elephant, var(--color-cyan-17, #113D48))",
    fontSize: "clamp(32px, 4vw, 40px)",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "clamp(42px, 5vw, 56.68px)",
  };

  const subTitleStyle = {
    color:
      "var(--tourm-react-netlify-app-elephant, var(--color-cyan-17, #113D48))",
    fontSize: "clamp(18px, 2.4vw, 24px)",
    fontStyle: "normal",
    fontWeight: 600,
    margin: 0,
    marginBottom: "clamp(10px, 1.5vw, 12px)",
    lineHeight: "clamp(28px, 3.2vw, 36px)",
  };

  const descriptionStyle = {
    color:
      "var(--tourm-react-netlify-app-sirocco, var(--color-grey-44, #6E7070))",
    fontSize: "clamp(15px, 1.8vw, 18px)",
    fontStyle: "normal",
    fontWeight: "var(--font-weight-400, 400)",
    lineHeight: "clamp(24px, 2.3vw, 31.5px)",
  };

  const featureStyle = {
    color:
      "var(--tourm-react-netlify-app-cod-gray, var(--color-grey-5, #0D0D0C))",
    fontFamily: "var(--font-family-Font-2, Inter)",
    fontSize: "clamp(15px, 1.8vw, var(--font-size-18, 18px))",
    fontStyle: "normal",
    fontWeight: "var(--font-weight-400, 400)",
    lineHeight: "clamp(24px, 2.1vw, var(--line-height-28, 28px))",
  };

  const data = [
    {
      title: "Villa Antares",
      subTitle: "Authentic Sardinian-Style Villa",
      cin: "CIN IT092037B4000F4095",
      description:
        "Surrounded by Mediterranean lentisk trees, junipers, and majestic granite rocks,  perfect for those seeking privacy, comfort, and panoramic sea views.",
      features: [
        "Exclusive use",
        "Sea view",
        "Private saltwater swimming pool",
        "Ideal for families or groups of friends",
      ],
      buttonText: "Discover More",
      imgSrc: "/assets/images/HomeScreenCategorySeciton/Antares Card.png",
      slug: "villa-antares",
      stamp: "/assets/images/HomeScreenCategorySeciton/logo antares.png",
    },

    {
      title: "Guesthouse Villa Verde",
      subTitle: "Relax & Family Hospitality Just Steps from the Sea",
      cin: "CIN  IT092037C2000Q2674",
      description:
        "A peaceful and welcoming retreat in Torre delle Stelle, where comfort, nature, and authentic hospitality come together to create a relaxing and memorable stay by the sea.",
      features: [
        "5 rooms with private bathrooms",
        "Breakfast included",
        "Private saltwater swimming pool",
        "Friendly, welcoming atmosphere",
      ],
      buttonText: "Discover More",
      imgSrc: "/assets/images/HomeScreenCategorySeciton/Verde Card.png",
      slug: "villa-verde",
      stamp: "/assets/images/HomeScreenCategorySeciton/logo verde.png",
    },
  ];

  return (
    <section
      className="category-area bg-top-center bg-top-center overflow-hidden space bg-no-repeat"
      style={
        {
          // backgroundImage: "url(/assets/img/category/tour_category_bg.png)",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          // backgroundPosition: "center",
          // marginTop: "15%",
        }
      }
    >
      <div className="container th-container category-desktop-padding">
        <style>
          {`
            .no-hover-shadow:hover {
              box-shadow: none !important;
            }
            @media (min-width: 1200px) {
              .category-desktop-padding {
                padding-left: 48px;
                padding-right: 48px;
              }
            }
          `}
        </style>
        <div className="title-area text-center">
          <span className="sub-title">Discover Our Properties</span>
          <h2 className="sec-title">
            Choose Your Experience in Torre delle Stelle
          </h2>
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
        <div
          className="tab-content"
          id="nav-tabContent"
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <div
            className={`tab-pane fade show active`}
            id="tab-grid"
            role="tabpanel"
          >
            <div className="row gy-24 gx-24 justify-content-center">
              {data.map((item, index) => (
                <div
                  className="col-12 col-md-6"
                  key={item.title}
                  onClick={() =>
                    (window.location.href = `/${lang}/${item.slug}`)
                  }
                >
                  <div
                    className="tour-box no-hover-shadow"
                    style={{ border: "none" }}
                  >
                    <div
                      className="tour-box_img global-img"
                      style={{
                        aspectRatio: "1 / 1",
                        width: "100%",
                        borderRadius: "24px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "24px",
                        }}
                      />
                      {item.stamp && (
                        <img
                          src={item.stamp}
                          alt={`${item.title} stamp`}
                          style={{
                            position: "absolute",
                            bottom: "16px",
                            right: "16px",
                            width: "130px",
                            height: "130px",
                            objectFit: "contain",
                          }}
                        />
                      )}
                    </div>

                    <div className="tour-content ">
                      <h4 className="tour-box_price mb-0" style={titleStyle}>
                        {item.title}{" "}
                        <span
                          style={{
                            fontSize: "clamp(14px, 1.5vw, 16px)",
                            fontfamily: "var(--font-family-Font-2, Inter)",
                            fontWeight: "var(--font-weight-400, 400)",
                            lineHeight: "clamp(20px, 1.8vw, 24px)",
                            color: "#6e7070",
                          }}
                        >
                          {item.cin}
                        </span>
                      </h4>

                      <p className="tour-box_price" style={subTitleStyle}>
                        {item.subTitle}
                      </p>

                      <p className="mb-16" style={descriptionStyle}>
                        {item.description}
                      </p>

                      {index === 0 && <br />}

                      <div
                        className="checklist"
                        style={{ marginBottom: "clamp(24px, 5vw, 40px)" }}
                      >
                        <ul>
                          {item.features.map((feature) => (
                            <li key={feature} style={featureStyle}>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={`/${lang}/${item.slug}`}
                        className="th-btn style4"
                      >
                        {item.buttonText}
                        <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryOne;
