import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import VillaAntaresMain from "../Components/Resort/VillaAntaresMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function VillaAntares() {
  const { lang } = useParams();
  const currentLang = lang || "en";
  const breadcrumbItems = [
    { label: "Stays", to: `/${currentLang}/stays` },
    { label: "Villa Antares" },
  ];

  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title="Villa Antares"
        bgImage="/assets/img/villaAntres/Antares%20Banner%20Image.png"
        breadcrumbItems={breadcrumbItems}
      />
      <VillaAntaresMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default VillaAntares;
