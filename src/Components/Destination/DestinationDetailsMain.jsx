import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Posts from "../data/data-destination.json";
import Modal from "../Gallery/Modal";

const NEARBY_DESTINATIONS = [
  {
    slug: "genne-mari",
    title: "Genn’e Mari",
    subtitle: "Crystal Waters",
    image: "/assets/img/destination/genne-mari-cover.png",
  },
  {
    slug: "canne-sisa",
    title: "Cann’e Sisa",
    subtitle: "Quiet Shores",
    image: "/assets/img/destination/canne-sisa-cover.png",
  },
  {
    slug: "porto-giunco",
    title: "Porto Giunco",
    subtitle: "Iconic Beach",
    image: "/assets/img/destination/porto-giunco-cover.png",
  },
  {
    slug: "cala-delfino",
    title: "Cala Delfino",
    subtitle: "Hidden Cove",
    image: "/assets/img/destination/cala-delfino-cover.png",
  },
  {
    slug: "cagliari",
    title: "Cagliari",
    subtitle: "Historic City",
    image: "/assets/img/destination/cagliari-cover.png",
  },
  {
    slug: "saint-remy",
    title: "Saint Remy",
    subtitle: "Historic Bastion",
    image: "/assets/img/destination/saint-remy-cover.png",
  },
  {
    slug: "torre-delle-stelle-tower",
    title: "The Tower",
    subtitle: "Coastal Landmark",
    image: "/assets/img/destination/torre-delle-stelle-tower-cover.png",
  },
  {
    slug: "andycoc",
    title: "Andycoc",
    subtitle: "Beach Dining",
    image: "/assets/img/destination/andycoc-cover.png",
  },
  {
    slug: "aquarium",
    title: "Aquarium",
    subtitle: "Garden Dining",
    image: "/assets/img/destination/aquarium-cover.png",
  },
  {
    slug: "mosaico",
    title: "Mosaico",
    subtitle: "Refined Dining",
    image: "/assets/img/destination/mosaico-cover.png",
  },
  {
    slug: "istellas-club",
    title: "Istellas Club",
    subtitle: "Beach Club",
    image: "/assets/img/destination/istellas-club-cover.png",
  },
  {
    slug: "centro-palmira",
    title: "Palmira",
    subtitle: "Local Hub",
    image: "/assets/img/destination/centro-palmira-cover.png",
  },
  {
    slug: "cafe-do-mar",
    title: "Café do Mar",
    subtitle: "Sunset Spot",
    image: "/assets/img/destination/cafe-do-mar-cover.png",
  },
];

