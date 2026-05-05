import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import VillaVerdeDetailsMain from "../Components/Resort/VillaVerdeDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function VillaVerdeDetails() {
  const { room_name, lang } = useParams();
  const currentLang = lang || "en";

  const roomBannerBySlug = {
    aquarius: "/assets/img/villaVerde/Aquarius%20Banner%20Image-1.png",
    aries: "/assets/img/villaVerde/Aries%20Banner%20Image-2.png",
    cancer: "/assets/img/villaVerde/Cancer%20Banner%20Image-3.png",
    virgo: "/assets/img/villaVerde/Virgo%20Banner%20Image-4.png",
    sagittarius: "/assets/img/villaVerde/Sagittarius%20Banner%20Image-5.png",
    "la-tavola": "/assets/img/villaVerde/La%20Tavola%20Banner%20Image-6.png",
  };

  const breadcrumbImage =
    roomBannerBySlug[room_name] || "/assets/img/villaVerde/Banner%20Image.png";

  const roomTitleBySlug = {
    aquarius: "Aquarius Room",
    aries: "Aries Room",
    cancer: "Cancer Room",
    virgo: "Virgo Room",
    sagittarius: "Sagittarius Room",
  };
  const isVillaAntares =
    room_name === "antares-villa" || room_name === "villa-antares";
  const pageTitle = isVillaAntares
    ? "Villa Antares"
    : roomTitleBySlug[room_name] || "Villa Verde";
  const breadcrumbItems = [
    { label: "Stays", to: `/${currentLang}/stays` },
    { label: isVillaAntares ? "Villa Antares" : "Villa Verde" },
  ];

  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title={pageTitle}
        bgImage={breadcrumbImage}
        breadcrumbItems={breadcrumbItems}
      />
      <VillaVerdeDetailsMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default VillaVerdeDetails;
