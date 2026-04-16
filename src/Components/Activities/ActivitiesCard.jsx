import React from 'react'
import { Link } from 'react-router-dom';

function ActivitiesCard(props) {
    const { activitiesID, activitiesImage, activitiesTitle, activitiesPrice } = props;
    return (
        <>
            <Link to="/activities-details" className="tour-box th-ani clickable-card">
                <div className="tour-box_img global-img">
                    <img src={`/assets/img/tour/${activitiesImage}`} alt="" />
                </div>
                <div className="tour-content">
                    <h3 className="box-title">
                        {activitiesTitle ? activitiesTitle : 'Paragliding'}
                    </h3>
                    <div className="tour-rating">
                        <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                        >
                            <span style={{ width: "100%" }}>
                                Rated
                                <strong className="rating">5.00</strong> out of 5 based on{" "}
                                <span className="rating">4.8</span>(4.8 Rating)
                            </span>
                        </div>
                        <span className="woocommerce-review-link">
                            (<span className="count">4.8</span>
                            Rating)
                        </span>
                    </div>
                    <h4 className="tour-box_price">
                        <span className="currency">{activitiesPrice ? activitiesPrice : '$980.00'}$980.00</span>/Person
                    </h4>
                    <div className="tour-action">
                        <span>
                            <i className="fa-light fa-clock" />7 Days
                        </span>
                        <span className="th-btn style4">Detail View</span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ActivitiesCard
