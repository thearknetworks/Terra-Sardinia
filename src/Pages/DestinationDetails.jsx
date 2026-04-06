import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationDetailsMain from "../Components/Destination/DestinationDetailsMain";
import FooterFour from "../Components/Footer/FooterFour";
import ScrollToTop from "../Components/ScrollToTop";

const DESTINATION_LABELS = {
  "genne-mari": "Genn’e Mari",
  "canne-sisa": "Cann’e Sisa",
  "porto-giunco": "Porto Giunco",
  "cala-delfino": "Cala Delfino",
  cagliari: "Cagliari",
  "saint-remy": "Saint Remy",
  "torre-delle-stelle-tower": "The Tower",
  andycoc: "Andycoc",
  aquarium: "Aquarium",
  mosaico: "Mosaico",
  "istellas-club": "Istellas Club",
  "centro-palmira": "Palmira",
  "cafe-do-mar": "Café do Mar",
};

function DestinationDetails() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const destinationName = DESTINATION_LABELS[slug] || "Destination";

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title={destinationName}
        bgImage="/assets/img/destination/torre_delle_stelle.jpg"
        breadcrumbItems={[
          {
            label: "Destination",
            to: `/${i18n.resolvedLanguage || "en"}/destination`,
          },
          { label: destinationName },
        ]}
      />
      <DestinationDetailsMain />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

export default DestinationDetails;
