import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ServiceListingInner from "../Components/Services/ServiceListingInner";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const SERVICES_BANNER =
  "/assets/img/services/Top%20Banner%20Image%20-%20Services.png";

function Service() {
  const { lang = "en" } = useParams();

  return (
    <div>
      <HeaderOne />
      <Breadcrumb
        title="Services"
        bgImage={SERVICES_BANNER}
        breadcrumbItems={[
          { label: "Home", to: `/${lang}/home` },
          { label: "Services" },
        ]}
      />
      <ServiceListingInner />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Service;
