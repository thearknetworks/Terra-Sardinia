import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../Gallery/Modal";
import "../Destination/staggeredGallery.css";
import "./ResortDetailsInfoCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { villaVerdeReviewsNewestFirst } from "./villaVerdeDetailsData";

const REVIEW_AVATAR_STYLE = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
};

const sliderImages = [
  "/assets/img/slider/a4oyyb39ounwv6rhjad2.webp",
  "/assets/img/slider/avxyeckgjs48quysoyvc.webp",
  "/assets/img/slider/cadsjj0iniyxxltpi9ec.webp",
  "/assets/img/slider/ccc1mhpmnawd0w3kircw.webp",
  "/assets/img/slider/cskfsqdnddsncptamtiy.webp",
  "/assets/img/slider/elfictg7dsi12k8hvedh.webp",
  "/assets/img/slider/euutfgqxhdcmkvkelgpi.webp",
  "/assets/img/slider/eyiybm6778l4uqtnhsns.webp",
  "/assets/img/slider/f6kkhwynae8qgxykleh4.webp",
  "/assets/img/slider/gfao8mukr5scau6wrkbt.webp",
  "/assets/img/slider/gzaortnmddmzn8blogtp.webp",
  "/assets/img/slider/ipfnwjxwwel7wnwcp7vk.webp",
  "/assets/img/slider/jadqscjw9jhdou9czey3.webp",
  "/assets/img/slider/jd7vqqyh3y3ls5slpewr.webp",
  "/assets/img/slider/ka3kqoe10had65673g6p.webp",
  "/assets/img/slider/l1gbimgxctb71lduuqxt.webp",
  "/assets/img/slider/li6mqd2xt8fpokkcbioa.webp",
  "/assets/img/slider/ljoegzli0xso6qnbnmcf.webp",
  "/assets/img/slider/ly6up9jrvtxpnhxea9ul.webp",
  "/assets/img/slider/mhl7greh6ijcafxe5crk.webp",
  "/assets/img/slider/mi9wixalmlptgeiayzni.webp",
  "/assets/img/slider/nrq4wcngmm4do1ha509f.webp",
  "/assets/img/slider/nwribsdq94cfbqd8azgt.webp",
  "/assets/img/slider/oy2gn5mbx00picjoiip9.webp",
  "/assets/img/slider/pmxclj2gf5akzr1hsswz.webp",
  "/assets/img/slider/q287iwlsmilsgldksbis.webp",
  "/assets/img/slider/qossjrtwiainrmewawle.webp",
  "/assets/img/slider/sxortqfnwxoapahi0hzx.webp",
  "/assets/img/slider/szc4sqcea9dzruof6qwi.webp",
  "/assets/img/slider/t9nzfklbvbsmjy6zmnmj.webp",
  "/assets/img/slider/tyq6txyg7ecckhqgh8nh.webp",
  "/assets/img/slider/umshbf4irno99g0ds2d5.webp",
  "/assets/img/slider/vjcz3am4nkovuym1xu0y.webp",
  "/assets/img/slider/xklxlsjx6c4rhhr04njb.webp",
  "/assets/img/slider/yse1em6e9zjdkqozvlat.webp",
  "/assets/img/slider/fmgo2dtyo7afneh9kkcb.jpg",
  "/assets/img/slider/ldmczmharv8d8b8xtmka.jpg",
  "/assets/img/slider/mfmbhkex7cv7hp9yyno7.jpg",
  "/assets/img/slider/mxsdyfb5jvfrwfcmgqyo.jpg",
  "/assets/img/slider/t1smo9m6t2vvzelkvq9c.jpg",
  "/assets/img/slider/yoxcafbe1dms0mpxkxnl.jpg",
  "/assets/img/slider/zwirkj7ql2z9uepfbttx.jpg",
];

const bannerImage = "/assets/img/villaAntres/Antares%20Banner%20Image.png";

const galleryImages = [
  "/assets/img/villaAntres/Antares%20Gallery%202%20%28a%29.png",
  "/assets/img/villaAntres/Antares%20Gallery%201.png",
  "/assets/img/villaAntres/Antares%20Gallery%202.png",
  "/assets/img/villaAntres/Gallery%201%20%28a%29.png",
];

