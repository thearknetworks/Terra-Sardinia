import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import DestinationList from "../Components/Destination/DestinationList";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const destinationCards = [
  {
    id: "genne-mari",
    title: "Genn’e Mari",
    item: "Crystal Waters",
    image: "/assets/img/destination/covers/genne-mari-cover.png",
    category: "Beaches",
    keywords: ["Beach", "Relaxation", "Nature"],
  },
  {
    id: "canne-sisa",
    title: "Cann’e Sisa",
    item: "Quiet Shores",
    image: "/assets/img/destination/covers/canne-sisa-cover.png",
    category: "Beaches",
    keywords: ["Beach", "Relaxation", "Nature"],
  },
  {
    id: "porto-giunco",
    title: "Porto Giunco",
    item: "Iconic Beach",
    image: "/assets/img/destination/covers/porto-giunco-cover.png",
    category: "Beaches",
    keywords: ["Beach", "Relaxation", "Nature"],
  },
  {
    id: "cala-delfino",
    title: "Cala Delfino",
    item: "Hidden Cove",
    image: "/assets/img/destination/covers/cala-delfino-cover.png",
    category: "Beaches",
    keywords: ["Beach", "Relaxation", "Nature"],
  },
  {
    id: "cagliari",
    title: "Cagliari",
    item: "Historic City",
    image: "/assets/img/destination/covers/cagliari-cover.png",
    category: "Landmarks",
    keywords: ["Culture", "Historic", "Scenic"],
  },
  {
    id: "saint-remy",
    title: "Saint Remy",
    item: "Historic Bastion",
    image: "/assets/img/destination/covers/saint-remy-cover.png",
    category: "Landmarks",
    keywords: ["Culture", "Historic", "Scenic"],
  },
  {
    id: "torre-delle-stelle-tower",
    title: "The Tower",
    item: "Coastal Landmark",
    image: "/assets/img/destination/covers/torre-delle-stelle-tower-cover.png",
    category: "Landmarks",
    keywords: ["Culture", "Historic", "Scenic"],
  },
  {
    id: "andycoc",
    title: "Andycoc",
    item: "Beach Dining",
    image: "/assets/img/destination/covers/andycoc-cover.png",
    category: "Dining",
    keywords: ["Restaurant", "Seafood", "Beach"],
  },
  {
    id: "aquarium",
    title: "Aquarium",
    item: "Garden Dining",
    image: "/assets/img/destination/covers/aquarium-cover.png",
    category: "Dining",
    keywords: ["Restaurant", "Nature", "Local"],
  },
  {
    id: "mosaico",
    title: "Mosaico",
    item: "Refined Dining",
    image: "/assets/img/destination/covers/mosaico-cover.png",
    category: "Dining",
    keywords: ["Restaurant", "Wine", "Seafood"],
  },
  {
    id: "istellas-club",
    title: "Istellas Club",
    item: "Beach Club",
    image: "/assets/img/destination/covers/istellas-club-cover.png",
    category: "Dining",
    keywords: ["Beach", "Relaxation", "Scenic"],
  },
  {
    id: "centro-palmira",
    title: "Palmira",
    item: "Local Hub",
    image: "/assets/img/destination/covers/centro-palmira-cover.png",
    category: "Hubs",
    keywords: ["Local", "Culture", "Scenic"],
  },
  {
    id: "cafe-do-mar",
    title: "Café do Mar",
    item: "Sunset Spot",
    image: "/assets/img/destination/covers/cafe-do-mar-cover.png",
    category: "Hubs",
    keywords: ["Restaurant", "Beach", "Relaxation"],
  },
];

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

function Destination() {
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
  const selectedTag = (searchParams.get("tag") || "").toLowerCase();
  const selectedKeyword = (searchParams.get("keyword") || "").toLowerCase();
  const keywordMatchedCards = selectedKeyword
    ? destinationCards.filter((destination) =>
        (destination.keywords || []).some(
          (keyword) => keyword.toLowerCase() === selectedKeyword,
        ),
      )
    : [];
  const resolvedCategory = tagToCategory[selectedTag] || "";
  const [activeCategory, setActiveCategory] = useState(resolvedCategory);

  useEffect(() => {
    setActiveCategory(resolvedCategory);
  }, [resolvedCategory]);

  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("tag", categoryToTag[categoryName]);
    nextParams.delete("keyword");
    setSearchParams(nextParams);
  };

  const filteredDestinations = useMemo(() => {
    if (selectedKeyword) {
      return destinationCards.filter((destination) =>
        (destination.keywords || []).some(
          (keyword) => keyword.toLowerCase() === selectedKeyword,
        ),
      );
    }
    if (!activeCategory) {
      return [...destinationCards].sort((a, b) =>
        (a.title || "").localeCompare(b.title || "", undefined, {
          sensitivity: "base",
        }),
      );
    }
    return destinationCards.filter(
      (destination) => destination.category === activeCategory,
    );
  }, [activeCategory, selectedKeyword]);

  return (
    <div>
      <HeaderOne />
      <Breadcrumb
        title="Explore the Area"
        bgImage="/assets/img/destination/torre_delle_stelle.jpg"
        breadcrumbItems={[
          { label: "Home", to: `/${i18n.resolvedLanguage || "en"}/home` },
          {
            label: "Destination",
            to: `/${i18n.resolvedLanguage || "en"}/destination`,
          },
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
        detailsBasePath={`/${i18n.resolvedLanguage || "en"}/destination`}
        posts={filteredDestinations}
        buttonLabel="Discover"
        buttonTo="details"
        sectionClassName="position-relative overflow-hidden destination-cards-section"
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Destination;
