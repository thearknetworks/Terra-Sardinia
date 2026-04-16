import React from "react";
import { Link, useParams } from "react-router-dom";

const suites = [
  {
    id: "master-suite",
    image: "/assets/img/destination/Image%201%20Destination%20Detail.png",
    title: "Master Suite",
    subtext:
      "Template copy. A spacious suite concept designed for comfort, light, and privacy.",
    capacity: "Up to 2 Persons",
    size: "30 m²",
    bed: "King Bed",
    amenities: "Sea View, TV, Wifi, AC...",
  },
  {
    id: "sea-view-suite",
    image: "/assets/img/destination/Image%202%20Destination%20Detail-2.png",
    title: "Sea View Suite",
    subtext:
      "Template copy. A bright suite with an open feel and a view that frames the coastline.",
    capacity: "Up to 3 Persons",
    size: "28 m²",
    bed: "King Bed, Sofa Bed",
    amenities: "Sea View, TV, Wifi, AC...",
  },
  {
    id: "garden-room",
    image: "/assets/img/destination/Gallery%201%20Destination%20Detail.png",
    title: "Garden Room",
    subtext:
      "Template copy. A grounded room with calm tones and an easy connection to the outdoors.",
    capacity: "Up to 2 Persons",
    size: "22 m²",
    bed: "Queen Bed",
    amenities: "Garden View, TV, Wifi, AC...",
  },
  {
    id: "terrace-room",
    image: "/assets/img/destination/Gallery%202%20Destination%20Detail.png",
    title: "Terrace Room",
    subtext:
      "Template copy. A relaxed space with an outdoor terrace feel, ideal for slow mornings.",
    capacity: "Up to 2 Persons",
    size: "24 m²",
    bed: "Queen Bed",
    amenities: "Terrace, TV, Wifi, AC...",
  },
];

function VillaAntaresInner() {
  const { lang } = useParams();
  const currentLang = lang || "en";

  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center pe-xl-4 ps-xl-4">
              <span className="sub-title">Villa Antares</span>
              <h2 className="sec-title mb-20">Rooms & Suites</h2>
              <p className="sec-text">
                Template copy. This page mirrors the Villa Verde rooms layout
                and will be updated with Villa Antares content and imagery next.
              </p>
            </div>
          </div>
        </div>

        {suites.map((suite, index) => (
          <div
            className="row gx-60 gy-30 mb-60 align-items-center"
            key={suite.id}
          >
            <div className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-4" : ""}`}>
              <div className="resort-image global-img">
                <img src={suite.image} alt={suite.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="resort-content">
                <h3 className="box-title">
                  <Link to={`/${currentLang}/contact`}>{suite.title}</Link>
                </h3>
                <p className="resort-text">{suite.subtext}</p>
                <div className="resort-list">
                  <ul>
                    <li>
                      <span className="title">Capacity:</span> {suite.capacity}
                    </li>
                    <li>
                      <span className="title">Size:</span> {suite.size}
                    </li>
                    <li>
                      <span className="title">Bed:</span> {suite.bed}
                    </li>
                    <li>
                      <span className="title">Amenities:</span>{" "}
                      {suite.amenities}
                    </li>
                  </ul>
                </div>
                <div className="resort-btn mt-40">
                  <Link
                    to={`/${currentLang}/contact`}
                    className="th-btn style4 th-icon"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VillaAntaresInner;
