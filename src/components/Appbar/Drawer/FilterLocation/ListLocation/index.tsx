import React from "react";
import LocationIcon from "../../../../../assets/location.svg";
import { ListLocationPropsType } from "./types";
import "./styles.css";

const ListLocation: React.FC<ListLocationPropsType> = ({
  cities,
  onChangeLocation,
}): JSX.Element => (
  <div className="drawer-list-location-container">
    {cities.map((item, key) => (
      <div
        key={key}
        className="info-location-container"
        onClick={(e) => {
          e.stopPropagation();
          onChangeLocation(item);
        }}
      >
        <img src={LocationIcon} alt="location-icon" />
        <p className="info-location-text">{`${item.city}, ${item.country}`}</p>
      </div>
    ))}
  </div>
);

export default ListLocation;
