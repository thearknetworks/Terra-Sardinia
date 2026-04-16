import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function MobileMenu({ isOpen, onClose }) {
  const { i18n } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeShopMenu, setActiveShopMenu] = useState(false); // Shop submenu state
  const menuRefs = useRef({});

  // Toggle dropdown menu
  const toggleMenu = (index) => {
    if (index !== 6) {
      setActiveMenu(activeMenu === index ? null : index);
    }
  };

  // Handle Shop menu separately
  const toggleShopMenu = (e) => {
    e.stopPropagation(); // Prevent menu from closing
    setActiveShopMenu(!activeShopMenu);
  };

  // Apply height animation when activeMenu changes
  useEffect(() => {
    Object.keys(menuRefs.current).forEach((key) => {
      const submenu = menuRefs.current[key];
      if (submenu) {
        submenu.style.height =
          activeMenu == key ? `${submenu.scrollHeight}px` : "0px";
      }
    });
  }, [activeMenu]);

  return (
    <div
      className={`th-menu-wrapper onepage-nav ${isOpen ? "th-body-visible" : ""}`}
      style={{ visibility: isOpen ? "visible" : "hidden" }}
    >
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={onClose} aria-label="Close">
          <i className="fal fa-times" />
        </button>

        <div className="mobile-logo">
          <Link to="/">
            <img
              src="/assets/images/logo/TerraSardiniaDarkBlueLogo.png"
              alt="Terra Sardenia"
            />
          </Link>
        </div>

        <div className="th-mobile-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className={`menu-item-has-children th-item-has-children ${activeMenu === 1 ? "th-active" : ""}`}
            >
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu(1);
                }}
              >
                Stays
              </Link>
              <ul
                ref={(el) => (menuRefs.current[1] = el)}
                className="th-submenu"
                style={{
                  height: "0px",
                  overflow: "hidden",
                  transition: "height 0.3s ease-in-out",
                }}
              >
                <li>
                  <Link to={`/${i18n.resolvedLanguage || "en"}/villa-verde`}>
                    Villa Verde
                  </Link>
                </li>
                <li>
                  <Link to={`/${i18n.resolvedLanguage || "en"}/villa-antares`}>
                    Villa Antares
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Destination</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to={`/${i18n.resolvedLanguage || "en"}/faq`}>FAQ</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
