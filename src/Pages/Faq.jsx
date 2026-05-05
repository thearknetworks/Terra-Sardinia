import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import HeaderThree from "../Components/Header/HeaderThree";

const FAQ_BG = "/assets/img/faq/Top%20Banner%20Image%20-%20FAQs.png";

const FAQ_ITEMS = [
  {
    q: "How can I check availability?",
    a: "You can select your preferred dates directly through our booking section. Availability is updated in real time.",
  },
  {
    q: "Is instant booking available?",
    a: "Yes, depending on the selected dates and property, your booking can be confirmed instantly.",
  },
  {
    q: "Can I request specific dates not shown as available?",
    a: "If your dates are unavailable, you can still contact us. We may suggest alternatives or notify you if something opens up.",
  },
  {
    q: "Is there a minimum stay requirement?",
    a: "Yes. Villa Verde typically requires a minimum of 2 nights, while Villa Antares requires a minimum of 6 nights.",
  },
  {
    q: "Can I book last-minute stays?",
    a: "Yes, last-minute bookings are possible based on availability.",
  },
  {
    q: "What is included in the price?",
    a: "Your stay includes accommodation, standard utilities, and access to all listed amenities.",
  },
  {
    q: "Are there any additional fees?",
    a: "Extra services, additional beds, or special requests may incur additional charges.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit cards and secure online payments.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, typically 50% of the total amount is required to confirm your booking.",
  },
  {
    q: "When is the remaining balance due?",
    a: "The remaining balance is due before arrival, based on your selected rate.",
  },
  {
    q: "What is your cancellation policy?",
    a: "For standard rates, cancellations made at least 30 days before arrival may receive a partial refund.",
  },
  {
    q: "Do you offer non-refundable rates?",
    a: "Yes, discounted non-refundable options may be available at booking.",
  },
  {
    q: "Can I modify my reservation?",
    a: "Modifications are possible depending on availability and timing.",
  },
  {
    q: "What happens if I cancel late?",
    a: "Late cancellations may result in partial or full loss of the deposit.",
  },
  {
    q: "Do you offer travel insurance?",
    a: "We recommend guests arrange their own travel insurance for added protection.",
  },
  {
    q: "What is the difference between Villa Verde and Villa Antares?",
    a: "Villa Verde offers individual rooms or full villa rental, while Villa Antares is rented exclusively as a full villa.",
  },
  {
    q: "How many guests can each property accommodate?",
    a: "Villa Verde rooms accommodate up to 2–3 guests each; Villa Antares hosts up to 8 guests, with optional extra beds.",
  },
  {
    q: "Are extra beds available?",
    a: "Yes, extra beds can be arranged upon request at an additional cost.",
  },
  {
    q: "Are the villas private?",
    a: "Villa Antares is fully private. Villa Verde can be booked per room or entirely.",
  },
  {
    q: "Are linens and towels provided?",
    a: "Yes, all essential linens and towels are included.",
  },
  {
    q: "Is there a swimming pool?",
    a: "Yes, both villas feature a private pool for guests.",
  },
  {
    q: "Is Wi-Fi available?",
    a: "Yes, high-speed Wi-Fi is available throughout the property.",
  },
  {
    q: "Is daily housekeeping included?",
    a: "Housekeeping services may be included or offered upon request.",
  },
  {
    q: "Do you offer breakfast or meals?",
    a: "Breakfast and additional meal services can be arranged upon request.",
  },
  {
    q: "Are there laundry facilities?",
    a: "Laundry services or facilities are available depending on the villa.",
  },
  {
    q: "Where are the villas located?",
    a: "Both villas are located in Torre delle Stelle, a coastal area in Sardinia.",
  },
  {
    q: "How far are you from the beach?",
    a: "The villas are within a short drive from nearby beaches.",
  },
  {
    q: "Is a car necessary?",
    a: "We recommend renting a car for easier access and exploration.",
  },
  {
    q: "Is parking available?",
    a: "Yes, private parking is available on-site.",
  },
  {
    q: "How do I get there from the airport?",
    a: "We can assist with directions or arrange transfers upon request.",
  },
  {
    q: "Is the property suitable for children?",
    a: "We welcome children aged 8 and above.",
  },
  {
    q: "Are pets allowed?",
    a: "Pets are allowed upon request and may incur an additional fee.",
  },
  {
    q: "Can you help organize activities?",
    a: "Yes, we can recommend and assist with local experiences and activities.",
  },
  {
    q: "Is the area safe?",
    a: "Yes, Torre delle Stelle is known for its peaceful and safe environment.",
  },
  {
    q: "Do you offer concierge services?",
    a: "We provide support and recommendations to enhance your stay.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in and check-out times will be confirmed upon booking.",
  },
  {
    q: "Can I request early check-in or late check-out?",
    a: "This can be arranged depending on availability.",
  },
  {
    q: "Will someone meet us on arrival?",
    a: "Yes, we ensure a smooth check-in process with clear instructions or in-person assistance.",
  },
  {
    q: "What happens if something goes wrong during my stay?",
    a: "Our team is available to assist you throughout your stay.",
  },
  {
    q: "Who do I contact for support?",
    a: "You will receive a direct contact for assistance before and during your stay.",
  },
];

