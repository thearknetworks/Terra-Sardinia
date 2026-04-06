import React from 'react'
import { Link, useParams } from 'react-router-dom'

function DestinationCardTwo(props) {
    const { destinationID, destinationImage, destinationTitle, destinationSubtitle, destinationSlug } = props;
    const { lang } = useParams();
    const destinationPath = `/${lang || "en"}/destination/${destinationSlug || destinationID}`;

    return (
        <div className="tour-box style-flex th-ani destination-page-card">
            <div className="tour-box_img global-img">
                <img src={destinationImage} alt={destinationTitle || "Destination"} />
            </div>
            <div className="tour-content">
                <h3 className="box-title">
                    <Link to={destinationPath}>{destinationTitle ? destinationTitle : 'Dubai'}</Link>
                </h3>
                <span className="destination-subtitle">
                    {destinationSubtitle || "Crystal Waters"}
                </span>
                <div className="tour-action">
                    <span>
                        <i className="fa-light fa-clock" />7 Days
                    </span>
                    <Link to={destinationPath} className="th-btn style4 th-icon">
                        Discover
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DestinationCardTwo
