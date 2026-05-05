import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Ferry() {
  const { lang = "en" } = useParams();

  useEffect(() => {
    const scriptId = "traghettiper-resizer-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://responsive.traghettiper.it/js/resizer.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title="Ferry Reservation"
        bgImage="/assets/img/ferry/Top%20Banner%20Image%20-%20Ferry.png"
        breadcrumbItems={[
          { label: "Home", to: `/${lang}/home` },
          { label: "Ferry" },
        ]}
      />

      <div className="space-top space-extra-bottom">
        <div className="container">
          <iframe
            id="traghettiper"
            style={{ paddingBottom: "30px" }}
            src="https://responsive.traghettiper.it/?marea=S&portal=681&affiliate=TP1555&locale=it"
            width="100%"
            height="1000"
            frameBorder="0"
            title="Ferry reservation"
          />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Ferry;
