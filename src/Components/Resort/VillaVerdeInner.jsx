import React from "react";
import { Link } from "react-router-dom";

const resorts = [
  {
    id: "aquarius",
    image: "/assets/img/villaVerde/Aquarius.png",
    title: "Aquarius Room",
    subtext:
      "Unconventional and free-flowing, a space shaped by light, openness, and quiet individuality.",
    capacity: "Up to 2 Persons",
    size: "20 m²",
    bed: "King Bed",
    amenities: "Pool View, TV, Wifi, AC...",
  },

  {
    id: "aries",
    image: "/assets/img/villaVerde/Aries.png",
    title: "Aries Room",
    subtext:
      "Bold yet grounded, a warm retreat that carries a natural sense of energy and ease.",
    capacity: "Up to 2 Persons",
    size: "21 m²",
    bed: "King Bed",
    amenities: "Pool View, TV, Wifi, AC...",
  },

  {
    id: "cancer",
    image: "/assets/img/villaVerde/Cancer.png",
    title: "Cancer Room",
    subtext:
      "Gentle and nurturing, a comforting haven designed to slow everything down.",
    capacity: "Up to 2 Persons",
    size: "15 m²",
    bed: "King Bed",
    amenities: "Garden View, TV, Wifi, AC...",
  },

  {
    id: "virgo",
    image: "/assets/img/villaVerde/Virgo.png",
    title: "Virgo Room",
    subtext:
      "Precise and refined, where every detail feels intentional, calm, and perfectly balanced.",
    capacity: "Up to 3 Persons",
    size: "17 m²",
    bed: "King Bed, Single Bed",
    amenities: "Garden View, TV, Wifi, AC...",
  },

  {
    id: "sagittarius",
    image: "/assets/img/villaVerde/Sagittarius.png",
    title: "Sagittarius Room",
    subtext:
      "Expansive and untethered, a space that reflects freedom, movement, and effortless living.",
    capacity: "Up to 3 Persons",
    size: "20 m²",
    bed: "King Bed, Sofa Bed",
    amenities: "Garden View, TV, Wifi, AC...",
  },
];

const kitchenListing = {
  id: "la-tavola",
  image: "/assets/img/villaVerde/La%20Tavola.png",
  title: "La Tavola",
  subtext:
    "A shared table where simple, authentic Sardinian dishes are prepared and enjoyed together.",
  format: "Shared Dining Experience",
  cuisine: "Sardinian · Seasonal · Local",
  service: "Breakfast & Dinner by Reservation",
  experience: "Fresh, home-style cooking with local ingredients",
};

function VillaVerdeInner() {
  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center pe-xl-4 ps-xl-4">
              <span className="sub-title">A Collection of Character</span>
              <h2 className="sec-title mb-20">Spaces Shaped by the Zodiac</h2>
              <p className="sec-text">
                Every space within Villa Verde carries its own identity, drawing
                inspiration from the zodiac to create spaces that feel personal,
                balanced, and quietly expressive. Defined by light, texture, and
                atmosphere, every stay offers a refined sense of comfort,
                allowing you to settle in, slow down, and experience the villa
                through a space that resonates with you.
              </p>
            </div>
          </div>
        </div>

        {resorts.map((resort, index) => (
          <div
            className="row gx-60 gy-30 mb-60 align-items-center"
            key={resort.id}
          >
            <div className={`col-lg-6 ${index % 2 !== 0 ? "order-lg-4" : ""}`}>
              <div className="resort-image global-img">
                <img src={resort.image} alt={resort.title} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="resort-content">
                <h3 className="box-title">
                  <Link to={`/villa-verde/${resort.id}`}>{resort.title}</Link>
                </h3>
                <p className="resort-text">{resort.subtext}</p>
                <div className="resort-list">
                  <ul>
                    <li>
                      <span className="title">Capacity:</span> {resort.capacity}
                    </li>
                    <li>
                      <span className="title">Size:</span> {resort.size}
                    </li>
                    <li>
                      <span className="title">Bed:</span> {resort.bed}
                    </li>
                    <li>
                      <span className="title">Amenities:</span>{" "}
                      {resort.amenities}
                    </li>
                  </ul>
                </div>
                <div className="resort-btn mt-40">
                  <Link
                    to={`/villa-verde/${resort.id}`}
                    className="th-btn style4 th-icon"
                  >
                    View Room
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="row gx-60 gy-30 mb-60 align-items-center">
          <div className="col-lg-6 order-lg-4">
            <div className="resort-image global-img">
              <img src={kitchenListing.image} alt={kitchenListing.title} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="resort-content">
              <h3 className="box-title">
                <Link to={`/villa-verde/${kitchenListing.id}`}>
                  {kitchenListing.title}
                </Link>
              </h3>
              <p className="resort-text">{kitchenListing.subtext}</p>
              <div className="resort-list">
                <ul>
                  <li>
                    <span className="title">Format:</span>{" "}
                    {kitchenListing.format}
                  </li>
                  <li>
                    <span className="title">Cuisine:</span>{" "}
                    {kitchenListing.cuisine}
                  </li>
                  <li>
                    <span className="title">Service:</span>{" "}
                    {kitchenListing.service}
                  </li>
                  <li>
                    <span className="title">Experience:</span>{" "}
                    {kitchenListing.experience}
                  </li>
                </ul>
              </div>
              <div className="resort-btn mt-40">
                <Link
                  to={`/villa-verde/${kitchenListing.id}`}
                  className="th-btn style4 th-icon"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VillaVerdeInner;