const highlights = [
  { name: "Sea View", icon: "/assets/img/villaAntres/Seaview.png" },
  { name: "Air Conditioning", icon: "/assets/img/villaAntres/AC-5.png" },
  { name: "Wifi", icon: "/assets/img/villaAntres/Wifi-5.png" },
  { name: "TV", icon: "/assets/img/villaAntres/TV-5.png" },
  { name: "Dishwasher", icon: "/assets/img/villaAntres/Dishwasher.png" },
  { name: "Dining Area", icon: "/assets/img/villaAntres/Dining%20Area.png" },
  { name: "Outdoor Dining", icon: "/assets/img/villaAntres/Outdoor-1.png" },
  { name: "BBQ", icon: "/assets/img/villaAntres/BBQ.png" },
  { name: "Pool", icon: "/assets/img/villaAntres/Pool-2.png" },
  {
    name: "Outdoor Hot Tub",
    icon: "/assets/img/villaAntres/Outdoor%20Hot%20Tub.png",
  },
  {
    name: "Cleaning Service",
    icon: "/assets/img/villaAntres/Cleaning%20Service.png",
  },
  { name: "Safe", icon: "/assets/img/villaAntres/Safe-2.png" },
  { name: "Hair Dryer", icon: "/assets/img/villaAntres/Hair%20Dryer-5.png" },
  { name: "Shower", icon: "/assets/img/villaAntres/Shower-5.png" },
  { name: "Adapter", icon: "/assets/img/villaAntres/Adapter.png" },
  { name: "Desk", icon: "/assets/img/villaAntres/Desk-3.png" },
  { name: "Alarm System", icon: "/assets/img/villaAntres/Alarm%20System.png" },
  {
    name: "Electric Car Charging",
    icon: "/assets/img/villaAntres/Electric%20Car%20Charger.png",
  },
  { name: "Pet Friendly", icon: "/assets/img/villaAntres/Pet%20Friendly.png" },
];

const selectedRoomMedia = {
  topImage: bannerImage,
  gallery: galleryImages,
};

const selectedRoomContent = {
  header: "Elevated Coastal Living",
  body: "Villa Antares is a refined Mediterranean retreat set within a peaceful natural landscape of mastic trees, junipers, and sculpted granite. Designed to welcome and relax from the very first moment, the villa combines elegant finishes with warm, inviting spaces. From its elevated position, it offers beautiful sea views and a tranquil atmosphere that defines the essence of Sardinian living.",
  secondHeader: "Space to Gather, Space to Unwind",
  secondBody:
    "Accommodating up to ten guests, the villa features five bedrooms, multiple indoor and outdoor living areas, and two bathrooms with showers. A fully equipped kitchen, spacious dining areas, and open patios create the perfect setting for shared moments, whether enjoying meals, relaxing outdoors, or gathering under the stars. Located just minutes from nearby beaches and surrounded by nature, Villa Antares delivers both comfort and connection in a private, home-like environment.",
  highlights,
};

const detailsConfig = {
  minStay: "6 Nights",
  groupSize: "10 Persons",
  extraBed: "Available",
};

