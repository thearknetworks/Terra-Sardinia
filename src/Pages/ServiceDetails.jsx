import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ServiceDetailsMain from "../Components/Services/ServiceDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import services from "../Components/data/data-service.json";

const DEFAULT_SERVICE_BANNER =
  "/assets/img/services/Top%20Banner%20Image%20-%20Services.png";

function findService(slug, id) {
  if (slug) {
    return services.find((s) => s.slug === slug);
  }
  if (id != null && id !== "") {
    const n = parseInt(id, 10);
    if (!Number.isNaN(n)) {
      return services.find((s) => s.id === n);
    }
  }
  return undefined;
}

function ServiceDetails() {
  const { slug, id, lang = "en" } = useParams();
  const service = findService(slug, id);

  if (!service) {
    return (
      <>
        <HeaderOne />
        <Breadcrumb
          title="Service not found"
          bgImage={DEFAULT_SERVICE_BANNER}
          breadcrumbItems={[
            { label: "Services", to: `/${lang}/service` },
            { label: "Not found" },
          ]}
        />
        <section className="space">
          <div className="container">
            <p className="box-text">This service could not be found.</p>
          </div>
        </section>
        <Footer />
        <ScrollToTop />
      </>
    );
  }

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title={service.listTitle}
        bgImage={service.bannerImg || DEFAULT_SERVICE_BANNER}
        breadcrumbItems={[
          { label: "Services", to: `/${lang}/service` },
          { label: service.breadcrumbCategory || service.cardSubtitle || "Service" },
        ]}
      />
      <ServiceDetailsMain service={service} />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ServiceDetails;
