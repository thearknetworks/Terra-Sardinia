import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SideMenu from "./SideMenu";
import MobileMenu from "./MobileMenu";

function HeaderThree() {
  const { i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="th-header header-layout3 header-absolute">
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <nav className="main-menu d-none d-xl-block">
                    <ul>
                      <li>
                        <Link className="active" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to={`/${i18n.resolvedLanguage || "en"}/stays`}>
                          Stays
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`/${i18n.resolvedLanguage || "en"}/villa-verde`}
                            >
                              Guesthouse Villa Verde
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/${i18n.resolvedLanguage || "en"}/villa-antares`}
                            >
                              Villa Antares
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to={`/${i18n.resolvedLanguage || "en"}/service`}>
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/${i18n.resolvedLanguage || "en"}/destination`}
                        >
                          Destination
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src="/assets/images/logo/terra sardinia logo for navbar.png"
                        style={{
                          width: "126px",
                          height: "70px",
                          objectFit: "contain",
                          padding: "0",
                          margin: "0",
                        }}
                        alt="Terra Sardinia"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-xl-block">
                    <ul>
                      <li>
                        <Link to={`/${i18n.resolvedLanguage || "en"}/gallery`}>
                          Gallery
                        </Link>
                      </li>
                      <li>
                        <Link to={`/${i18n.resolvedLanguage || "en"}/contact`}>
                          Contact us
                        </Link>
                      </li>
                      <li>
                        <Link to={`/${i18n.resolvedLanguage || "en"}/faqs`}>
                          FAQS
                        </Link>
                      </li>
                      <li>
                        <Link to={`/${i18n.resolvedLanguage || "en"}/booking`}>
                          Book Now
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
              </div>
            </div>
            <div className="header-right-button">
              <button
                type="button"
                className="simple-btn sideMenuToggler"
                onClick={() => setIsSideMenuOpen(true)}
              >
                <img src="/assets/img/icon/menu.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </>
  );
}

export default HeaderThree;
