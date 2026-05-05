import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ActivitiesDetailsMain from "../Components/Activities/ActivitiesDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function ActivitiesDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Activities Details" />
      <ActivitiesDetailsMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ActivitiesDetails;
