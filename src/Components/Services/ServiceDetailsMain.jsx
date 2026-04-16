import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Posts from "../data/data-service.json";
import Modal from "../Gallery/Modal";

function ServiceDetailsMain() {
  const { id, lang = "en" } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalIndex, setModalIndex] = useState(0);
  const galleryImages = [
    "/assets/img/gallery/gallery_6_1.jpg",
    "/assets/img/gallery/gallery_6_2.jpg",
    "/assets/img/gallery/gallery_6_3.jpg",
    "/assets/img/gallery/gallery_6_4.jpg",
  ];

  const servicePost = Posts.find((post) => post.id === parseInt(id));

  if (!servicePost) {
    return <div>Post not found!</div>;
  }

  // Function to open the modal with the selected image
  const openModal = (imageSrc, event) => {
    event.preventDefault(); // Prevent default link behavior
    setModalImage(imageSrc);
    const index = galleryImages.indexOf(imageSrc);
    setModalIndex(index >= 0 ? index : 0);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="space">
      <div className="container shape-mockup-wrap">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="service-img">
                <img
                  src={`/assets/img/destination/${servicePost.bannerImg}`}
                  alt=""
                />
              </div>
              <div className="page-content d-block">
                <div className="page-meta mt-50 mb-45">
                  <Link className="page-tag" to={`/${lang}/tour`}>
                    Featured
                  </Link>
                  <span className="ratting">
                    <i className="fa-sharp fa-solid fa-star" />
                    <span>4.8</span>
                  </span>
                </div>
                <h2 className="box-title">
                  Explore the Beauty of Maldives and enjoy
                </h2>
                <p className="box-text mb-30">
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur Quis autem vel eum iure reprehenderit
                  qui in ea voluptate velit esse quam nihil molestiae
                  consequatur, vel illum qui dolorem eum fugiat quo voluptas
                  nulla pariatur
                </p>
                <p className="box-text mb-50">
                  {" "}
                  ‍Whether you work from home or commute to a nearby office, the
                  energy-efficient features of your home contribute to a
                  productive and eco-conscious workday. Smart home systems allow
                  you to monitor and control energy usage, ensuring that your
                  environmental impact remains minimal.
                </p>
                <div className="service-inner-img mb-40">
                  <img
                    src="/assets/img/destination/destination-inner-1.jpg"
                    alt=""
                  />
                </div>
                <h2 className="box-title">Highlights</h2>
                <div className="checklist">
                  <ul>
                    <li>Visit most popular location of Maldives</li>
                    <li>
                      Buffet Breakfast for all traveler with good quality.
                    </li>
                    <li>
                      Expert guide always guide you and give informations.
                    </li>
                    <li>Best Hotel for all also great food.</li>
                    <li>Helping all traveler for Money Exchange.</li>
                    <li>
                      Buffet Breakfast for all traveler with good quality..
                    </li>
                    <li>
                      Buffet Breakfast for all traveler with good quality.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="destination-gallery-wrapper">
                <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                <div className="row gy-4 gallery-row filter-active">
                  <div className="col-xxl-auto filter-item">
                    <div className="gallery-box style3">
                      <div className="gallery-img global-img">
                        <img
                          src="/assets/img/gallery/gallery_6_1.jpg"
                          alt="gallery"
                        />
                        <Link
                          to="/assets/img/gallery/gallery_6_1.jpg"
                          className="icon-btn popup-image"
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_1.jpg", e)
                          }
                        >
                          <i className="fal fa-magnifying-glass-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-auto filter-item">
                    <div className="gallery-box style3">
                      <div className="gallery-img global-img">
                        <img
                          src="/assets/img/gallery/gallery_6_2.jpg"
                          alt="gallery"
                        />
                        <Link
                          to="/assets/img/gallery/gallery_6_2.jpg"
                          className="icon-btn popup-image"
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_2.jpg", e)
                          }
                        >
                          <i className="fal fa-magnifying-glass-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-auto filter-item">
                    <div className="gallery-box style3">
                      <div className="gallery-img global-img">
                        <img
                          src="/assets/img/gallery/gallery_6_3.jpg"
                          alt="gallery"
                        />
                        <Link
                          to="/assets/img/gallery/gallery_6_3.jpg"
                          className="icon-btn popup-image"
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_3.jpg", e)
                          }
                        >
                          <i className="fal fa-magnifying-glass-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-auto filter-item">
                    <div className="gallery-box style3">
                      <div className="gallery-img global-img">
                        <img
                          src="/assets/img/gallery/gallery_6_4.jpg"
                          alt="gallery"
                        />
                        <Link
                          to="/assets/img/gallery/gallery_6_4.jpg"
                          className="icon-btn popup-image"
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_4.jpg", e)
                          }
                        >
                          <i className="fal fa-magnifying-glass-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="th-comments-wrap style2 ">
                <h2 className="blog-inner-title h4">Reviews (3)</h2>
                <ul className="comment-list">
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/assets/img/blog/comment-author-1.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <h3 className="name">Adam Jhon</h3>
                        <div className="commented-wrapp">
                          <span className="commented-on">20 Jun, 2024</span>
                          <span className="commented-time">08:56pm </span>
                          <span className="comment-review">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                          </span>
                        </div>
                        <p className="text">
                          Credibly pontificate transparent quality vectors with
                          quality mindshare. Efficiently architect worldwide
                          strategic theme areas after user.
                        </p>
                        <div className="reply_and_edit">
                          <i className="fa-solid fa-thumbs-up" />
                        </div>
                      </div>
                    </div>
                    <ul className="children">
                      <li className="th-comment-item">
                        <div className="th-post-comment">
                          <div className="comment-avater">
                            <img
                              src="/assets/img/blog/comment-author-4.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <div className="">
                              <h3 className="name">Maria Willson</h3>
                              <div className="commented-wrapp">
                                <span className="commented-on">
                                  23 Jun, 2024
                                </span>
                                <span className="commented-time">08:56pm </span>
                                <span className="comment-review">
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                  <i className="fa-solid fa-star" />
                                </span>
                              </div>
                            </div>
                            <p className="text">
                              It is different from airport transfer or port
                              transfer, which are services that pick you up
                            </p>
                            <div className="reply_and_edit">
                              <i className="fa-solid fa-thumbs-up" />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="th-comment-item">
                    <div className="th-post-comment">
                      <div className="comment-avater">
                        <img
                          src="/assets/img/blog/comment-author-5.jpg"
                          alt="Comment Author"
                        />
                      </div>
                      <div className="comment-content">
                        <div className="">
                          <h3 className="name">Michel Edwards</h3>
                          <div className="commented-wrapp">
                            <span className="commented-on">27 Jun, 2024</span>
                            <span className="commented-time">08:56pm </span>
                            <span className="comment-review">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </span>
                          </div>
                        </div>
                        <p className="text">
                          Credibly pontificate transparent quality vectors with
                          quality mindshare. Efficiently architect worldwide
                          strategic theme areas after user.
                        </p>
                        <div className="reply_and_edit">
                          <i className="fa-solid fa-thumbs-up" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* Comment end */}
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              <div className="widget tour-booking  ">
                <p className="widget_subtitle">
                  From <span className="widget_price">$75.00</span>
                </p>
                <div className="info-list">
                  <ul>
                    <li>
                      <strong>Date </strong>
                      <span>sun 15 June - Fri 20 July</span>
                    </li>
                    <li>
                      <strong>Number of travelers</strong>
                      <span>2 adults - 1 childeren - 1 room</span>
                    </li>
                  </ul>
                </div>
                <Link to={`/${lang}/booking`} className="th-btn th-icon">
                  Book Now
                </Link>
                <span className="review">
                  <i className="fa-light fa-heart" /> 88% of travelers recommend
                  this experience
                </span>
              </div>
              <div className="widget  ">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${lang}/blog/1`}>
                        <img
                          src="/assets/img/blog/recent-post-1-1.jpg"
                          alt="Blog"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to={`/${lang}/blog/1`}>
                          Exploring The Green Spaces Of the island maldives
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to={`/${lang}/blog`}>
                          <i className="fa-regular fa-calendar" />
                          22/6/ 2025
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${lang}/blog/1`}>
                        <img
                          src="/assets/img/blog/recent-post-1-2.jpg"
                          alt="Blog"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to={`/${lang}/blog/1`}>
                          Harmony With Nature Of Belgium Tour and travle
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to={`/${lang}/blog`}>
                          <i className="fa-regular fa-calendar" />
                          25/6/ 2025
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <Link to={`/${lang}/blog/1`}>
                        <img
                          src="/assets/img/blog/recent-post-1-3.jpg"
                          alt="Blog"
                        />
                      </Link>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <Link className="text-inherit" to={`/${lang}/blog/1`}>
                          Exploring The Green Spaces Of Realar Residence
                        </Link>
                      </h4>
                      <div className="recent-post-meta">
                        <Link to={`/${lang}/blog`}>
                          <i className="fa-regular fa-calendar" />
                          27/6/ 2025
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget widget_tag_cloud  ">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                  <Link to={`/${lang}/blog`}>Tour</Link>
                  <Link to={`/${lang}/blog`}>Adventure</Link>
                  <Link to={`/${lang}/blog`}>Rent</Link>
                  <Link to={`/${lang}/blog`}>Innovate</Link>
                  <Link to={`/${lang}/blog`}>Hotel</Link>
                  <Link to={`/${lang}/blog`}>Modern</Link>
                  <Link to={`/${lang}/blog`}>Luxury</Link>
                  <Link to={`/${lang}/blog`}>Travel</Link>
                </div>
              </div>
              <div
                className="widget widget_offer"
                style={{
                  background: `linear-gradient(#111d487b, #111d487b), url(/assets/img/bg/widget_bg_1.jpg)`,
                }}
                data-bg-src="/assets/img/bg/widget_bg_1.jpg"
              >
                <div className="offer-banner">
                  <div className="offer">
                    <h6 className="box-title">
                      Need Help? We Are Here To Help You
                    </h6>
                    <div className="banner-logo">
                      <img src="/assets/img/logo2.svg" alt="Tourm" />
                    </div>
                    <div className="offer">
                      <h6 className="offer-title">You Get Online support</h6>
                      <a className="offter-num" href="tel:+256214203215">
                        +256 214 203 215
                      </a>
                    </div>
                    <Link to={`/${lang}/contact`} className="th-btn style2 th-icon">
                      Read More
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
        images={galleryImages}
        initialIndex={modalIndex}
      />
    </section>
  );
}

export default ServiceDetailsMain;
