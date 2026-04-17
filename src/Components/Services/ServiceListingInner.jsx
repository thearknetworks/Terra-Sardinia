import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import ServiceCardTwo from "./ServiceCardTwo";
import posts from "../data/data-service.json";

/**
 * Listing shell matching the Tourm template destination page (DestinationInner):
 * search/sort bar, grid/list tabs, pagination, sidebar widgets.
 */
function ServiceListingInner() {
  const { lang = "en" } = useParams();
  const [activeTab, setActiveTab] = useState("tab-grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const totalPages = Math.ceil(posts.length / postsPerPage) || 1;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="title-area text-center pe-xl-4 ps-xl-4">
              <span className="sub-title">Curate Your Experience</span>
              <h2 className="sec-title mb-20">Get the Best of Sardenia</h2>
              <p className="sec-text">
                From sailing along hidden coastlines to guided discoveries,
                wellness sessions, and seamless travel support, each service is
                thoughtfully selected to enrich your time in Sardinia. Designed
                to be effortless and meaningful, these experiences allow you to
                explore, relax, and connect with the island in a way that feels
                natural and unforgettable.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-9 col-lg-8">
            <div className="tab-content" id="nav-tabContent">
              <div
                className={`tab-pane fade ${activeTab === "tab-grid" ? "show active" : ""}`}
                id="tab-grid"
                role="tabpanel"
              >
                <div className="row gy-30">
                  {currentPosts.map((data) => (
                    <div
                      key={data.slug || data.id}
                      className="col-xxl-4 col-xl-6"
                    >
                      <ServiceCard
                        serviceSlug={data.slug}
                        serviceImage={data.cardImage || data.image}
                        serviceTitle={data.listTitle || data.title}
                        serviceItem={data.cardSubtitle || data.item}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === "tab-list" ? "show active" : ""}`}
                id="tab-list"
                role="tabpanel"
              >
                <div className="row gy-30">
                  {currentPosts.map((data) => (
                    <div key={data.slug || data.id} className="col-12">
                      <ServiceCardTwo
                        serviceSlug={data.slug}
                        serviceImage={data.cardImage || data.image}
                        serviceTitle={data.listTitle || data.title}
                        serviceItem={data.cardSubtitle || data.item}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {totalPages > 1 ? (
              <div className="th-pagination text-center mt-60 mb-0">
                <ul>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i}>
                      <Link
                        className={currentPage === i + 1 ? "active" : ""}
                        to="#"
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                  {currentPage < totalPages && (
                    <li>
                      <Link
                        className="next-page"
                        to="#"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        Next{" "}
                        <img src="/assets/img/icon/arrow-right4.svg" alt="" />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="col-xxl-3 col-lg-4">
            <aside className="sidebar-area style2">
              <div
                className="widget widget_offer need-help-widget"
                style={{
                  background: `linear-gradient(#111d487b, #111d487b), url(/assets/img/destination/need_help.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="offer-banner">
                  <div className="offer">
                    <h6 className="box-title">Need Help? We’re here for you</h6>
                    <div className="banner-logo">
                      <img
                        src="/assets/images/logo/TerraSardiniaWhiteLogo.png"
                        alt="Terra Sardinia"
                      />
                    </div>
                    <Link
                      to={`/${lang}/contact`}
                      className="th-btn style2 th-icon"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceListingInner;
