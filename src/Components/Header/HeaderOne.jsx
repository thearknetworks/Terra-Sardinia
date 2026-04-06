import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NiceSelect from "./NiceSelect";
import MobileMenu from "./MobileMenu";
import LoginForm from "./LoginForm";

function HeaderOne() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const languageOptions = [
    { value: "en", label: "EN" },
    { value: "fr", label: "FR" },
    { value: "es", label: "ES" },
    { value: "nl", label: "NL" },
    { value: "de", label: "DE" },
    { value: "it", label: "IT" },
  ];

  const currentLangOption =
    languageOptions.find((opt) => opt.value === i18n.resolvedLanguage) ||
    languageOptions[0];

  const handleLanguageChange = (newLang) => {
    const currentPath = location.pathname;
    const pathParts = currentPath.split("/");
    if (pathParts.length > 1) {
      pathParts[1] = newLang;
    }
    const newPath = pathParts.join("/");
    navigate(newPath + location.search + location.hash);
  };

  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

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
      {/*============================== Header Area ==============================*/}
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-xl-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-sharp fa-regular  fa-location-dot" />
                      <span>Torre delle Stelle, Sardinia</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="currency-menu">
                    <NiceSelect
                      options={languageOptions}
                      defaultValue={currentLangOption.label}
                      onChange={handleLanguageChange}
                    />
                  </div>

                  <div className="header-links">
                    <ul>
                      <li className="d-none d-md-inline-block">
                        <Link to="/faq">FAQ</Link>
                      </li>
                      {/* <li className="d-none d-md-inline-block">
                        <Link to="/contact">Support</Link>
                      </li> */}
                      {/* <li>
                        <button
                          type="button"
                          onClick={() => setIsLoginFormOpen(true)}
                        >
                          Sign In / Register
                          <i className="fa-regular fa-user" />
                        </button>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src="/assets/images/logo/TerraSardiniaWhiteLogo.png"
                        style={{
                          width: "126px",
                          height: "50px",
                          objectFit: "contain",
                          padding: "0",
                          margin: "0",
                        }}
                        alt="Terra Sardinia"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to={`/${i18n.resolvedLanguage || "en"}/stays`}>
                          Stays
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={`/${i18n.resolvedLanguage || "en"}/stays/villa-verde`}
                            >
                              Villa Verde
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`/${i18n.resolvedLanguage || "en"}/stays/villa-antares`}
                            >
                              Villa Antares
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/">Services</Link>
                      </li>
                      <li>
                        <Link
                          to={`/${i18n.resolvedLanguage || "en"}/destination`}
                        >
                          Destination
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/">Contact</Link>
                      </li>

                      {/* <li className="menu-item-has-children">
                        <Link to="#">Service</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/service">Services</Link>
                          </li>
                          <li>
                            <Link to="/service/1">Service Details</Link>
                          </li>
                        </ul>
                      </li> */}
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
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link
                      to={`/${i18n.resolvedLanguage || "en"}/stays`}
                      className="th-btn style3 th-icon"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="logo-bg bg-mask"
              style={{
                WebkitMaskImage: "url(/assets/img/logo_bg_mask.png)",
                maskImage: "url(/assets/img/logo_bg_mask.png)",
              }}
            />
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <LoginForm
        isOpen={isLoginFormOpen}
        onClose={() => setIsLoginFormOpen(false)}
      />
    </>
  );
}

export default HeaderOne;
