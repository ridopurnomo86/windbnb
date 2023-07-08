import React from "react";
import { FilterLocationPropsType } from "./types";
import ListLocation from "./ListLocation";
import "./styles.css";

const FilterLocation: React.FC<FilterLocationPropsType> = ({
  cities,
  location,
  onClick,
  showCities,
  onChangeLocation,
}): JSX.Element => (
  <div className="drawer-filter-location-container">
    <div
      className="drawer-location-button"
      data-active={showCities}
      onClick={onClick}
    >
      <p className="drawer-location-text">Location</p>
      <p className="drawer-place-location-text">{location}</p>
    </div>
    <div className="drawer-list-responsive">
      {showCities && (
        <ListLocation cities={cities} onChangeLocation={onChangeLocation} />
      )}
    </div>
  </div>
);

export default FilterLocation;
