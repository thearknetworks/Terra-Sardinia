import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NiceSelect from "../Header/NiceSelect";

const PROPERTY_OPTIONS = [
  { value: "all", label: "All Stays" },
  { value: "villa-verde-guesthouse", label: "Villa Verde — Guesthouse" },
  {
    value: "villa-antares-private-villa",
    label: "Villa Antares — Private Villa",
  },
];

const STAY_TYPE_OPTIONS = [
  { value: "all-types", label: "All Types" },
  { value: "entire-villa", label: "Entire Villa (Antares)" },
  { value: "private-room", label: "Private Room (Verde)" },
];

const STAYS = [
  {
    id: "villa-verde-guesthouse",
    name: "Villa Verde — Guesthouse",
    stayType: "private-room",
  },
  {
    id: "villa-antares-private-villa",
    name: "Villa Antares — Private Villa",
    stayType: "entire-villa",
  },
];

function Booking({ onPropertyFilterChange, onFiltersChange }) {
  const navigate = useNavigate();
  const { lang } = useParams();
  const [selectedProperty, setSelectedProperty] = useState("all");
  const [selectedStayType, setSelectedStayType] = useState("all-types");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const datePickerRef = useRef(null);
  const guestsPickerRef = useRef(null);

  const filteredStays = useMemo(() => {
    return STAYS.filter((stay) => {
      const matchesProperty =
        selectedProperty === "all" || stay.id === selectedProperty;
      const matchesStayType =
        selectedStayType === "all-types" || stay.stayType === selectedStayType;

      return matchesProperty && matchesStayType;
    });
  }, [selectedProperty, selectedStayType]);

  const datesLabel = useMemo(() => {
    if (checkInDate && checkOutDate) {
      return `${checkInDate} - ${checkOutDate}`;
    }

    if (checkInDate) {
      return `${checkInDate} - Select checkout`;
    }

    return "Select Dates";
  }, [checkInDate, checkOutDate]);

  const guestsLabel = useMemo(() => {
    if (!adults && !children) {
      return "Guests";
    }

    if (!children) {
      return `${adults} Adult${adults > 1 ? "s" : ""}`;
    }

    return `${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${children > 1 ? "ren" : ""}`;
  }, [adults, children]);

  const updateGuestCount = (type, operation) => {
    const update = (currentValue) => {
      if (operation === "increment") {
        return Math.min(10, currentValue + 1);
      }

      return Math.max(0, currentValue - 1);
    };

    if (type === "adults") {
      setAdults((current) => update(current));
      return;
    }

    setChildren((current) => update(current));
  };

  const handleSearch = () => {
    navigate(`/${lang || "en"}/stays`, {
      state: {
        property: selectedProperty,
        dates: {
          checkIn: checkInDate,
          checkOut: checkOutDate,
        },
        guests: {
          adults,
          children,
        },
        type: selectedStayType,
      },
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setIsDatePickerOpen(false);
      }

      if (
        guestsPickerRef.current &&
        !guestsPickerRef.current.contains(event.target)
      ) {
        setIsGuestsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const filterPayload = {
      selectedProperty,
      selectedStayType,
      filteredStays,
      checkInDate,
      checkOutDate,
      adults,
      children,
    };

    if (onPropertyFilterChange) {
      onPropertyFilterChange(filterPayload);
    }

    if (onFiltersChange) {
      onFiltersChange(filterPayload);
    }
  }, [
    checkInDate,
    checkOutDate,
    adults,
    children,
    filteredStays,
    onFiltersChange,
    onPropertyFilterChange,
    selectedProperty,
    selectedStayType,
  ]);

  return (
    <div className="booking-sec">
      <div className="container">
        <div className="booking-form">
          <div className="input-wrap">
            <div className="row align-items-center justify-content-between">
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-light fa-route" />
                </div>
                <div className="search-input">
                  <label>Property</label>
                  <NiceSelect
                    options={PROPERTY_OPTIONS}
                    defaultValue="Select Stay"
                    onChange={setSelectedProperty}
                  />
                </div>
              </div>

              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-light fa-clock" />
                </div>
                <div className="search-input">
                  <label>Dates</label>
                  <div className="nice-select-wrapper" ref={datePickerRef}>
                    <div
                      className={`nice-select ${isDatePickerOpen ? "open" : ""}`}
                      onClick={() => setIsDatePickerOpen((prev) => !prev)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setIsDatePickerOpen((prev) => !prev);
                        }
                      }}
                    >
                      <span className="current">{datesLabel}</span>
                      <ul className="list">
                        <li className="option">
                          <input
                            type="date"
                            value={checkInDate}
                            onChange={(event) =>
                              setCheckInDate(event.target.value)
                            }
                            onClick={(event) => event.stopPropagation()}
                          />
                        </li>
                        <li className="option">
                          <input
                            type="date"
                            value={checkOutDate}
                            onChange={(event) =>
                              setCheckOutDate(event.target.value)
                            }
                            onClick={(event) => event.stopPropagation()}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-light fa-user-group" />
                </div>
                <div className="search-input">
                  <label>Guests</label>
                  <div className="nice-select-wrapper" ref={guestsPickerRef}>
                    <div
                      className={`nice-select ${isGuestsOpen ? "open" : ""}`}
                      onClick={() => setIsGuestsOpen((prev) => !prev)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setIsGuestsOpen((prev) => !prev);
                        }
                      }}
                    >
                      <span className="current">{guestsLabel}</span>
                      <ul className="list">
                        <li className="option d-flex align-items-center justify-content-between">
                          <span>Adults</span>
                          <div className="d-flex align-items-center gap-2">
                            <button
                              type="button"
                              className="th-btn style2"
                              onClick={(event) => {
                                event.stopPropagation();
                                updateGuestCount("adults", "decrement");
                              }}
                            >
                              -
                            </button>
                            <span>{adults}</span>
                            <button
                              type="button"
                              className="th-btn style2"
                              onClick={(event) => {
                                event.stopPropagation();
                                updateGuestCount("adults", "increment");
                              }}
                            >
                              +
                            </button>
                          </div>
                        </li>
                        <li className="option d-flex align-items-center justify-content-between">
                          <span>Children</span>
                          <div className="d-flex align-items-center gap-2">
                            <button
                              type="button"
                              className="th-btn style2"
                              onClick={(event) => {
                                event.stopPropagation();
                                updateGuestCount("children", "decrement");
                              }}
                            >
                              -
                            </button>
                            <span>{children}</span>
                            <button
                              type="button"
                              className="th-btn style2"
                              onClick={(event) => {
                                event.stopPropagation();
                                updateGuestCount("children", "increment");
                              }}
                            >
                              +
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-light fa-house" />
                </div>
                <div className="search-input">
                  <label>Stay Type</label>
                  <NiceSelect
                    options={STAY_TYPE_OPTIONS}
                    defaultValue="All Types"
                    onChange={setSelectedStayType}
                  />
                </div>
              </div>

              <div className="form-btn col-md-12 col-lg-auto">
                <button className="th-btn" type="button" onClick={handleSearch}>
                  <img src="/assets/img/icon/search.svg" alt="" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
