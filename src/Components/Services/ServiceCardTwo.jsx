import React from "react";
import { Link, useParams } from "react-router-dom";

function ServiceCardTwo(props) {
  const { serviceSlug, serviceImage, serviceTitle, serviceItem } = props;
  const { lang = "en" } = useParams();
  const imgSrc = serviceImage.startsWith("/")
    ? serviceImage
    : `/assets/img/destination/${serviceImage}`;

  return (
    <Link
      to={`/${lang}/services/${serviceSlug}`}
      className="tour-box style-flex th-ani destination-page-card clickable-card"
    >
      <div className="tour-box_img global-img">
        <img src={imgSrc} alt={serviceTitle || "Service"} />
      </div>
      <div className="tour-content">
        <h3 className="box-title">
          {serviceTitle ? serviceTitle : "Service"}
        </h3>
        <span className="destination-subtitle">
          {serviceItem || "Listing"}
        </span>
        <div className="tour-action">
          <span>
            <i className="fa-light fa-clock" />
            View details
          </span>
          <span className="th-btn style4 th-icon">Book Now</span>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCardTwo;
