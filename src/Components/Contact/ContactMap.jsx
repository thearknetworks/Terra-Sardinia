import React from "react";

function ContactMap() {
  return (
    <div className="">
      <div className="container-fluid">
        <div className="contact-map style2">
          <iframe
            src="https://www.google.com/maps?ll=39.1508386,9.3990392&z=15&output=embed"
            title="Torre delle Stelle map location"
            allowFullScreen=""
            loading="lazy"
          />
          <div className="contact-icon">
            <img src="/assets/img/icon/location-dot3.svg" alt="Map marker" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;
