import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { addMonths, format, isValid, parse, startOfDay, startOfMonth } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-day-picker/style.css";
import "./BookingDatePicker.css";
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

const ISO_DATE = "yyyy-MM-dd";

function formatStoredDateForLabel(iso) {
  if (!iso) {
    return "";
  }

  const parsed = parse(iso, ISO_DATE, new Date());
  return isValid(parsed) ? format(parsed, "MMM d, yyyy", { locale: enUS }) : iso;
}

function parseStoredDate(iso) {
  if (!iso) {
    return undefined;
  }

  const parsed = parse(iso, ISO_DATE, new Date());
  return isValid(parsed) ? parsed : undefined;
}

function Booking() {
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
  const [visibleMonth, setVisibleMonth] = useState(() =>
    startOfMonth(parseStoredDate(checkInDate) ?? new Date())
  );
  const datePickerRef = useRef(null);
  const guestsPickerRef = useRef(null);

  const datesLabel = useMemo(() => {
    if (checkInDate && checkOutDate) {
      return `${formatStoredDateForLabel(checkInDate)} – ${formatStoredDateForLabel(checkOutDate)}`;
    }

    if (checkInDate) {
      return `${formatStoredDateForLabel(checkInDate)} – Select checkout`;
    }

    return "Select Dates";
  }, [checkInDate, checkOutDate]);

  const selectedRange = useMemo(() => {
    const from = parseStoredDate(checkInDate);
    if (!from) {
      return undefined;
    }

    if (!checkOutDate) {
      return { from, to: undefined };
    }

    const to = parseStoredDate(checkOutDate);
    return { from, to: to ?? undefined };
  }, [checkInDate, checkOutDate]);

  const calendarDefaultMonth = useMemo(() => {
    return parseStoredDate(checkInDate) ?? new Date();
  }, [checkInDate]);

  const rightSideMonth = useMemo(
    () => startOfMonth(addMonths(visibleMonth, 1)),
    [visibleMonth]
  );

  const handleRangeSelect = (range) => {
    if (!range?.from) {
      setCheckInDate("");
      setCheckOutDate("");
      return;
    }

    setCheckInDate(format(range.from, "yyyy-MM-dd"));
    setCheckOutDate(range.to ? format(range.to, "yyyy-MM-dd") : "");
  };

  const shiftVisibleMonth = (monthsToAdd) => {
    setVisibleMonth((current) => startOfMonth(addMonths(current, monthsToAdd)));
  };

  const toggleDatePicker = (event) => {
    if (event.target.closest(".booking-date-dropdown__calendar")) {
      return;
    }

    setIsDatePickerOpen((prev) => !prev);
  };

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
    if (!isDatePickerOpen) {
      return;
    }

    setVisibleMonth(startOfMonth(calendarDefaultMonth));
  }, [isDatePickerOpen, calendarDefaultMonth]);

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
                  <div
                    className="nice-select-wrapper booking-date-dropdown"
                    ref={datePickerRef}
                  >
                    <div
                      className={`nice-select ${isDatePickerOpen ? "open" : ""}`}
                      onClick={toggleDatePicker}
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
                      <ul
                        className="list booking-date-dropdown__calendar"
                        onMouseDown={(event) => event.stopPropagation()}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <li className="booking-date-dropdown__calendar-inner">
                          <div className="booking-date-dropdown__month-headers">
                            <div className="booking-date-dropdown__month-nav">
                              <button
                                type="button"
                                className="booking-date-dropdown__arrow"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  shiftVisibleMonth(-1);
                                }}
                                aria-label="Previous month"
                              >
                                <i className="fa-light fa-chevron-left" />
                              </button>
                              <span className="booking-date-dropdown__month-title">
                                {format(visibleMonth, "MMMM yyyy")}
                              </span>
                              <span
                                className="booking-date-dropdown__arrow booking-date-dropdown__arrow--placeholder"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="booking-date-dropdown__month-nav">
                              <span
                                className="booking-date-dropdown__arrow booking-date-dropdown__arrow--placeholder"
                                aria-hidden="true"
                              />
                              <span className="booking-date-dropdown__month-title">
                                {format(rightSideMonth, "MMMM yyyy")}
                              </span>
                              <button
                                type="button"
                                className="booking-date-dropdown__arrow"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  shiftVisibleMonth(1);
                                }}
                                aria-label="Next month"
                              >
                                <i className="fa-light fa-chevron-right" />
                              </button>
                            </div>
                          </div>
                          <DayPicker
                            mode="range"
                            weekStartsOn={1}
                            locale={enUS}
                            numberOfMonths={2}
                            month={visibleMonth}
                            selected={selectedRange}
                            onSelect={handleRangeSelect}
                            disabled={{ before: startOfDay(new Date()) }}
                            className="booking-rdp"
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
                          <div className="d-flex align-items-center gap-2 justify-content-between">
                            <button
                              type="button"
                              className="th-btn style2"
                              onClick={(event) => {
                                event.stopPropagation();
                                updateGuestCount("adults", "decrement");
                              }}
                              style={{
                                width: "20px",
                                height: "20px",
                                padding: "7px",
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
                              style={{
                                width: "20px",
                                height: "20px",
                                padding: "7px",
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
                              style={{
                                width: "20px",
                                height: "20px",
                                padding: "7px",
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
                              style={{
                                width: "20px",
                                height: "20px",
                                padding: "7px",
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
