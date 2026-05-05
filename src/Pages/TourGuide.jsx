import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import TourGuideInner from "../Components/Guide/TourGuideInner";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function TourGuide() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Tour Guide" />
      <TourGuideInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TourGuide;
