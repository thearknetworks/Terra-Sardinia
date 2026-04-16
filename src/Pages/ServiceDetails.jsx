import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import ServiceDetailsMain from "../Components/Services/ServiceDetailsMain";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import Posts from "../Components/data/data-service.json";

function ServiceDetails() {
  const { id, lang = "en" } = useParams();
  const servicePost = Posts.find((post) => post.id === parseInt(id, 10));
  const title = servicePost?.title || "Service";
  const bgImage = servicePost?.bannerImg
    ? `/assets/img/destination/${encodeURIComponent(servicePost.bannerImg)}`
    : "/assets/img/services/Top%20Banner%20Image%20-%20Services.png";

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title={title}
        bgImage={bgImage}
        breadcrumbItems={[
          { label: "Services", to: `/${lang}/service` },
          { label: title },
        ]}
      />
      <ServiceDetailsMain />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default ServiceDetails;
