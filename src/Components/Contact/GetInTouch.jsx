import React from "react";

function GetInTouch() {
  return (
    <div className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Get In Touch</span>
          <h2 className="sec-title">Our Contact Information</h2>
        </div>

        <div className="row gy-4 justify-content-center">
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid style2">
              <div className="about-contact-icon">
                <img src="/assets/img/icon/location-dot2.svg" alt="" />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title">Our Address</h6>
                <p className="about-contact-details-text">
                  <a
                    href="https://maps.app.goo.gl/r19TGvnjhd1ZYzP7A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Villa Verde, Via dell'acquario 51, Torre delle Stelle
                  </a>
                </p>
                <p className="about-contact-details-text">
                  <a
                    href="https://maps.app.goo.gl/AtnRLm71X88EKWtJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Villa Antares, Via dei Pesci 65, Torre delle Stelle
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
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
          <div className="col-xl-4 col-lg-6">
            <div className="about-contact-grid">
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
                    Villa Verde
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
