import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderOne from "../Components/Header/HeaderOne";
import FooterOne from "../Components/Footer/FooterOne";

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
  { value: "private-room", label: "Private Room (Verde)" },
  { value: "entire-villa", label: "Entire Villa (Antares)" },
];

const STAYS_DATA = [
  {
    id: "verde-room-1",
    title: "Villa Verde - Garden Room",
    property: "villa-verde-guesthouse",
    stayType: "private-room",
    description: "Private room in Villa Verde with garden view.",
  },
  {
    id: "verde-room-2",
    title: "Villa Verde - Terrace Room",
    property: "villa-verde-guesthouse",
    stayType: "private-room",
    description: "Private room in Villa Verde with private terrace access.",
  },
  {
    id: "antares-villa",
    title: "Villa Antares - Entire Villa",
    property: "villa-antares-private-villa",
    stayType: "entire-villa",
    description: "Exclusive full-villa stay at Villa Antares.",
  },
];

function Stays() {
  const location = useLocation();
  const incomingFilters = location.state || {};
  const [property, setProperty] = useState(incomingFilters.property || "all");
  const [stayType, setStayType] = useState(incomingFilters.type || "all-types");
  const [dates, setDates] = useState({
    checkIn: incomingFilters.dates?.checkIn || "",
    checkOut: incomingFilters.dates?.checkOut || "",
  });
  const [guests, setGuests] = useState({
    adults: incomingFilters.guests?.adults ?? 2,
    children: incomingFilters.guests?.children ?? 0,
  });

  const filteredStays = useMemo(() => {
    return STAYS_DATA.filter((stay) => {
      const propertyMatch = property === "all" || stay.property === property;
      const stayTypeMatch =
        stayType === "all-types" || stay.stayType === stayType;
      return propertyMatch && stayTypeMatch;
    });
  }, [property, stayType]);

  const totalGuests = guests.adults + guests.children;
  const showMultiRoomHint = totalGuests > 3;

  const handleReset = () => {
    setProperty("all");
    setStayType("all-types");
    setDates({ checkIn: "", checkOut: "" });
    setGuests({ adults: 2, children: 0 });
  };

  return (
    <>
      <HeaderOne />
      <div className="breadcumb-wrapper">
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Our Stays</h1>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <h2>Stays and Accommodations</h2>
          <div className="row gy-3 mb-4">
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Property</label>
              <select
                className="form-select"
                value={property}
                onChange={(event) => setProperty(event.target.value)}
              >
                {PROPERTY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Stay Type</label>
              <select
                className="form-select"
                value={stayType}
                onChange={(event) => setStayType(event.target.value)}
              >
                {STAY_TYPE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Check-in</label>
              <input
                className="form-control"
                type="date"
                value={dates.checkIn}
                onChange={(event) =>
                  setDates((prev) => ({ ...prev, checkIn: event.target.value }))
                }
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Check-out</label>
              <input
                className="form-control"
                type="date"
                value={dates.checkOut}
                onChange={(event) =>
                  setDates((prev) => ({
                    ...prev,
                    checkOut: event.target.value,
                  }))
                }
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Adults</label>
              <input
                className="form-control"
                type="number"
                min="0"
                max="10"
                value={guests.adults}
                onChange={(event) =>
                  setGuests((prev) => ({
                    ...prev,
                    adults: Math.max(
                      0,
                      Math.min(10, Number(event.target.value) || 0),
                    ),
                  }))
                }
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="form-label">Children</label>
              <input
                className="form-control"
                type="number"
                min="0"
                max="10"
                value={guests.children}
                onChange={(event) =>
                  setGuests((prev) => ({
                    ...prev,
                    children: Math.max(
                      0,
                      Math.min(10, Number(event.target.value) || 0),
                    ),
                  }))
                }
              />
            </div>
            <div className="col-12">
              <p className="mb-0">
                Guests: {totalGuests} total (dates are informational in this
                version).
              </p>
              {showMultiRoomHint && (
                <p className="mb-0 text-muted">
                  Larger groups may require multiple rooms for Villa Verde.
                </p>
              )}
            </div>
          </div>

          {filteredStays.length === 0 ? (
            <div className="text-center p-4 border rounded">
              <h3 className="h5 mb-2">No stays match your filters</h3>
              <p className="mb-3">
                Try resetting filters to view all available stays.
              </p>
              <button type="button" className="th-btn" onClick={handleReset}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="row gy-4">
              {filteredStays.map((stay) => (
                <div key={stay.id} className="col-md-6">
                  <div className="border rounded p-3 h-100">
                    <h3 className="h5">{stay.title}</h3>
                    <p className="mb-1">{stay.description}</p>
                    <small className="text-muted">
                      {stay.property === "villa-verde-guesthouse"
                        ? "Property: Villa Verde — Guesthouse"
                        : "Property: Villa Antares — Private Villa"}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <FooterOne />
    </>
  );
}

export default Stays;