function VillaAntaresInner() {
  const { lang } = useParams();
  const currentLang = lang || "en";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalIndex, setModalIndex] = useState(0);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const galleryRowPairs = useMemo(() => {
    const galleryImages = selectedRoomMedia.gallery.slice(0, 4);
    const pairs = [];
    for (let i = 0; i < galleryImages.length; i += 2) {
      pairs.push(galleryImages.slice(i, i + 2));
    }
    return pairs;
  }, []);

  const openModal = (imageSrc) => (e) => {
    e.preventDefault();
    setModalImage(imageSrc);
    const index = selectedRoomMedia.gallery.indexOf(imageSrc);
    setModalIndex(index >= 0 ? index : 0);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const renderGalleryBox = (imagePath) => (
    <div className="gallery-box style3 staggered-gallery-box">
      <div className="gallery-img global-img">
        <img src={imagePath} alt="gallery" onClick={openModal(imagePath)} />
        <Link
          to={imagePath}
          className="icon-btn popup-image"
          onClick={openModal(imagePath)}
        >
          <i className="fal fa-magnifying-glass-plus" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="space">
      <div className="container shape-mockup-wrap">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="slider-area tour-slider1">
                <Swiper
                  modules={[Navigation, Thumbs, EffectFade]}
                  effect="fade"
                  loop={true}
                  spaceBetween={10}
                  navigation={{
                    prevEl: ".villa-antares-slider-prev",
                    nextEl: ".villa-antares-slider-next",
                  }}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  className="swiper th-slider mb-25"
                  id="villaAntaresSlider"
                >
                  {sliderImages.map((img, slideIndex) => (
                    <SwiperSlide key={img}>
                      <div className="tour-slider-img">
                        <img
                          src={img}
                          alt={`Villa Antares Slide ${slideIndex + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Swiper
                  modules={[Thumbs]}
                  loop={false}
                  spaceBetween={12}
                  slidesPerView={3}
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  className="swiper tour-thumb-slider"
                >
                  {sliderImages.map((img, thumbIndex) => (
                    <SwiperSlide key={`${img}-thumb`}>
                      <div className="tour-slider-img">
                        <img
                          src={img}
                          alt={`Villa Antares Thumbnail ${thumbIndex + 1}`}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  className="slider-arrow style3 villa-antares-slider-prev"
                  aria-label="Previous slide"
                >
                  <img src="/assets/img/icon/hero-arrow-left.svg" alt="" />
                </button>
                <button
                  className="slider-arrow style3 slider-next villa-antares-slider-next"
                  aria-label="Next slide"
                >
                  <img src="/assets/img/icon/hero-arrow-right.svg" alt="" />
                </button>
              </div>

              <div className="page-content d-block">
                <h2 className="box-title mt-20">
                  {selectedRoomContent.header}
                </h2>
                <p className="blog-text mb-30">{selectedRoomContent.body}</p>

                <h4 className="">{selectedRoomContent.secondHeader}</h4>
                <p className="blog-text mb-35">
                  {selectedRoomContent.secondBody}
                </p>

                <h2 className="box-title">Highlights</h2>
                <ul className="resort-grid-list">
                  {selectedRoomContent.highlights.map((highlight) => (
                    <li key={highlight.name}>
                      <div className="resort-grid-list-icon">
                        <img src={highlight.icon} alt={highlight.name} />
                      </div>
                      <div className="resort-grid-list-details">
                        <h4 className="resort-grid-list-title">
                          {highlight.name}
                        </h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="staggered-gallery-wrapper">
                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                {galleryRowPairs.map((pair, rowIndex) => {
                  const rowKey = `staggered-gallery-row-${rowIndex}-${pair[0]}`;
                  if (pair.length === 1) {
                    return (
                      <div
                        className="row staggered-gallery-row g-4 align-items-stretch"
                        key={rowKey}
                      >
                        <div className="col-12 filter-item">
                          <div className="staggered-gallery-item">
                            {renderGalleryBox(pair[0])}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const [imgA, imgB] = pair;
                  if (rowIndex % 2 === 0) {
                    return (
                      <div
                        className="row staggered-gallery-row g-4 align-items-stretch"
                        key={rowKey}
                      >
                        <div className="col-12 col-lg-7 filter-item">
                          <div className="staggered-gallery-item h-100">
                            {renderGalleryBox(imgA)}
                          </div>
                        </div>
                        <div className="col-12 col-lg-5 filter-item">
                          <div className="staggered-gallery-item h-100">
                            {renderGalleryBox(imgB)}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      className="row staggered-gallery-row g-4 align-items-stretch"
                      key={rowKey}
                    >
                      <div className="col-12 col-lg-5 filter-item">
                        <div className="staggered-gallery-item h-100">
                          {renderGalleryBox(imgB)}
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 filter-item">
                        <div className="staggered-gallery-item h-100">
                          {renderGalleryBox(imgA)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="th-comments-wrap style2 ">
                <h2 className="blog-inner-title h4">
                  Reviews ({villaVerdeReviewsNewestFirst.length})
                </h2>
                <ul className="comment-list">
                  {villaVerdeReviewsNewestFirst.map((review) => (
                    <li className="th-comment-item" key={review.name}>
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            style={REVIEW_AVATAR_STYLE}
                          />
                        </div>
                        <div className="comment-content">
                          <h3 className="name">{review.name}</h3>
                          <div className="commented-wrapp">
                            <span className="commented-on">{review.date}</span>
                            <span className="comment-review">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <span className="ms-2">{review.rating}</span>
                            </span>
                          </div>
                          <p className="text">{review.body}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              <div className="widget resort-details-widget">
                <h3 className="widget_title">Details</h3>
                <div className="resort-details-widget__grid">
                  <div className="resort-details-widget__item">
                    <img
                      src="/assets/img/villaVerde/details/Duration.png"
                      alt="Min. Stay"
                    />
                    <div>
                      <p>Min. Stay</p>
                      <h6 className="resort-details-widget__subtitle">
                        {detailsConfig.minStay}
                      </h6>
                    </div>
                  </div>
                  <div className="resort-details-widget__item">
                    <img
                      src="/assets/img/villaVerde/details/Group.png"
                      alt="Group Size"
                    />
                    <div>
                      <p>Group Size</p>
                      <h6 className="resort-details-widget__subtitle">
                        {detailsConfig.groupSize}
                      </h6>
                    </div>
                  </div>
                  <div className="resort-details-widget__item">
                    <img
                      src="/assets/img/villaVerde/details/Extra%20Bed.png"
                      alt="Extra Bed"
                    />
                    <div>
                      <p>Extra Bed</p>
                      <h6 className="resort-details-widget__subtitle">
                        {detailsConfig.extraBed}
                      </h6>
                    </div>
                  </div>
                  <div className="resort-details-widget__item">
                    <img
                      src="/assets/img/villaVerde/details/Cancellation.png"
                      alt="Cancellation"
                    />
                    <div>
                      <p>House Rules</p>
                      <button
                        type="button"
                        className="resort-details-widget__learn-more"
                        onClick={() => setIsRulesModalOpen(true)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                <Link
                  to="/booking"
                  className="th-btn th-icon resort-details-widget__book-btn"
                >
                  Book Now
                </Link>
              </div>

              <div
                className="widget widget_offer need-help-widget"
                style={{
                  background: `linear-gradient(#111d487b, #111d487b), url(/assets/img/destination/need_help.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="offer-banner">
                  <div className="offer">
                    <h6 className="box-title">Need Help? We’re here for you</h6>
                    <div className="banner-logo">
                      <img
                        src="/assets/images/logo/TerraSardiniaWhiteLogo.png"
                        alt="Terra Sardinia"
                      />
                    </div>
                    <Link
                      to={`/${currentLang}/contact`}
                      className="th-btn style2 th-icon"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          style={{ bottom: "35%", right: "-12%" }}
        >
          <img src="/assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          style={{ bottom: "31%", right: "-8%" }}
        >
          <img src="/assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          style={{ bottom: "33%", right: "-5%" }}
        >
          <img src="/assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
        images={selectedRoomMedia.gallery}
        initialIndex={modalIndex}
      />

      {isRulesModalOpen ? (
        <div
          className="resort-rules-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resort-rules-modal-title"
          onClick={() => setIsRulesModalOpen(false)}
        >
          <div
            className="resort-rules-modal__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="resort-rules-modal__close"
              onClick={() => setIsRulesModalOpen(false)}
              aria-label="Close rules popup"
            >
              ×
            </button>
            <h4 id="resort-rules-modal-title">House Rules & Cancellation</h4>
            <div className="resort-rules-modal__divider" />
            <div className="resort-rules-modal__body">
              <section>
                <h5>Flexible Rate</h5>
                <p>
                  Pay 50% now and enjoy flexibility. Cancel up to 30 days before
                  arrival to receive a full refund of your deposit.
                </p>
              </section>
              <section>
                <h5>Non-Refundable Rate</h5>
                <p>
                  Pay the full amount upfront at a reduced price. This rate is
                  non-refundable in case of cancellation.
                </p>
              </section>
              <section>
                <h5>Check-in</h5>
                <p>From 3:30 PM to 12:30 AM</p>
                <p>
                  Please let the property know your arrival time in advance.
                </p>
              </section>
              <section>
                <h5>Check-out</h5>
                <p>From 8:00 AM to 10:00 AM</p>
              </section>
              <section>
                <h5>Children & Beds</h5>
                <p>Children over 8 are welcome.</p>
                <p>Guests aged 18 and above are considered adults.</p>
                <p>Extra beds are available upon request.</p>
                <p>Cribs depend on availability.</p>
              </section>
              <section>
                <h5>Age Requirement</h5>
                <p>There is no age requirement for check-in.</p>
              </section>
              <section>
                <h5>Pets</h5>
                <p>
                  Pets are allowed on request. Additional charges may apply.
                </p>
              </section>
              <section>
                <h5>Payment</h5>
                <p>
                  Visa, Mastercard, Diners Club, Maestro, and CartaSi are
                  accepted. Cash is not accepted.
                </p>
              </section>
              <section>
                <h5>Smoking</h5>
                <p>Smoking is not allowed.</p>
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default VillaAntaresInner;
