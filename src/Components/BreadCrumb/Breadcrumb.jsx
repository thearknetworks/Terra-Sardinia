import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ title, bgImage, breadcrumbItems }) {
  const defaultItems = breadcrumbItems || [
    { label: "Home", to: "/en/home" },
    { label: title },
  ];

  return (
    <>
      <div
        className="breadcumb-wrapper "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{title}</h1>
            <ul className="breadcumb-menu">
              {defaultItems.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  {item.to ? (
                    <Link to={item.to}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
