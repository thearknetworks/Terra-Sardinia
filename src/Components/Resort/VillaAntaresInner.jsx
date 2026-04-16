import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../Gallery/Modal";
import "../Destination/staggeredGallery.css";
import "./ResortDetailsInfoCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";

const sliderImages = [
  "/assets/img/tour/tour_inner_2_1.jpg",
  "/assets/img/tour/tour_inner_2_2.jpg",
  "/assets/img/tour/tour_inner_2_3.jpg",
  "/assets/img/tour/tour_inner_2_4.jpg",
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
              <div className="service-img global-img">
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
                    thumbs={{ swiper: thumbsSwiper }}
                    className="swiper th-slider mb-25"
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
                    modules={[Navigation, Thumbs]}
                    loop={true}
                    spaceBetween={25}
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

                  <button className="slider-arrow style3 villa-antares-slider-prev">
                    <img
                      src="/assets/img/icon/hero-arrow-left.svg"
                      alt="Previous slide"
                    />
                  </button>
                  <button className="slider-arrow style3 villa-antares-slider-next">
                    <img
                      src="/assets/img/icon/hero-arrow-right.svg"
                      alt="Next slide"
                    />
                  </button>
                </div>
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
                <h2 className="blog-inner-title h4">Reviews (0)</h2>
                <ul className="comment-list" />
              </div>
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              <div className="widget">
                <h3 className="widget_title">Villa Antares</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${currentLang}/villa-antares`}>
                        <img src={bannerImage} alt="Villa Antares" />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link
                          className="text-inherit"
                          to={`/${currentLang}/villa-antares`}
                        >
                          Villa Antares
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <span>Up to 10 guests</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                      <h6>{detailsConfig.minStay}</h6>
                    </div>
                  </div>
                  <div className="resort-details-widget__item">
                    <img
                      src="/assets/img/villaVerde/details/Group.png"
                      alt="Group Size"
                    />
                    <div>
                      <p>Group Size</p>
                      <h6>{detailsConfig.groupSize}</h6>
                    </div>
                  </div>
                  <div className="resort-details-widget__item">
                    <img
                      src="/assets/img/villaVerde/details/Extra%20Bed.png"
                      alt="Extra Bed"
                    />
                    <div>
                      <p>Extra Bed</p>
                      <h6>{detailsConfig.extraBed}</h6>
                    </div>
                  </div>
                  <div className="resort-details-widget__item">
                    <img
                      src="/assets/img/villaVerde/details/Cancellation.png"
                      alt="Cancellation"
                    />
                    <div>
                      <p>Cancellation</p>
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
                  to={`/${currentLang}/stays`}
                  className="th-btn resort-details-widget__book-btn"
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
