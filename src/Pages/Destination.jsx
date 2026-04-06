import React from "react";
import { useTranslation } from "react-i18next";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationInner from "../Components/Destination/DestinationInner";
import FooterFour from "../Components/Footer/FooterFour";
import ScrollToTop from "../Components/ScrollToTop";

function Destination() {
  const { i18n } = useTranslation();

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Explore the Area"
        bgImage="/assets/img/destination/torre_delle_stelle.jpg"
        breadcrumbItems={[
          { label: "Home", to: `/${i18n.resolvedLanguage || "en"}/home` },
          {
            label: "Destination",
            to: `/${i18n.resolvedLanguage || "en"}/destination`,
          },
        ]}
      />
      <DestinationInner />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

export default Destination;
