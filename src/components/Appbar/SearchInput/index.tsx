import React from "react";
import SearchIcon from "../../../assets/search-icon.svg";
import "./styles.css";
import { SearchInputPropsType } from "./types";

const SearchInput: React.FC<SearchInputPropsType> = ({
  location,
  onClick,
  totalGuests,
}): JSX.Element => (
  <button className="search-input-container" onClick={onClick}>
    <p className="search-input-location-text">{location}</p>
    <p className="search-input-guest-text">
      {totalGuests ? `${totalGuests} Guests` : "Add Guests"}
    </p>
    <img src={SearchIcon} alt="search" />
  </button>
);

export default SearchInput;
