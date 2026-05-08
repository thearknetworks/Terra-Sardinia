import React from "react";
import { Link, useParams } from "react-router-dom";

function AboutOne() {
  const { lang = "en" } = useParams();

  return (
    <div
      className="about-area position-relative overflow-hidden space"
      id="about-sec"
    >
      <div className="container shape-mockup-wrap">
        <div className="row">
          <div className="col-xl-6 text-center text-xl-start">
            <div className="img-box1 mx-auto mx-xl-0">
              <div className="img1">
                <img
                  src="/assets/img/normal/AboutImageWithDog.jpeg"
                  alt="About"
                />
              </div>
              <div className="img2">
                <img src="/assets/img/normal/about_1_2.png" alt="About" />
              </div>
              <div className="img3">
                <img src="/assets/img/normal/about_1_3.png" alt="About" />
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="ps-xl-4 ms-xl-2 text-center text-xl-start">
              <div className="title-area mb-20 pe-xl-5 me-xl-5">
                <span className="sub-title style1 justify-content-center justify-content-xl-start">
                  A Love Story
                </span>
                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                  Rooted in Sardinia
                </h2>
                <p className="sec-text mb-30">
                  Angela & Didier welcome you to Torre delle Stelle, where
                  Guesthouse Villa Verde and Villa Antares invite you to
                  experience the beauty of Torre delle Stelle, its peaceful
                  rhythm, and the simple joy of being surrounded by nature, sea,
                  and unforgettable moments.
                </p>
              </div>

              <div className="about-item-wrap">
                <div className="about-item justify-content-center justify-content-xl-start">
                  <div className="about-item_img">
                    <img src="/assets/img/icon/Verdeaward.png" alt="" />
                  </div>
                  <div className="about-item_centent text-start">
                    <h5 className="box-title">Traveller Award 2020</h5>
                    <p className="about-item_text">
                      Recognized with a score of 9.4/10 for outstanding guest
                      experiences and consistent hospitality.
                    </p>
                  </div>
                </div>

                <div className="about-item justify-content-center justify-content-xl-start">
                  <div className="about-item_img">
                    <img src="/assets/img/icon/Antaresaward.png" alt="" />
                  </div>
                  <div className="about-item_centent text-start">
                    <h5 className="box-title">Traveller Award 2024</h5>
                    <p className="about-item_text">
                      Awarded with a perfect 10/10 rating, reflecting
                      exceptional stays and unforgettable guest satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-35">
                <Link to={`/${lang}/contact`} className="th-btn style3 th-icon">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="shape-mockup shape1 d-none d-xl-block"
          style={{
            top: "6%",
            left: "-16%",
            scale: "0.4",
          }}
        >
          <img
            src="/assets/images/Elements/Blue color/Shrimp.png"
            alt="shape"
          />
        </div>

        <div
          className="shape-mockup shape2 d-none d-xl-block"
          style={{
            top: "23%",
            left: "-14%",
          }}
        >
          <img src="/assets/images/Elements/Blue color/Coral.png" alt="shape" />
        </div>

        <div
          className="shape-mockup shape3 d-none d-xl-block"
          style={{
            top: "12%",
            left: "-10%",
            scale: "0.5",
          }}
        >
          <img src="/assets/images/Elements/Blue color/Fish.png" alt="shape" />
        </div>

        <div
          className="shape-mockup about-shape movingX d-none d-xxl-block"
          style={{
            bottom: "0%",
            right: "-11%",
          }}
        >
          <img src="/assets/img/normal/about-slide-img2a.png" alt="shape" />
        </div>

        {/* Replaced the old 4.9k badge with a logo image */}
        <div
          className="shape-mockup d-none d-xxl-block"
          style={{
            bottom: "50%",
            right: "-16%",
            zIndex: 2,
          }}
        >
          <img
            src="/assets/img/icon/Booking.png"
            alt="Logo"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Existing Tripadvisor logo */}
        <div
          className="shape-mockup about-emoji d-none d-xxl-block"
          style={{
            bottom: "25%",
            right: "5%",
            zIndex: 2,
          }}
        >
          <img
            src="/assets/img/icon/Tripadvisor.png"
            alt="Tripadvisor"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* New third logo, left and a bit above Tripadvisor */}
        <div
          className="shape-mockup d-none d-xxl-block"
          style={{
            bottom: "45%",
            right: "9%",
            zIndex: 2,
          }}
        >
          <img
            src="/assets/img/icon/Airbnb.png"
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
