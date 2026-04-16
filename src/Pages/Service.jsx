import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationList from "../Components/Destination/DestinationList";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import posts from "../Components/data/data-service.json";

const categoryOptions = [
  {
    name: "Beaches",
    iconBlue: "/assets/img/destination/Beaches_Blue.png",
    iconWhite: "/assets/img/destination/Beaches_White.png",
  },
  {
    name: "Dining",
    iconBlue: "/assets/img/destination/Dining_Blue.png",
    iconWhite: "/assets/img/destination/Dining_White.png",
  },
  {
    name: "Hubs",
    iconBlue: "/assets/img/destination/Hubs_Blue.png",
    iconWhite: "/assets/img/destination/Hubs_White.png",
  },
  {
    name: "Landmarks",
    iconBlue: "/assets/img/destination/Landmarks_Blue.png",
    iconWhite: "/assets/img/destination/Landmarks_White.png",
  },
];

const categoryNames = categoryOptions.map((c) => c.name);

function Service() {
  const { i18n } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const tagToCategory = {
    beaches: "Beaches",
    dining: "Dining",
    hubs: "Hubs",
    landmarks: "Landmarks",
  };
  const categoryToTag = {
    Beaches: "beaches",
    Dining: "dining",
    Hubs: "hubs",
    Landmarks: "landmarks",
  };

  const serviceCards = useMemo(
    () =>
      posts.map((post, index) => ({
        id: post.id,
        title: post.title,
        item: post.item,
        image: post.image?.startsWith("/")
          ? post.image
          : `/assets/img/destination/${post.image}`,
        category: categoryNames[index % categoryNames.length],
      })),
    [],
  );

  const selectedTag = (searchParams.get("tag") || "").toLowerCase();
  const resolvedCategory = tagToCategory[selectedTag] || "";
  const [activeCategory, setActiveCategory] = useState(resolvedCategory);

  useEffect(() => {
    setActiveCategory(resolvedCategory);
  }, [resolvedCategory]);

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("tag", categoryToTag[categoryName]);
    setSearchParams(nextParams);
  };

  const filteredServices = useMemo(() => {
    if (!activeCategory) {
      return [...serviceCards].sort((a, b) =>
        (a.title || "").localeCompare(b.title || "", undefined, {
          sensitivity: "base",
        }),
      );
    }
    return serviceCards.filter(
      (service) => service.category === activeCategory,
    );
  }, [activeCategory, serviceCards]);

  const lang = i18n.resolvedLanguage || "en";

  return (
    <div>
      <HeaderOne />
      <Breadcrumb
        title="Services"
        bgImage="/assets/img/services/Top%20Banner%20Image%20-%20Services.png"
        breadcrumbItems={[
          { label: "Home", to: `/${lang}/home` },
          { label: "Services" },
        ]}
      />
      <section className="destination-categories-section">
        <div className="container">
          <div className="destination-category-tabs-wrap">
            <div className="nav nav-tabs tour-tabs destination-category-tabs">
              {categoryOptions.map((category) => (
                <button
                  key={category.name}
                  className={`nav-link th-btn ${activeCategory === category.name ? "active" : ""}`}
                  type="button"
                  onClick={() => handleCategoryChange(category.name)}
                >
                  <img
                    src={
                      activeCategory === category.name
                        ? category.iconWhite
                        : category.iconBlue
                    }
                    alt={category.name}
                  />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DestinationList
        detailsBasePath={`/${lang}/service`}
        posts={filteredServices}
        buttonLabel="Book Now"
        buttonTo="details"
        sectionClassName="position-relative overflow-hidden destination-cards-section"
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Service;
