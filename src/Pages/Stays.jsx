import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import Breadcrumb from "../Components/BreadCrumb/Breadcrumb";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { villaVerdeSidebarItems } from "../Components/Resort/villaVerdeDetailsData";

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
    minStay: "2 Nights",
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
    minStay: "2 Nights",
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
    minStay: "2 Nights",
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
    minStay: "2 Nights",
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
    minStay: "2 Nights",
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
    minStay: "6 Nights",
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

function Stays() {
  const { lang = "en" } = useParams();
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedBeds, setSelectedBeds] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState("all");
  const [selectedPropertyType, setSelectedPropertyType] = useState("all");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

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
            <div className="col-xxl-8 col-lg-7">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div />
                {hasAppliedFilters ? (
                  <button
                    type="button"
                    className="th-btn style4 stays-reset-btn"
                    onClick={resetFilters}
                  >
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
                            Min. Stay: {stay.minStay}
                          </span>
                          <span className="th-btn style4">View Details</span>
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

            <div className="col-xxl-4 col-lg-5 mt-4 mt-lg-0">
              <aside className="sidebar-area">
                <div className="widget widget_categories">
                  <h3 className="widget_title">Size</h3>
                  <ul>
                    <li>
                      <button
                        type="button"
                        className={`stays-filter-btn ${selectedSize === "all" ? "active" : ""}`}
                        onClick={() => setSelectedSize("all")}
                      >
                        <span>All</span>
                        <span>({STAYS_CARDS.length})</span>
                      </button>
                    </li>
                    {STAY_SIZE_FILTER_OPTIONS.map((size) => {
                      const count = getCountForOption("size", size);
                      if (count === 0 && selectedSize !== size) return null;
                      return (
                        <li key={size}>
                          <button
                            type="button"
                            className={`stays-filter-btn ${selectedSize === size ? "active" : ""}`}
                            onClick={() => setSelectedSize(size)}
                          >
                            <span>{size} m2</span>
                            <span>({count})</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget_title">Beds</h3>
                  <ul>
                    {BED_OPTIONS.map((bed) => {
                      const count = getCountForOption("beds", bed);
                      if (count === 0 && !selectedBeds.includes(bed))
                        return null;
                      return (
                        <li key={bed}>
                          <button
                            type="button"
                            className={`stays-filter-btn ${selectedBeds.includes(bed) ? "active" : ""}`}
                            onClick={() =>
                              toggleMultiSelect(
                                setSelectedBeds,
                                selectedBeds,
                                bed,
                              )
                            }
                          >
                            <span>{bed}</span>
                            <span>({count})</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget_title">Guests</h3>
                  <ul>
                    <li>
                      <button
                        type="button"
                        className={`stays-filter-btn ${selectedGuests === "all" ? "active" : ""}`}
                        onClick={() => setSelectedGuests("all")}
                      >
                        <span>All</span>
                        <span>({STAYS_CARDS.length})</span>
                      </button>
                    </li>
                    {GUEST_OPTIONS.map((guest) => {
                      const count = getCountForOption("guests", guest);
                      if (count === 0 && selectedGuests !== guest) return null;
                      return (
                        <li key={guest}>
                          <button
                            type="button"
                            className={`stays-filter-btn ${selectedGuests === guest ? "active" : ""}`}
                            onClick={() => setSelectedGuests(guest)}
                          >
                            <span>{guest}</span>
                            <span>({count})</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget_title">Property Type</h3>
                  <ul>
                    <li>
                      <button
                        type="button"
                        className={`stays-filter-btn ${selectedPropertyType === "all" ? "active" : ""}`}
                        onClick={() => setSelectedPropertyType("all")}
                      >
                        <span>All</span>
                        <span>({STAYS_CARDS.length})</span>
                      </button>
                    </li>
                    {PROPERTY_OPTIONS.map((propertyType) => {
                      const count = getCountForOption(
                        "propertyType",
                        propertyType,
                      );
                      if (count === 0 && selectedPropertyType !== propertyType)
                        return null;
                      return (
                        <li key={propertyType}>
                          <button
                            type="button"
                            className={`stays-filter-btn ${selectedPropertyType === propertyType ? "active" : ""}`}
                            onClick={() =>
                              setSelectedPropertyType(propertyType)
                            }
                          >
                            <span>{propertyType}</span>
                            <span>({count})</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget_title">Amenities</h3>
                  <div className="stays-amenities-grid">
                    {allAmenities.map((amenity) => {
                      const count = getCountForOption("amenities", amenity);
                      if (count === 0 && !selectedAmenities.includes(amenity))
                        return null;
                      return (
                        <button
                          key={amenity}
                          type="button"
                          className={`stays-filter-chip ${selectedAmenities.includes(amenity) ? "active" : ""}`}
                          onClick={() =>
                            toggleMultiSelect(
                              setSelectedAmenities,
                              selectedAmenities,
                              amenity,
                            )
                          }
                        >
                          {amenity} ({count})
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Stays;
