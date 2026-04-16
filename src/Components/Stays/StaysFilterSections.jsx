import React from "react";

/**
 * Shared filter UI for Stays desktop sidebar and mobile modal.
 */
function StaysFilterSections({
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
  staySizeFilterOptions,
  bedOptions,
  guestOptions,
  propertyOptions,
  allAmenities,
  totalStaysCount,
  getCountForOption,
  toggleMultiSelect,
  sectionClassName = "",
}) {
  return (
    <>
      <div className={`widget widget_categories stays-filter-section ${sectionClassName}`}>
        <h3 className="widget_title">Size</h3>
        <ul>
          <li>
            <button
              type="button"
              className={`stays-filter-btn ${selectedSize === "all" ? "active" : ""}`}
              onClick={() => setSelectedSize("all")}
            >
              <span>All</span>
              <span>({totalStaysCount})</span>
            </button>
          </li>
          {staySizeFilterOptions.map((size) => {
            const count = getCountForOption("size", size);
            if (count === 0 && selectedSize !== size) return null;
            return (
              <li key={size}>
                <button
                  type="button"
                  className={`stays-filter-btn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  <span>{size} m²</span>
                  <span>({count})</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`widget widget_categories stays-filter-section ${sectionClassName}`}>
        <h3 className="widget_title">Beds</h3>
        <ul>
          {bedOptions.map((bed) => {
            const count = getCountForOption("beds", bed);
            if (count === 0 && !selectedBeds.includes(bed)) return null;
            return (
              <li key={bed}>
                <button
                  type="button"
                  className={`stays-filter-btn ${selectedBeds.includes(bed) ? "active" : ""}`}
                  onClick={() =>
                    toggleMultiSelect(setSelectedBeds, selectedBeds, bed)
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

      <div className={`widget widget_categories stays-filter-section ${sectionClassName}`}>
        <h3 className="widget_title">Guests</h3>
        <ul>
          <li>
            <button
              type="button"
              className={`stays-filter-btn ${selectedGuests === "all" ? "active" : ""}`}
              onClick={() => setSelectedGuests("all")}
            >
              <span>All</span>
              <span>({totalStaysCount})</span>
            </button>
          </li>
          {guestOptions.map((guest) => {
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

      <div className={`widget widget_categories stays-filter-section ${sectionClassName}`}>
        <h3 className="widget_title">Property Type</h3>
        <ul>
          <li>
            <button
              type="button"
              className={`stays-filter-btn ${selectedPropertyType === "all" ? "active" : ""}`}
              onClick={() => setSelectedPropertyType("all")}
            >
              <span>All</span>
              <span>({totalStaysCount})</span>
            </button>
          </li>
          {propertyOptions.map((propertyType) => {
            const count = getCountForOption("propertyType", propertyType);
            if (count === 0 && selectedPropertyType !== propertyType)
              return null;
            return (
              <li key={propertyType}>
                <button
                  type="button"
                  className={`stays-filter-btn ${selectedPropertyType === propertyType ? "active" : ""}`}
                  onClick={() => setSelectedPropertyType(propertyType)}
                >
                  <span>{propertyType}</span>
                  <span>({count})</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`widget widget_categories stays-filter-section ${sectionClassName}`}>
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
    </>
  );
}

export default StaysFilterSections;
