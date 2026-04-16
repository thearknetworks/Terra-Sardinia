import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";

function Booking() {
  const { lang = "en" } = useParams();

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Book Now"
        bgImage="/assets/img/booking/Top%20Banner%20Image%20-%20Booking.png"
        breadcrumbItems={[
          { label: "Stays", to: `/${lang}/stays` },
          { label: "Book" },
        ]}
      />

      <div className="space-top space-extra-bottom">
        <div className="container">
          <iframe
            src="https://www.terrasardinia.it/it/booking/room#DatesGuests-BE"
            width="100%"
            height="1200"
            frameBorder="0"
            title="Booking iframe"
          />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Booking;
