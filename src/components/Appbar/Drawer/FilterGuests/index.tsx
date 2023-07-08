import React from "react";
import { FilterGuestsPropsType } from "./types";
import ListGuests from "./ListGuests";
import "./styles.css";

const FilterGuests: React.FC<FilterGuestsPropsType> = ({
  onClick,
  showGuests,
  onMinusAdults,
  onMinusChildren,
  onAddAdults,
  onAddChildren,
  totalAdults,
  totalChildren,
  totalGuests,
}): JSX.Element => (
  <div className="drawer-filter-guests-container">
    <div
      className="drawer-guests-button"
      data-active={showGuests}
      onClick={onClick}
    >
      <p className="drawer-guests-text">Guests</p>
      <p className="drawer-total-guests-text">
        {totalGuests ? `${totalGuests} Guests` : "Add Guests"}
      </p>
    </div>
    {showGuests && (
      <ListGuests
        totalAdults={totalAdults}
        totalChildren={totalChildren}
        onAddAdults={onAddAdults}
        onAddChildren={onAddChildren}
        onMinusAdults={onMinusAdults}
        onMinusChildren={onMinusChildren}
      />
    )}
  </div>
);

export default FilterGuests;
