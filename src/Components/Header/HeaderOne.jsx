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
  const [userLocation, setUserLocation] = useState(
    t("header.locating", "Locating..."),
  );
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const formatted = new Intl.DateTimeFormat(i18n.resolvedLanguage, {
        weekday: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true, // requested by user example formatted with 'am'
      }).format(date);
      setCurrentDateTime(formatted);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, [i18n.resolvedLanguage]);

  useEffect(() => {
    const getPreciseLocation = () => {
      if (!navigator.geolocation) {
        setUserLocation(
          t("header.geo_not_supported", "Geolocation not supported"),
        );
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=${i18n.resolvedLanguage}`,
            );
            const data = await response.json();

            if (data && data.address) {
              const addr = data.address;
              const city =
                addr.city ||
                addr.town ||
                addr.village ||
                addr.municipality ||
                addr.city_district ||
                addr.suburb ||
                addr.county ||
                addr.state;
              const country = addr.country;

              if (city && country && city !== country) {
                setUserLocation(`${city}, ${country}`);
              } else if (country) {
                setUserLocation(country);
              } else {
                setUserLocation(
                  t("header.location_not_found", "Location not found"),
                );
              }
            } else {
              setUserLocation(
                t("header.location_not_found", "Location not found"),
              );
            }
          } catch (error) {
            console.error("Error reverse geocoding:", error);
            setUserLocation(
              t("header.location_unavailable", "Location unavailable"),
            );
          }
        },
        (error) => {
          console.error("Geolocation error:", error);
          if (error.code === error.PERMISSION_DENIED) {
            setUserLocation(
              t("header.permission_denied", "Location permission denied"),
            );
          } else {
            setUserLocation(
              t("header.location_unavailable", "Location unavailable"),
            );
          }
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      );
    };

    getPreciseLocation();
  }, [i18n.resolvedLanguage, t]);

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
                      <span>{userLocation}</span>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-regular fa-clock" />
                      <span>{currentDateTime}</span>
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
                      <li className="d-none d-md-inline-block">
                        <Link to="/contact">Support</Link>
                      </li>
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
                      <img src="/assets/img/logo.svg" alt="Tourm" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li className="menu-item-has-children mega-menu-wrap">
                        <Link className="active" to="/">
                          Home
                        </Link>
                        <ul className="mega-menu mega-menu-content">
                          <li>
                            <div className="container">
                              <div className="row gy-4">
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img
                                        src="/assets/img/pages/home-travel.jpg"
                                        alt="Home One"
                                      />
                                      <div className="btn-wrap">
                                        <Link to="/" className="th-btn">
                                          View Demo
                                        </Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title">
                                      <Link to="/">
                                        <span>01.</span>Home Travel
                                      </Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img
                                        src="/assets/img/pages/home-tour.jpg"
                                        alt="Home Two"
                                      />
                                      <div className="btn-wrap">
                                        <Link
                                          to="/home-tour"
                                          className="th-btn "
                                        >
                                          View Demo
                                        </Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title">
                                      <Link to="/home-tour">
                                        <span>02.</span>Home Tour
                                      </Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img
                                        src="/assets/img/pages/home-agency.jpg"
                                        alt="Home Three"
                                      />
                                      <div className="btn-wrap">
                                        <Link
                                          to="/home-agency"
                                          className="th-btn "
                                        >
                                          View Demo
                                        </Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title">
                                      <Link to="/home-agency">
                                        <span>03.</span>Home Agency
                                      </Link>
                                    </h3>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mega-menu-box">
                                    <div className="mega-menu-img">
                                      <img
                                        src="/assets/img/pages/home-yacht.jpg"
                                        alt="Home Four"
                                      />
                                      <div className="btn-wrap">
                                        <Link
                                          to="/home-yacht"
                                          className="th-btn "
                                        >
                                          View Demo
                                        </Link>
                                      </div>
                                    </div>
                                    <h3 className="mega-menu-title">
                                      <Link to="/home-yacht">
                                        <span>04.</span>Home Yacht
                                      </Link>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Destination</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/destination">Destination</Link>
                          </li>
                          <li>
                            <Link to="/destination/1">Destination Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Service</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/service">Services</Link>
                          </li>
                          <li>
                            <Link to="/service/1">Service Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Activities</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/activities">activities</Link>
                          </li>
                          <li>
                            <Link to="/activities-details">
                              activities Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Pages</Link>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <Link to="#">Shop</Link>
                            <ul className="sub-menu">
                              <li>
                                <Link to="/shop">Shop</Link>
                              </li>
                              <li>
                                <Link to="/shop/1">Shop Details</Link>
                              </li>
                              <li>
                                <Link to="/cart">Cart Page</Link>
                              </li>
                              <li>
                                <Link to="/checkout">Checkout</Link>
                              </li>
                              <li>
                                <Link to="/wishlist">Wishlist</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/tour">Our Tour</Link>
                          </li>
                          <li>
                            <Link to="/tour-details">Tour Details</Link>
                          </li>
                          <li>
                            <Link to="/resort">Resort page</Link>
                          </li>
                          <li>
                            <Link to="/resort/1">Resort Details</Link>
                          </li>
                          <li>
                            <Link to="/tour-details">Tour Details</Link>
                          </li>
                          <li>
                            <Link to="/tour-guide">Tour Guider</Link>
                          </li>
                          <li>
                            <Link to="/tour-guide/1">Tour Guider Details</Link>
                          </li>
                          <li>
                            <Link to="/faq">Faq Page</Link>
                          </li>
                          <li>
                            <Link to="/price">Price Package</Link>
                          </li>
                          <li>
                            <Link to="/error">Error Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Blog</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog/1">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
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
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link to="/contact" className="th-btn style3 th-icon">
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
