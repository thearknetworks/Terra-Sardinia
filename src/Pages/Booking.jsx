import React from "react";
import { useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

function Booking() {
  const { lang = "en" } = useParams();

  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title="Book Now"
        bgImage="/assets/img/booking/Top%20Banner%20Image%20-%20Booking.png"
        breadcrumbItems={[
          { label: "Stays", to: `/${lang}/stays` },
          { label: "Book" },
        ]}
      />

      <section className="booking-embed-section">
        <iframe
          className="booking-embed-iframe"
          src="https://www.terrasardinia.it/it/booking/room#DatesGuests-BE"
          width="100%"
          height="2000"
          frameBorder="0"
          scrolling="no"
          title="Booking iframe"
        />
      </section>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Booking;
