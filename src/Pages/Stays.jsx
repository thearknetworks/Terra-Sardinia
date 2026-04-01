import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import FooterOne from "../Components/Footer/FooterOne";

function Stays() {
  return (
    <>
      <HeaderOne />
      <div className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Stays</h1>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <h2>Stays and Accommodations</h2>
          <p>This is the newly created stays page. The content layout will go here.</p>
        </div>
      </section>
      <FooterOne />
    </>
  );
}

export default Stays;
