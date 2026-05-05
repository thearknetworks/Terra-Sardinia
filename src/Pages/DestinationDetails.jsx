import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationDetailsMain from "../Components/Destination/DestinationDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

const DESTINATION_LABELS = {
  "genne-mari": "Genn’e Mari Beach",
  "canne-sisa": "Cann’e Sisa Beach",
  "porto-giunco": "Porto Giunco Beach",
  "cala-delfino": "Cala Delfino",
  cagliari: "Cagliari",
  "saint-remy": "Bastion of Saint Remy",
  "torre-delle-stelle-tower": "Torre delle Stelle Tower",
  andycoc: "Andycoc on the Beach & the Moor",
  mosaico: "Mosaico",
  "istellas-club": "Istellas Beach Club",
  "centro-palmira": "Centro Palmira",
  aquarium: "Aquarium Restaurant",
  "cafe-do-mar": "Café do Mar",
};

const DESTINATION_BANNER_IMAGES = {
  mosaico: "/assets/img/destination/Mosaico%20-%20Top%20Banner%20Image.png",
  "genne-mari": "/assets/img/destination/Top%20Banner%20Image.png",
  "canne-sisa": "/assets/img/destination/Top%20Banner%20Image-1.png",
  "porto-giunco": "/assets/img/destination/Top%20Banner%20Image-2.png",
  "cala-delfino": "/assets/img/destination/Top%20Banner%20Image-3.png",
  "saint-remy": "/assets/img/destination/Top%20Banner%20Image-4.png",
  cagliari: "/assets/img/destination/Top%20Banner%20Image-5.png",
  "torre-delle-stelle-tower":
    "/assets/img/destination/Top%20Banner%20Image-6.png",
  "istellas-club": "/assets/img/destination/Top%20Banner%20Image-7.png",
  "cafe-do-mar": "/assets/img/destination/Top%20Banner%20Image-8.png",
  "centro-palmira": "/assets/img/destination/Top%20Banner%20Image-9.png",
  aquarium: "/assets/img/destination/Top%20Banner%20Image-10.png",
  andycoc: "/assets/img/destination/Top%20Banner%20Image-11.png",
};

function DestinationDetails() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const destinationName = DESTINATION_LABELS[slug] || "Destination";

  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title={destinationName}
        bgImage={
          DESTINATION_BANNER_IMAGES[slug] ||
          "/assets/img/destination/torre_delle_stelle.jpg"
        }
        breadcrumbItems={[
          {
            label: "Destination",
            to: `/${i18n.resolvedLanguage || "en"}/destination`,
          },
          { label: destinationName },
        ]}
      />
      <DestinationDetailsMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default DestinationDetails;
