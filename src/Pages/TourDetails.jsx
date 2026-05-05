import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import TourDetailsMain from "../Components/Tour/TourDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function TourDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Tour Details" />
      <TourDetailsMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TourDetails;
