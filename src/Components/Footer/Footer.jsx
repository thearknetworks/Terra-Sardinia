import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../Gallery/Modal";

function Footer() {
  const { lang = "en" } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const footerGalleryImages = [
    "/assets/img/footer/Footer%20Image-63.png",
    "/assets/img/footer/Footer%20Image-64.png",
    "/assets/img/footer/Footer%20Image-65.png",
    "/assets/img/footer/Footer%20Image-66.png",
    "/assets/img/footer/Footer%20Image-67.png",
    "/assets/img/footer/Footer%20Image-69.png",
  ];
  const [modalIndex, setModalIndex] = useState(0);
  const [requestEmail, setRequestEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (imageSrc, event) => {
    event.preventDefault();
    setModalImage(imageSrc);
    const index = footerGalleryImages.indexOf(imageSrc);
    setModalIndex(index >= 0 ? index : 0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRequestSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitted(false);

    const trimmedEmail = requestEmail.trim();
    if (!validateEmail(trimmedEmail)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setEmailError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/send-terrasardenia-email-footer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: trimmedEmail }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      setIsSubmitted(true);
      setRequestEmail("");
    } catch (error) {
      setSubmitError(
        "We could not send your request right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="footer-wrapper bg-title footer-layout2 shape-mockup-wrap"
      style={{ backgroundColor: "#113D48" }}
    >
      <div className="widget-area">
        <div className="container">
          <div className="newsletter-area">
            <div className="newsletter-top">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                  <h2
                    className="newsletter-title text-white mb-0"
                    style={{ fontSize: "32px", lineHeight: 1.3 }}
                  >
                    Leave your email and we'll personally get in touch to help
                    you plan your stay
                  </h2>
                </div>
                <div className="col-lg-7">
                  <form
                    className="newsletter-form style2"
                    onSubmit={handleRequestSubmit}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      gap: "16px",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <input
                        className="form-control "
                        type="email"
                        value={requestEmail}
                        onChange={(event) => {
                          setRequestEmail(event.target.value);
                          if (emailError) {
                            setEmailError("");
                          }
                        }}
                        placeholder="Enter Email"
                        aria-label="Email address"
                      />
                      <div style={{ minHeight: "24px" }}>
                        {emailError && (
                          <p className="text-danger mt-2 mb-0">{emailError}</p>
                        )}
                        {!emailError && submitError && (
                          <p className="text-danger mt-2 mb-0">{submitError}</p>
                        )}
                        {!emailError && !submitError && isSubmitted && (
                          <p className="text-success mt-2 mb-0">
                            Request sent successfully.
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="th-btn style1"
                      disabled={isSubmitting || !requestEmail.trim()}
                      style={{ minWidth: "210px", alignSelf: "start" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}{" "}
                      <img src="/assets/img/icon/plane2.svg" alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img
                        src="/assets/images/logo/TerraSardiniaWhiteLogo.png"
                        alt="Terra Sardenia"
                      />
                    </Link>
                  </div>
                  <p className="about-text">
                    Salt in the air, warmth in every detail, and moments that
                    unfold at their own perfect pace.
                  </p>

                  <div className="th-social">
                    <Link
                      to="https://www.facebook.com/VillaVerdeSardegna"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                    {/* <Link to="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </Link> */}
                    <Link to="https://wa.me/393924915855" target="_blank">
                      <i className="fab fa-whatsapp" />
                    </Link>
                    {/* <Link to="https://instagram.com/">
                      <i className="fab fa-instagram" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to={`/${lang}/stays`}>Stays</Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/services`}>Services</Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/destination`}>Destination</Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/gallery`}>Gallery</Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/contact`}>Contact</Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/faqs`}>Faqs</Link>
                    </li>
                    <li>
                      <Link to={`/${lang}/services/ferry`}>Ferry</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Get In Touch</h3>

                <div className="th-widget-contact">
                  <div className="info-box_text">
                    <div className="icon">
                      <img src="/assets/img/icon/phone.svg" alt="Phone icon" />
                    </div>

                    <div className="details d-flex align-items-center">
                      <p className="mb-0">
                        <a href="tel:+393924915855" className="info-box_link">
                          +39 3924915855
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/envelope.svg"
                        alt="Envelope icon"
                      />
                    </div>
                    <div className="details d-flex align-items-center">
                      <p>
                        <a
                          href="mailto:villaantares.viapesci65@gmail.com"
                          className="info-box_link"
                        >
                          Villa Antares
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/envelope.svg"
                        alt="Envelope icon"
                      />
                    </div>
                    <div className="details d-flex align-items-center">
                      <p>
                        <a
                          href="mailto:villaverdeguesthouse51@gmail.com"
                          className="info-box_link"
                        >
                          Villa Verde
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/location-dot.svg"
                        alt="Location icon"
                      />
                    </div>
                    <div className="details">
                      <p>
                        <a
                          href="https://maps.app.goo.gl/r19TGvnjhd1ZYzP7A"
                          className="info-box_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Villa Verde, Via dell'acquario 51, Torre delle Stelle
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img
                        src="/assets/img/icon/location-dot.svg"
                        alt="Location icon"
                      />
                    </div>
                    <div className="details">
                      <p>
                        <a
                          href="https://maps.app.goo.gl/AtnRLm71X88EKWtJ6"
                          className="info-box_link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Villa Antares, Via dei Pesci 65, Torre delle Stelle
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">From Sardenia with Love</h3>
                <div className="sidebar-gallery">
                  {[...footerGalleryImages].map((imageSrc) => (
                    <div className="gallery-thumb" key={imageSrc}>
                      <img
                        src={imageSrc}
                        alt="Sardenia gallery"
                        onClick={(e) => openModal(imageSrc, e)}
                      />
                      <Link
                        to={imageSrc}
                        className="gallery-btn popup-image"
                        onClick={(e) => openModal(imageSrc, e)}
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright 2026 Terra Sardenia. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-card">
                <span className="title">We Accept</span>
                <div className="footer-card-logos">
                  <img
                    src="/assets/img/shape/bonifico-card.png"
                    alt="Bonifico"
                  />
                  <img
                    src="/assets/img/shape/mastercard-card.png"
                    alt="Mastercard"
                  />
                  <img src="/assets/img/shape/visa-card.png" alt="Visa" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup movingX d-none d-xxl-block"
        style={{ top: "24%", left: "5%" }}
      >
        <img
          src="/assets/images/Elements/White color/Starfish.png"
          alt="shape"
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={modalImage}
        images={footerGalleryImages}
        initialIndex={modalIndex}
      />
    </footer>
  );
}

export default Footer;
