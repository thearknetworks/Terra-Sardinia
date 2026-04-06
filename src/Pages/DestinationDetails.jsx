import React from "react";
import { useTranslation } from "react-i18next";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationDetailsMain from "../Components/Destination/DestinationDetailsMain";
import FooterFour from "../Components/Footer/FooterFour";
import ScrollToTop from "../Components/ScrollToTop";

function DestinationDetails() {
  const { i18n } = useTranslation();

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Destination Details"
        bgImage="/assets/img/destination/torre_delle_stelle.jpg"
        breadcrumbItems={[
          { label: "Home", to: `/${i18n.resolvedLanguage || "en"}/home` },
          {
            label: "Destination",
            to: `/${i18n.resolvedLanguage || "en"}/destination`,
          },
          { label: "Destination Details" },
        ]}
      />
      <DestinationDetailsMain />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

export default DestinationDetails;
