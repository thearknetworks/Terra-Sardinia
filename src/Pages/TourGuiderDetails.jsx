import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import TourGuiderDetailsMain from "../Components/Guide/TourGuiderDetailsMain";
import TourGuideTwo from "../Components/Guide/TourGuideTwo";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function TourGuiderDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Tour Guide Details" />
      <TourGuiderDetailsMain />
      <TourGuideTwo />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default TourGuiderDetails;
