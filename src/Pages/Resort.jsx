import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ResortInner from "../Components/Resort/ResortInner";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Resort() {
  return (
    <>
      <HeaderThree />
      <Breadcrumb title="Resort" />
      <ResortInner />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Resort;
