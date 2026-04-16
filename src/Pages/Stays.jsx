import React from "react";
import { Link, useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const STAYS_CARDS = [
  {
    id: "aquarius",
    title: "Aquarius Room",
    image: "/assets/img/stays/cards/Aquarius%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/aquarius`,
  },
  {
    id: "aries",
    title: "Aries Room",
    image: "/assets/img/stays/cards/Aries%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/aries`,
  },
  {
    id: "cancer",
    title: "Cancer Room",
    image: "/assets/img/stays/cards/Cancer%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/cancer`,
  },
  {
    id: "virgo",
    title: "Virgo Room",
    image: "/assets/img/stays/cards/Virgo%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/virgo`,
  },
  {
    id: "sagittarius",
    title: "Sagittarius Room",
    image: "/assets/img/stays/cards/Sagittarius%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/sagittarius`,
  },
  {
    id: "villa-antares",
    title: "Villa Antares",
    image: "/assets/img/stays/cards/Villa%20Antares%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-antares`,
  },
];

function Stays() {
  const { lang = "en" } = useParams();

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Stays"
        bgImage="/assets/img/stays/Top%20Banner%20Image%20-%20Stays.png"
        breadcrumbItems={[
          { label: "Home", to: `/${lang}/home` },
          { label: "Stays" },
        ]}
      />

      <section className="space">
        <div className="container">
          <div className="row gy-24 gx-24">
            {STAYS_CARDS.map((stay) => (
              <div key={stay.id} className="col-md-6 col-xl-4">
                <Link
                  to={stay.to(lang)}
                  className="tour-box th-ani clickable-card"
                >
                  <div className="tour-box_img global-img">
                    <img src={stay.image} alt={stay.title} />
                  </div>
                  <div className="tour-content">
                    <h3 className="box-title">{stay.title}</h3>
                    <div className="tour-action">
                      <span className="th-btn style4">View Stay</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Stays;
