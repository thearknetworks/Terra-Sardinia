import React from 'react'
import { Link } from 'react-router-dom';

function ServiceCard(props) {
    const { serviceID, serviceImage, serviceTitle, serviceItem } = props;
    return (
            <Link to={`/service/${serviceID}`} className="destination-item th-ani clickable-card">
                <div className="destination-item_img global-img">
                    <img src={`/assets/img/destination/${serviceImage}`} alt="" />
                </div>
                <div className="destination-content">
                    <h3 className="box-title">
                        {serviceTitle ? serviceTitle : 'Photo Shoot'}
                    </h3>
                    <p className="destination-text">{serviceItem ? serviceItem : '20 Listing'}</p>
                    <span className="th-btn style4 th-icon">Book Now</span>
                </div>
            </Link>
    )
}

export default ServiceCard