const PER_PAGE = 8;

function Faq() {
  const { lang = "en" } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const totalPages = Math.ceil(FAQ_ITEMS.length / PER_PAGE);

  const pageParam = searchParams.get("page");
  const rawPage = parseInt(pageParam || "1", 10);
  const currentPage = useMemo(() => {
    if (Number.isNaN(rawPage) || rawPage < 1) return 1;
    if (rawPage > totalPages) return totalPages;
    return rawPage;
  }, [rawPage, totalPages]);

  useEffect(() => {
    if (pageParam != null && currentPage !== rawPage) {
      setSearchParams({ page: String(currentPage) }, { replace: true });
    }
  }, [pageParam, rawPage, currentPage, setSearchParams]);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    return FAQ_ITEMS.slice(start, start + PER_PAGE).map((item, i) => ({
      ...item,
      globalIndex: start + i,
    }));
  }, [currentPage]);

  const toggleAccordion = (localIndex) => {
    setActiveIndex(activeIndex === localIndex ? null : localIndex);
  };

  useEffect(() => {
    setActiveIndex(null);
  }, [currentPage]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex, pageItems]);

  const basePath = `/${lang}/faqs`;

  return (
    <>
      <HeaderThree />
      <Breadcrumb
        title="FAQs"
        bgImage={FAQ_BG}
        breadcrumbItems={[
          { label: "Home", to: `/${lang}/home` },
          { label: "FAQs" },
        ]}
      />

      <div className="space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <span className="sub-title">Frequently Asked Questions</span>
                <h2 className="sec-title">Making Your Stay Easier</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="accordion-area mb-30">
                {pageItems.map((faq, index) => (
                  <div
                    key={faq.globalIndex}
                    className={`accordion-card style2 ${activeIndex === index ? "active" : ""}`}
                  >
                    <div className="accordion-header">
                      <button
                        type="button"
                        className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        {faq.q}
                      </button>
                    </div>
                    <div
                      ref={(el) => {
                        contentRefs.current[index] = el;
                      }}
                      className="accordion-collapse"
                    >
                      <div className="accordion-body">
                        <p className="faq-text">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 ? (
                <div className="th-pagination text-center mt-40 mb-0">
                  <ul>
                    {currentPage > 1 ? (
                      <li>
                        <Link
                          className="prev-page"
                          to={{
                            pathname: basePath,
                            search: `?page=${currentPage - 1}`,
                          }}
                        >
                          <img src="/assets/img/icon/arrow-left4.svg" alt="" />{" "}
                          Prev
                        </Link>
                      </li>
                    ) : null}
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li key={i}>
                        <Link
                          className={currentPage === i + 1 ? "active" : ""}
                          to={{
                            pathname: basePath,
                            search: `?page=${i + 1}`,
                          }}
                        >
                          {i + 1}
                        </Link>
                      </li>
                    ))}
                    {currentPage < totalPages ? (
                      <li>
                        <Link
                          className="next-page"
                          to={{
                            pathname: basePath,
                            search: `?page=${currentPage + 1}`,
                          }}
                        >
                          Next{" "}
                          <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                        </Link>
                      </li>
                    ) : null}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Faq;
