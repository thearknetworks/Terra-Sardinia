import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import VillaVerdeMain from "../Components/Resort/VillaVerdeMain";
import FooterFour from "../Components/Footer/FooterFour";
import ScrollToTop from "../Components/ScrollToTop";

function VillaVerde() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Villa Verde" />
      <VillaVerdeMain />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

export default VillaVerde;
