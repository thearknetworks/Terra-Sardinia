import React from "react";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import VillaVerdeDetailsMain from "../Components/Resort/VillaVerdeDetailsMain";
import FooterFour from "../Components/Footer/FooterFour";
import ScrollToTop from "../Components/ScrollToTop";

function VillaVerdeDetails() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Villa Verde Details" />
      <VillaVerdeDetailsMain />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

export default VillaVerdeDetails;
