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
  const datePickerRef = useRef(null);
  const guestsPickerRef = useRef(null);

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

    setFormMessage({ text: "Search submitted successfully!", type: "success" });

    setFormData({
      destination: "",
      adventureType: "",
      duration: "",
      category: "",
    });
  };

  return (
    <div className="booking-sec">
      <div className="container">
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="input-wrap">
            <div className="row align-items-center justify-content-between">
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-light fa-route" />
                </div>
                <div className="search-input">
                  <label>Destination</label>
                  <NiceSelect
                    options={destinationOptions}
                    defaultValue="Select Destination"
                    onChange={(value) => handleChange("destination", value)}
                  />
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-regular fa-person-hiking" />
                </div>
                <div className="search-input">
                  <label>Type</label>
                  <NiceSelect
                    options={adventureOptions}
                    defaultValue="Adventure"
                    onChange={(value) => handleChange("adventureType", value)}
                  />
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-light fa-clock" />
                </div>
                <div className="search-input">
                  <label>Duration</label>
                  <NiceSelect
                    options={durationOptions}
                    defaultValue="Duration"
                    onChange={(value) => handleChange("duration", value)}
                  />
                </div>
              </div>
              <div className="form-group col-md-6 col-lg-auto">
                <div className="icon">
                  <i className="fa-light fa-map-location-dot" />
                </div>
                <div className="search-input">
                  <label>Tour Category</label>
                  <NiceSelect
                    options={categoryOptions}
                    defaultValue="Select Category"
                    onChange={(value) => handleChange("category", value)}
                  />
                </div>
              </div>
              <div className="form-btn col-md-12 col-lg-auto">
                <button className="th-btn" type="submit">
                  <img src="/assets/img/icon/search.svg" alt="" />
                  Search
                </button>
              </div>
            </div>

            {/* Form Message Display */}
            {formMessage.text && (
              <p
                className={`form-messages mb-0 mt-3 ${formMessage.type === "error" ? "text-danger" : "text-success"}`}
              >
                {formMessage.text}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;
