import React from "react";
import AddIcon from "../../../../../assets/add.svg";
import MinIcon from "../../../../../assets/min.svg";
import { ListGuestsPropsType } from "./types";
import "./styles.css";

const ListGuests: React.FC<ListGuestsPropsType> = ({
  onMinusAdults,
  onMinusChildren,
  onAddAdults,
  onAddChildren,
  totalAdults,
  totalChildren,
}): JSX.Element => (
  <div className="drawer-list-guests-container">
    <div>
      <p className="filter-text">Adults</p>
      <p className="filter-description-text">Ages 13 or above</p>
      <div className="filter-action-container">
        <button className="filter-button-container" onClick={onMinusAdults}>
          <img src={MinIcon} alt="min-icon" />
        </button>
        <p className="total-text">{totalAdults}</p>
        <button className="filter-button-container" onClick={onAddAdults}>
          <img src={AddIcon} alt="add-icon" />
        </button>
      </div>
    </div>
    <div className="mt-8">
      <p className="filter-text">Children</p>
      <p className="filter-description-text">Ages 2-12</p>
      <div className="filter-action-container">
        <button className="filter-button-container" onClick={onMinusChildren}>
          <img src={MinIcon} alt="min-icon" />
        </button>
        <p className="total-text">{totalChildren}</p>
        <button className="filter-button-container" onClick={onAddChildren}>
          <img src={AddIcon} alt="add-icon" />
        </button>
      </div>
    </div>
  </div>
);

export default ListGuests;
