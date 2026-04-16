import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import StaysFilterSections from "../Components/Stays/StaysFilterSections";
import { villaVerdeSidebarItems } from "../Components/Resort/villaVerdeDetailsData";
import "../Components/Resort/ResortDetailsInfoCard.css";

/** Villa Verde room sizes from each room page (La Tavola excluded) + Villa Antares. */
const VILLA_ANTARES_SIZE_M2 = 150;
const STAY_SIZE_FILTER_OPTIONS = Array.from(
  new Set([
    ...villaVerdeSidebarItems
      .filter((item) => item.slug !== "la-tavola")
      .map((item) => parseInt(item.meta, 10))
      .filter((n) => !Number.isNaN(n)),
    VILLA_ANTARES_SIZE_M2,
  ]),
).sort((a, b) => a - b);

const STAYS_CARDS = [
  {
    id: "aquarius",
    villa: "Villa Verde",
    roomName: "Aquarius",
    minStay: "2 nights",
    size: 20,
    beds: ["King Size", "Extra Bed"],
    guests: "Up to 2",
    propertyType: "Guesthouse Rooms",
    amenities: ["Pool View", "Air Conditioning", "Wifi", "TV", "Safe", "Desk"],
    image: "/assets/img/stays/cards/Aquarius%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/aquarius`,
  },
  {
    id: "aries",
    villa: "Villa Verde",
    roomName: "Aries",
    minStay: "2 nights",
    size: 21,
    beds: ["King Size", "Twin Bed", "Extra Bed"],
    guests: "Up to 2",
    propertyType: "Guesthouse Rooms",
    amenities: [
      "Pool View",
      "Air Conditioning",
      "Wifi",
      "TV",
      "Minibar",
      "Desk",
    ],
    image: "/assets/img/stays/cards/Aries%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/aries`,
  },
  {
    id: "cancer",
    villa: "Villa Verde",
    roomName: "Cancer",
    minStay: "2 nights",
    size: 15,
    beds: ["Double Bed"],
    guests: "Up to 2",
    propertyType: "Guesthouse Rooms",
    amenities: [
      "Garden View",
      "Air Conditioning",
      "Wifi",
      "TV",
      "Minibar",
      "Desk",
    ],
    image: "/assets/img/stays/cards/Cancer%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/cancer`,
  },
  {
    id: "virgo",
    villa: "Villa Verde",
    roomName: "Virgo",
    minStay: "2 nights",
    size: 17,
    beds: ["King Size", "Single Bed", "Extra Bed"],
    guests: "Up to 3",
    propertyType: "Guesthouse Rooms",
    amenities: [
      "Garden View",
      "Air Conditioning",
      "Wifi",
      "TV",
      "Minibar",
      "Safe",
    ],
    image: "/assets/img/stays/cards/Virgo%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/virgo`,
  },
  {
    id: "sagittarius",
    villa: "Villa Verde",
    roomName: "Sagittarius",
    minStay: "2 nights",
    size: 20,
    beds: ["King Size", "Sofa Bed", "Extra Bed"],
    guests: "Up to 3",
    propertyType: "Guesthouse Rooms",
    amenities: [
      "Garden View",
      "Air Conditioning",
      "Wifi",
      "TV",
      "Minibar",
      "Fan",
    ],
    image: "/assets/img/stays/cards/Sagittarius%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-verde/sagittarius`,
  },
  {
    id: "villa-antares",
    villa: "Villa Antares",
    roomName: "Private Villa",
    minStay: "6 nights",
    size: 150,
    beds: ["King Size", "Double Bed", "Single Bed", "Twin Bed", "Extra Bed"],
    guests: "Up to 10",
    propertyType: "Private Villa",
    amenities: [
      "Sea View",
      "Air Conditioning",
      "Wifi",
      "TV",
      "Dishwasher",
      "Dining Area",
      "Outdoor Dining",
      "BBQ",
      "Pool",
      "Outdoor Hot Tub",
      "Cleaning Service",
      "Safe",
      "Hair Dryer",
      "Shower",
      "Adapter",
      "Desk",
      "Alarm System",
      "E-Car Charging",
      "Pet Friendly",
    ],
    image: "/assets/img/stays/cards/Villa%20Antares%20-%20Stays.png",
    to: (lang) => `/${lang}/villa-antares`,
  },
];

const GUEST_OPTIONS = ["Up to 2", "Up to 3", "Up to 10"];
const PROPERTY_OPTIONS = ["Guesthouse Rooms", "Private Villa"];
const BED_OPTIONS = [
  "Single Bed",
  "Double Bed",
  "Twin Bed",
  "King Size",
  "Extra Bed",
];

