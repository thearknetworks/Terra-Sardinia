import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import VillaAntaresMain from "../Components/Resort/VillaAntaresMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";

function VillaAntares() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Villa Antares"
        bgImage="/assets/img/destination/Top%20Banner%20Image.png"
      />
      <VillaAntaresMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default VillaAntares;