function DestinationDetailsMain() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const { slug, lang } = useParams();
  const numericId = Number(slug);
  const destinationPost = Number.isNaN(numericId)
    ? Posts.find((post) => post.slug === slug) || Posts[0]
    : Posts.find((post) => post.id === numericId) || Posts[0];
  const nearbyDestinations = useMemo(() => {
    const filtered = NEARBY_DESTINATIONS.filter((item) => item.slug !== slug);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [slug]);

  const openModal = (imageSrc, event) => {
    event.preventDefault();
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-lg-7">
            <div className="page-single">
              <div className="service-img">
                <img
                  src={`/assets/img/destination/${destinationPost.bannerImg}`}
                  alt=""
                />
              </div>
              <div className="page-content d-block">
                <div
                  className="page-meta mt-50 mb-45 d-flex align-items-center"
                  style={{ gap: "8px" }}
                >
                  <Link className="page-tag mr-5" to="/tour">
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
                <p className="blog-text mb-30">
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
                <p className="blog-text mb-35">
                  {" "}
                  ‍Whether you work from home or commute to a nearby office, the
                  energy-efficient features of your home contribute to a
                  productive and eco-conscious workday. Smart home systems allow
                  you to monitor and control energy usage, ensuring that your
                  environmental impact remains minimal.
                </p>
                <h2 className="box-title">Basic Information</h2>
                <p className="blog-text mb-35">
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci.
                </p>
                <div className="destination-checklist">
                  <div className="checklist style2">
                    <ul>
                      <li>Destination</li>
                      <li>Visa Requirements</li>
                      <li>Language</li>
                      <li>Currency Used</li>
                      <li>Area (km2)</li>
                      <li>Destination</li>
                      <li>Per Person</li>
                    </ul>
                  </div>
                  <div className="checklist style2">
                    <ul>
                      <li>Netherlands</li>
                      <li>On Arrival Visa</li>
                      <li>English</li>
                      <li>Euro</li>
                      <li>25,859km2</li>
                      <li>25 Tour Places</li>
                      <li>{destinationPost.price}</li>
                    </ul>
                  </div>
                </div>
                <blockquote>
                  <p>
                    Join your neighbors for an eco-friendly social gathering as
                    the day comes to a conclusion. Savor refreshments made with
                    sustainable ingredients and have discussions on sustainable
                    life. By fostering a sense of community.
                  </p>
                  <cite>Michel Clarck</cite>
                </blockquote>
                <p className="blog-text mb-35">
                  Dinning: Prepare a dinner using fresh ingredients from your
                  own garden or the local CSA program. The energy-efficient
                  appliances in your kitchen make cooking a breeze while
                  minimizing your overall energy consumption. Share a meal with
                  neighbors, The quiet night offers a peaceful ambiance,
                  reinforcing the community's commitment to a sustainable,
                  low-impact lifestyle.
                </p>
                <p className="blog-text mb-35">
                  Living sustainably at Realar Residence is more than a choice;
                  it's an immersive experience that shapes every moment of your
                  day. From the moment you wake up in your solar-powered home to
                  the evening gatherings with like-minded neighbors
                </p>
                <h3 className="">
                  The sustainable traveller These 6 hotels epitomise ethical
                  luxury
                </h3>
                <p className="mb-35">
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
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_1.jpg", e)
                          }
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
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_2.jpg", e)
                          }
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
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_3.jpg", e)
                          }
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
                          onClick={(e) =>
                            openModal("/assets/img/gallery/gallery_6_4.jpg", e)
                          }
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
                      </div>
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* Comment end */} {/* Comment Form */}
            </div>
          </div>

          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area style3">
              <div className="widget widget_categories  ">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=beaches`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Beaches
                    </Link>
                    <span>(4)</span>
                  </li>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=landmarks`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Landmarks
                    </Link>
                    <span>(3)</span>
                  </li>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=dining`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Dining
                    </Link>
                    <span>(4)</span>
                  </li>
                  <li>
                    <Link to={`/${lang || "en"}/destination?tag=hubs`}>
                      <img src="/assets/img/theme-img/map.svg" alt="" />
                      Hubs
                    </Link>
                    <span>(2)</span>
                  </li>
                </ul>
              </div>
              <div className="widget  ">
                <h3 className="widget_title">Nearby</h3>
                <div className="recent-post-wrap">
                  {nearbyDestinations.map((item) => (
                    <div className="recent-post" key={item.slug}>
                      <div className="media-img">
                        <Link to={`/${lang || "en"}/destination/${item.slug}`}>
                          <img src={item.image} alt={item.title} />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link
                            className="text-inherit"
                            to={`/${lang || "en"}/destination/${item.slug}`}
                          >
                            {item.title}
                          </Link>
                        </h4>
                        <span className="destination-subtitle">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Tags</h3>
                <div className="tagcloud">
                  <Link to={`/${lang || "en"}/destination?tag=beaches`}>
                    Beaches
                  </Link>
                  <Link to={`/${lang || "en"}/destination?tag=landmarks`}>
                    Landmarks
                  </Link>
                  <Link to={`/${lang || "en"}/destination?tag=dining`}>
                    Dining
                  </Link>
                  <Link to={`/${lang || "en"}/destination?tag=hubs`}>Hubs</Link>
                </div>
              </div>
              <div
                className="widget widget_offer need-help-widget"
                style={{
                  background: "url(/assets/img/destination/need_help.png)",
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
                      to={`/${lang || "en"}/contact`}
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
      />
    </section>
  );
}

export default DestinationDetailsMain;
