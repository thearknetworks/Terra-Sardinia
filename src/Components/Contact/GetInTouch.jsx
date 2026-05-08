import React from "react";

function GetInTouch() {
  return (
    <div className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">We’re Here for You</span>
          <h2 className="sec-title">Create a Stay to Remember</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="about-contact-grid style2 h-100">
              <div className="about-contact-icon">
                <img src="/assets/img/icon/location-dot2.svg" alt="" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Our Addresses</h6>
                <p className="about-contact-details-text">
                  <a
                    href="https://maps.app.goo.gl/r19TGvnjhd1ZYzP7A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guesthouse Villa Verde
                  </a>
                </p>
                <p className="about-contact-details-text">
                  <a
                    href="https://maps.app.goo.gl/AtnRLm71X88EKWtJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Villa Antares
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="about-contact-grid h-100">
              <div className="about-contact-icon">
                <img src="/assets/img/icon/call.svg" alt="" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Phone Number</h6>
                <p className="about-contact-details-text">
                  <a href="tel:+393924915855">+39 3924915855</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about-contact-grid h-100">
              <div className="about-contact-icon d-flex align-items-center justify-content-center">
                <i
                  className="fab fa-whatsapp text-white"
                  style={{
                    fontSize: "2rem",
                    fontWeight: "300",
                  }}
                ></i>
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">WhatsApp</h6>
                <p className="about-contact-details-text">
                  <a
                    href="https://wa.me/393924915855"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +39 3924915855
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about-contact-grid h-100">
              <div className="about-contact-icon">
                <img src="/assets/img/icon/mail.svg" alt="" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Email Address</h6>
                <p className="about-contact-details-text">
                  <a href="mailto:villaantares.viapesci65@gmail.com">
                    Villa Antares
                  </a>
                </p>
                <p className="about-contact-details-text">
                  <a href="mailto:villaverdeguesthouse51@gmail.com">
                    Guesthouse Villa Verde
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