function serializeStaysFilterState({
  selectedSize,
  selectedBeds,
  selectedGuests,
  selectedPropertyType,
  selectedAmenities,
}) {
  return JSON.stringify({
    size: selectedSize,
    beds: [...selectedBeds].sort(),
    guests: selectedGuests,
    propertyType: selectedPropertyType,
    amenities: [...selectedAmenities].sort(),
  });
}

function Stays() {
  const { lang = "en" } = useParams();
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState("all");
  const [selectedPropertyType, setSelectedPropertyType] = useState("all");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterModalBaseline, setFilterModalBaseline] = useState("");

  const allAmenities = useMemo(
    () =>
      Array.from(new Set(STAYS_CARDS.flatMap((stay) => stay.amenities))).sort(
        (a, b) => a.localeCompare(b),
      ),
    [],
  );

  const matchesFilters = (stay, filters) => {
    if (filters.size !== "all" && stay.size !== filters.size) return false;
    if (filters.guests !== "all" && stay.guests !== filters.guests)
      return false;
    if (
      filters.propertyType !== "all" &&
      stay.propertyType !== filters.propertyType
    )
      return false;
    if (
      filters.beds.length > 0 &&
      !filters.beds.every((bed) => stay.beds.includes(bed))
    )
      return false;
    if (
      filters.amenities.length > 0 &&
      !filters.amenities.every((amenity) => stay.amenities.includes(amenity))
    )
      return false;
    return true;
  };

  const activeFilters = {
    size: selectedSize,
    beds: selectedBeds,
    guests: selectedGuests,
    propertyType: selectedPropertyType,
    amenities: selectedAmenities,
  };
  const hasAppliedFilters =
    selectedSize !== "all" ||
    selectedBeds.length > 0 ||
    selectedGuests !== "all" ||
    selectedPropertyType !== "all" ||
    selectedAmenities.length > 0;

  const filteredStays = useMemo(
    () => STAYS_CARDS.filter((stay) => matchesFilters(stay, activeFilters)),
    [activeFilters],
  );

  const sortedFilteredStays = useMemo(() => {
    const antaresId = "villa-antares";
    return [...filteredStays].sort((a, b) => {
      if (a.id === antaresId && b.id !== antaresId) return 1;
      if (a.id !== antaresId && b.id === antaresId) return -1;
      return 0;
    });
  }, [filteredStays]);

  const getCountForOption = (facet, optionValue) => {
    const filters = { ...activeFilters };
    if (facet === "size") filters.size = optionValue;
    if (facet === "guests") filters.guests = optionValue;
    if (facet === "propertyType") filters.propertyType = optionValue;
    if (facet === "beds") {
      filters.beds = selectedBeds.includes(optionValue)
        ? selectedBeds.filter((item) => item !== optionValue)
        : [...selectedBeds, optionValue];
    }
    if (facet === "amenities") {
      filters.amenities = selectedAmenities.includes(optionValue)
        ? selectedAmenities.filter((item) => item !== optionValue)
        : [...selectedAmenities, optionValue];
    }
    return STAYS_CARDS.filter((stay) => matchesFilters(stay, filters)).length;
  };

  const toggleMultiSelect = (setter, current, value) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
      return;
    }
    setter([...current, value]);
  };

  const resetFilters = () => {
    setSelectedSize("all");
    setSelectedBeds([]);
    setSelectedGuests("all");
    setSelectedPropertyType("all");
    setSelectedAmenities([]);
  };

  const openFilterModal = () => {
    setFilterModalBaseline(
      serializeStaysFilterState({
        selectedSize,
        selectedBeds,
        selectedGuests,
        selectedPropertyType,
        selectedAmenities,
      }),
    );
    setIsFilterModalOpen(true);
  };

  const showFilterModalDone = useMemo(() => {
    if (!isFilterModalOpen) return false;
    return (
      serializeStaysFilterState({
        selectedSize,
        selectedBeds,
        selectedGuests,
        selectedPropertyType,
        selectedAmenities,
      }) !== filterModalBaseline
    );
  }, [
    isFilterModalOpen,
    filterModalBaseline,
    selectedSize,
    selectedBeds,
    selectedGuests,
    selectedPropertyType,
    selectedAmenities,
  ]);

  useEffect(() => {
    if (!isFilterModalOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsFilterModalOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isFilterModalOpen]);

  const filterSectionsProps = {
    selectedSize,
    setSelectedSize,
    selectedBeds,
    setSelectedBeds,
    selectedGuests,
    setSelectedGuests,
    selectedPropertyType,
    setSelectedPropertyType,
    selectedAmenities,
    setSelectedAmenities,
    staySizeFilterOptions: STAY_SIZE_FILTER_OPTIONS,
    bedOptions: BED_OPTIONS,
    guestOptions: GUEST_OPTIONS,
    propertyOptions: PROPERTY_OPTIONS,
    allAmenities,
    totalStaysCount: STAYS_CARDS.length,
    getCountForOption,
    toggleMultiSelect,
  };

  return (
    <>
      <HeaderOne />
      <Breadcrumb
        title="Stays"
        bgImage="/assets/img/stays/Top%20Banner%20Image%20-%20Stays.png"
        breadcrumbItems={[
          { label: "Home", to: `/${lang}/home` },
          { label: "Stays" },
        ]}
      />

      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-12 d-lg-none mb-3">
              <div className="stays-mobile-toolbar d-flex gap-2 align-items-stretch">
                <button
                  type="button"
                  className="th-btn style4 stays-mobile-filter-open flex-grow-1"
                  onClick={openFilterModal}
                >
                  <i className="fa-light fa-sliders" aria-hidden />
                  <span>Filter</span>
                  {hasAppliedFilters ? (
                    <span className="stays-mobile-filter-badge" aria-hidden />
                  ) : null}
                </button>
                {hasAppliedFilters ? (
                  <button
                    type="button"
                    className="th-btn style4 stays-mobile-clear flex-grow-1"
                    onClick={resetFilters}
                  >
                    <i className="fa-light fa-xmark" aria-hidden />
                    Clear Filter
                  </button>
                ) : null}
              </div>
            </div>

            <div className="col-xxl-8 col-lg-7">
              <div className="d-none d-lg-flex justify-content-between align-items-center mb-3">
                <div />
                {hasAppliedFilters ? (
                  <button
                    type="button"
                    className="th-btn style4 stays-reset-btn"
                    onClick={resetFilters}
                  >
                    <i className="fa-light fa-xmark" />
                    Clear Filter
                  </button>
                ) : null}
              </div>

              <div className="row gy-24 gx-24">
                {sortedFilteredStays.map((stay) => (
                  <div key={stay.id} className="col-md-6">
                    <Link
                      to={stay.to(lang)}
                      className="tour-box th-ani clickable-card"
                    >
                      <div className="tour-box_img global-img">
                        <img
                          src={stay.image}
                          alt={`${stay.villa} - ${stay.roomName}`}
                        />
                      </div>
                      <div className="tour-content">
                        <p className="stays-card-villa-label">{stay.villa}</p>
                        <h4 className="tour-box_price">
                          <span className="currency">{stay.roomName}</span>
                        </h4>
                        <div className="tour-action">
                          <span>
                            <i className="fa-light fa-clock" />
                            <span
                              className="d-none d-xl-inline"
                              style={{
                                color: "inherit",
                                fontWeight: "inherit",
                              }}
                            >
                              Min. Stay:{" "}
                            </span>
                            {stay.minStay}
                          </span>
                          <span className="th-btn style4">
                            <span
                              className="d-none d-sm-inline"
                              style={{
                                color: "inherit",
                                fontWeight: "inherit",
                              }}
                            >
                              View
                            </span>
                            Details
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {sortedFilteredStays.length === 0 ? (
                <div className="mt-4 text-center">
                  <p className="mb-2">No stays match your selected filters.</p>
                </div>
              ) : null}
            </div>

            <div className="col-xxl-4 col-lg-5 mt-4 mt-lg-0 d-none d-lg-block">
              <aside className="sidebar-area">
                <StaysFilterSections {...filterSectionsProps} />
              </aside>
            </div>
          </div>
        </div>
      </section>

      {isFilterModalOpen ? (
        <div
          className="resort-rules-modal stays-filter-modal-shell"
          role="dialog"
          aria-modal="true"
          aria-labelledby="stays-filter-modal-title"
          onClick={() => setIsFilterModalOpen(false)}
        >
          <div
            className="resort-rules-modal__content stays-filter-modal-shell__content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="resort-rules-modal__close"
              onClick={() => setIsFilterModalOpen(false)}
              aria-label="Close filter popup"
            >
              ×
            </button>
            <h4 id="stays-filter-modal-title">Filter</h4>
            <div className="resort-rules-modal__divider" />
            <div className="resort-rules-modal__body stays-filter-modal-shell__body">
              <StaysFilterSections
                {...filterSectionsProps}
                sectionClassName="stays-filter-section--in-modal"
              />
            </div>
            {hasAppliedFilters || showFilterModalDone ? (
              <div className="stays-filter-modal-shell__footer">
                {hasAppliedFilters ? (
                  <button
                    type="button"
                    className="th-btn style3 stays-filter-modal-shell__btn"
                    onClick={() => {
                      resetFilters();
                    }}
                  >
                    Clear Filters
                  </button>
                ) : null}
                {showFilterModalDone ? (
                  <button
                    type="button"
                    className="th-btn style4 stays-filter-modal-shell__btn"
                    onClick={() => setIsFilterModalOpen(false)}
                  >
                    Apply
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Stays;
