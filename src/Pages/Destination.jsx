import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import HeaderThree from "../Components/Header/HeaderThree";
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
      <HeaderThree />
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
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8">
              <div className="title-area text-center pe-xl-4 ps-xl-4">
                <span className="sub-title">Mediterranean Coastal Living</span>
                <h2 className="sec-title mb-20">
                  Life Around Torre delle Stelle
                </h2>
                <p className="sec-text">
                  Born in the late 1960s, Torre delle Stelle is a seaside
                  tourist village located about 35 km from Cagliari (around a
                  35-minute drive) and 19 km from Villasimius, along the
                  south-eastern coast of Sardinia. Home to around one hundred
                  year-round residents, the village truly comes alive during the
                  warmer months, becoming a paradise of colors and scents where
                  the sounds of nature prevail. Thanks to its unique location,
                  Torre delle Stelle enjoys one of the longest summers on the
                  island, stretching across the coastal areas of the
                  municipalities of Maracalagonis and Sinnai.
                </p>
                <p className="sec-text">
                  Beyond the beautiful beaches of Torre delle Stelle — Cann’e
                  Sisa and Genn’e Mari — visitors can easily explore many other
                  stunning beaches nearby, including Solanas, Villasimius,
                  Geremeas, Costa Rei, and Cagliari, the island’s capital.
                </p>
                <p className="sec-text">
                  During spring and summer, the village offers two supermarkets,
                  a fish market, a butcher shop, local crafts, and souvenirs.
                  There are also kiosks and market stalls offering local
                  products, from fresh fruit and vegetables to traditional
                  Sardinian cured meats and pecorino cheese. The area also
                  offers a wide variety of restaurants to suit every taste,
                  ranging from refined dining experiences to more traditional
                  and authentic local cuisine.Visitors can also find Newsstands,
                  tobacconists, . In the quieter months, a grocery store and the
                  newsstand/bar/tobacconist are open mainly on weekends. Torre
                  delle Stelle also features several bars and ice cream shops
                  that stay open until late in the evening. There are also
                  tennis courts and football fields for those who enjoy sports,
                  as well as the possibility to rent inflatable boats and
                  explore the beautiful coastline from the sea.
                </p>
                <p className="sec-text">
                  Despite the lively summer atmosphere, the village remains a
                  very peaceful and safe destination, and during the summer
                  months a medical emergency service is available.
                </p>
              </div>
              <div className="title-area text-center pe-xl-4 ps-xl-4">
                <span className="sub-title">Moments Beyond the Villas</span>
                <h2 className="sec-title mb-20">Explore Southern Sardinia</h2>
                <p className="sec-text">
                  Beyond the peaceful coastline of Torre delle Stelle lies a
                  region filled with unforgettable experiences. From the vibrant
                  streets of Cagliari and the turquoise waters of Villasimius to
                  hidden beaches, seaside restaurants, local villages, and
                  scenic coastal escapes, Southern Sardinia invites you to
                  discover the island far beyond your stay.
                </p>
              </div>
            </div>
          </div>
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
