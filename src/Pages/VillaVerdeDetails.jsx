import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import VillaVerdeDetailsMain from "../Components/Resort/VillaVerdeDetailsMain";
import FooterFour from "../Components/Footer/FooterFour";
import ScrollToTop from "../Components/ScrollToTop";

function VillaVerdeDetails() {
  const { room_name } = useParams();
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

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Villa Verde Details"
        bgImage={breadcrumbImage}
      />
      <VillaVerdeDetailsMain />
      <FooterFour />
      <ScrollToTop />
    </>
  );
}

export default VillaVerdeDetails;
