import React from "react";
import { Link, useParams } from "react-router-dom";

function ServiceCard(props) {
  const { serviceSlug, serviceImage, serviceTitle, serviceItem } = props;
  const { lang = "en" } = useParams();
  const imgSrc =
    serviceImage && serviceImage.startsWith("/")
      ? serviceImage
      : `/assets/img/destination/${serviceImage}`;
  return (
    <Link
      to={`/${lang}/services/${serviceSlug}`}
      className="destination-item th-ani clickable-card"
    >
      <div className="destination-item_img global-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="destination-content">
        <h3 className="box-title">
          {serviceTitle ? serviceTitle : "Photo Shoot"}
        </h3>
        <p className="destination-text">
          {serviceItem ? serviceItem : "20 Listing"}
        </p>
        <span className="th-btn style4 th-icon">Learn More</span>
      </div>
    </Link>
  );
}

export default ServiceCard;
