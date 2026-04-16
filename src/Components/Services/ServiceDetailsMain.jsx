import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Posts from "../data/data-service.json";
import Modal from "../Gallery/Modal";
import "../Destination/staggeredGallery.css";

const DEFAULT_GALLERY_IMAGES = [
  "/assets/img/gallery/gallery_6_1.jpg",
  "/assets/img/gallery/gallery_6_2.jpg",
  "/assets/img/gallery/gallery_6_3.jpg",
  "/assets/img/gallery/gallery_6_4.jpg",
];

const SERVICE_TAGS = [
  "Tour",
  "Adventure",
  "Guided",
  "Outdoor",
  "Family",
  "Luxury",
  "Coastal",
  "Experience",
];

const DEFAULT_REVIEWS = [
  {
    name: "Sofia M.",
    date: "2 months ago",
    stars: 5,
    text: "Smooth booking and a memorable experience. The team was responsive and the service matched exactly what was described.",
    avatar: "/assets/img/blog/comment-author-1.jpg",
  },
  {
    name: "James R.",
    date: "5 months ago",
    stars: 5,
    text: "Professional, friendly, and well organized. I would book again and recommend it to friends visiting Sardinia.",
    avatar: "/assets/img/blog/comment-author-5.jpg",
  },
];

function ServiceDetailsMain() {
  const { id, lang = "en" } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalIndex, setModalIndex] = useState(0);

  const servicePost = Posts.find((post) => post.id === parseInt(id, 10));

  const heroImg = servicePost
    ? `/assets/img/destination/${servicePost.bannerImg}`
    : "/assets/img/destination/destination_4_1.jpg";
  const innerImg = `/assets/img/destination/destination-inner-1.jpg`;

  const headerTitle = servicePost?.title || "Service";
  const bodyText = `Discover ${headerTitle.toLowerCase()} with Terra Sardinia — tailored experiences, local insight, and the same attention to detail you expect from a premium travel partner. Whether you are planning a short escape or a longer stay, we help you get the most from your time on the island.`;

  const highlights = useMemo(
    () => [
      `Dedicated support for your ${headerTitle} booking`,
      "Local recommendations and practical tips for your visit",
      "Clear information on availability and what to expect",
      "Options suited to couples, families, and small groups",
      "Easy coordination with the rest of your Sardinia itinerary",
    ],
    [headerTitle],
  );

  const galleryImages = useMemo(() => {
    const base = heroImg ? [heroImg] : [];
    return [...base, ...DEFAULT_GALLERY_IMAGES].slice(0, 8);
  }, [heroImg]);

  const galleryRowPairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < galleryImages.length; i += 2) {
      pairs.push(galleryImages.slice(i, i + 2));
    }
    return pairs;
  }, [galleryImages]);

  const nearbyServices = useMemo(() => {
    const others = Posts.filter((p) => p.id !== parseInt(id, 10));
    const shuffled = [...others].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [id]);

  const openModal = (imageSrc, event) => {
    event.preventDefault();
    setModalImage(imageSrc);
    const index = galleryImages.indexOf(imageSrc);
    setModalIndex(index >= 0 ? index : 0);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const renderGalleryBox = (galleryImage) => (
    <div className="gallery-box style3 staggered-gallery-box">
      <div className="gallery-img global-img">
        <img
          src={galleryImage}
          alt="gallery"
          onClick={(e) => openModal(galleryImage, e)}
        />
        <Link
          to={galleryImage}
          className="icon-btn popup-image"
          onClick={(e) => openModal(galleryImage, e)}
        >
          <i className="fal fa-magnifying-glass-plus" />
        </Link>
      </div>
    </div>
  );

  if (!servicePost) {
    return (
      <section className="space">
        <div className="container">
          <p className="text-center">Service not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="service-img global-img">
                <img src={heroImg} alt={headerTitle} />
              </div>
              <div className="page-content d-block">
                <div
                  className="page-meta mt-50 mb-45 d-flex align-items-center"
                  style={{ gap: "8px" }}
                >
                  <Link className="page-tag mr-5" to={`/${lang}/service`}>
                    Services
                  </Link>
                  <span className="ratting">
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>4.8</span>
                  </span>
                </div>
                <h2 className="box-title">{headerTitle}</h2>
                <p className="blog-text mb-30">{bodyText}</p>
                <div className="service-inner-img mb-40 global-img">
                  <img src={innerImg} alt="" />
                </div>
                <h2 className="box-title">Highlights</h2>
                <div className="checklist">
                  <ul>
                    {highlights.map((line, index) => (
                      <li key={`${line}-${index}`}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="staggered-gallery-wrapper">
                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                {galleryRowPairs.map((pair, rowIndex) => {
                  const rowKey = `svc-gallery-${rowIndex}-${pair[0]}`;
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

              <div className="th-comments-wrap style2 destination-detail-reviews">
                <h2 className="blog-inner-title h4">
                  Reviews ({DEFAULT_REVIEWS.length})
                </h2>
                <ul className="comment-list">
                  {DEFAULT_REVIEWS.map((review, index) => (
                    <li className="th-comment-item" key={`${review.name}-${index}`}>
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img src={review.avatar} alt={review.name} />
                        </div>
                        <div className="comment-content">
                          <h3 className="name">{review.name}</h3>
                          <div className="commented-wrapp">
                            <span className="commented-on">{review.date}</span>
                            <span className="comment-review">
                              {Array.from({ length: review.stars }).map(
                                (_, starIndex) => (
                                  <i
                                    key={`star-${starIndex}`}
                                    className="fa-solid fa-star"
                                  />
                                ),
                              )}
                            </span>
                          </div>
                          <p className="text">{review.text}</p>
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
              <div className="widget widget_categories">
                <h3 className="widget_title">Browse</h3>
                <ul>
                  <li>
                    <Link to={`/${lang}/service`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      All services
                    </Link>
                    <span>({Posts.length})</span>
                  </li>
                </ul>
              </div>
              <div className="widget tour-booking">
                <p className="widget_subtitle">
                  From <span className="widget_price">$75.00</span>
                </p>
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Service</strong>
                      <span>{headerTitle}</span>
                    </li>
                    <li>
                      <strong>Availability</strong>
                      <span>Request dates when you book</span>
                    </li>
                  </ul>
                </div>
                <Link to={`/${lang}/booking`} className="th-btn th-icon">
                  Book Now
                </Link>
                <span className="review">
                  <i className="fa-light fa-heart" /> Recommended for Sardinia
                  travelers
                </span>
              </div>
              <div className="widget">
                <h3 className="widget_title">More services</h3>
                <div className="recent-post-wrap">
                  {nearbyServices.map((item) => (
                    <div className="recent-post" key={item.id}>
                      <div className="media-img">
                        <Link to={`/${lang}/service/${item.id}`}>
                          <img
                            src={`/assets/img/destination/${item.image}`}
                            alt={item.title}
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link
                            className="text-inherit"
                            to={`/${lang}/service/${item.id}`}
                          >
                            {item.title}
                          </Link>
                        </h4>
                        <span className="destination-subtitle">
                          {item.item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  {SERVICE_TAGS.map((keyword) => (
                    <Link key={keyword} to={`/${lang}/service`}>
                      {keyword}
                    </Link>
                  ))}
                </div>
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
                      to={`/${lang}/contact`}
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
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
        images={galleryImages}
        initialIndex={modalIndex}
      />
    </section>
  );
}

export default ServiceDetailsMain;
