import React from "react";
import { Link } from "react-router-dom";

function DestinationListCard(props) {
  const {
    destinationID,
    destinationImage,
    destinationTitle,
    destinationSubtitle,
    detailsBasePath = "/destination",
    buttonLabel = "Discover",
    buttonTo = "details",
  } = props;

  const imageSrc = destinationImage?.startsWith("/")
    ? destinationImage
    : `/assets/img/destination/${destinationImage}`;
  const detailsPath = `${detailsBasePath}/${destinationID}`;
  const ctaPath = buttonTo === "details" ? detailsPath : buttonTo;

  return (
    <div className="destination-item th-ani">
      <div className="destination-item_img global-img">
        <img src={imageSrc} alt={destinationTitle || "Destination"} />
      </div>
      <div className="destination-content">
        <h3 className="box-title">
          <Link to={detailsPath}>{destinationTitle || "Destination"}</Link>
        </h3>
        <p className="destination-text">{destinationSubtitle || "Explore"}</p>
        <Link to={ctaPath} className="th-btn style4 th-icon">
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}

export default DestinationListCard;
