import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../Gallery/Modal";
import "../Destination/staggeredGallery.css";
import {
  DEFAULT_VILLA_VERDE_SLUG,
  roomContentBySlug,
  roomMediaBySlug,
  villaVerdeReviews,
  villaVerdeSidebarItems,
} from "./villaVerdeDetailsData";

const REVIEW_AVATAR_STYLE = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
};

function VillaVerdeDetailsInner() {
  const { room_name, lang } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const currentLang = lang || "en";

  const selectedRoomMedia =
    roomMediaBySlug[room_name] || roomMediaBySlug[DEFAULT_VILLA_VERDE_SLUG];
  const selectedRoomContent =
    roomContentBySlug[room_name] || roomContentBySlug[DEFAULT_VILLA_VERDE_SLUG];
  const galleryRowPairs = useMemo(() => {
    const galleryImages = selectedRoomMedia.gallery.slice(0, 4);
    const pairs = [];
    for (let i = 0; i < galleryImages.length; i += 2) {
      pairs.push(galleryImages.slice(i, i + 2));
    }
    return pairs;
  }, [selectedRoomMedia.gallery]);

  const openModal = (imageSrc) => (e) => {
    e.preventDefault();
    setModalImage(imageSrc);
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
                <img src={selectedRoomMedia.topImage} alt="" />
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
                        <div className="col-12 col-lg-5 filter-item">
                          <div className="staggered-gallery-item h-100">
                            {renderGalleryBox(imgA)}
                          </div>
                        </div>
                        <div className="col-12 col-lg-7 filter-item">
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
                      <div className="col-12 col-lg-7 filter-item">
                        <div className="staggered-gallery-item h-100">
                          {renderGalleryBox(imgB)}
                        </div>
                      </div>
                      <div className="col-12 col-lg-5 filter-item">
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
                  Reviews ({villaVerdeReviews.length})
                </h2>
                <ul className="comment-list">
                  {villaVerdeReviews.map((review) => (
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
              <div className="widget  ">
                <h3 className="widget_title">Villa Verde</h3>
                <div className="recent-post-wrap">
                  {villaVerdeSidebarItems.map((item) => (
                    <div className="recent-post" key={item.slug}>
                      <div className="media-img">
                        <Link to={`/${currentLang}/villa-verde/${item.slug}`}>
                          <img src={item.thumb} alt={item.title} />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link
                            className="text-inherit"
                            to={`/${currentLang}/villa-verde/${item.slug}`}
                          >
                            {item.title}
                          </Link>
                        </h4>
                        <div className="recent-post-meta">
                          <span>{item.meta}</span>
                        </div>
                      </div>
                    </div>
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
      />
    </section>
  );
}

export default VillaVerdeDetailsInner;
