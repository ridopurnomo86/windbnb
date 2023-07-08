import React, { useState, useRef, useContext, useEffect } from "react";
import "./styles.css";
import { DrawerPropsType } from "./types";
import STAYS from "../../../stays.json";
import SearchIcon from "../../../assets/search-icon-white.svg";
import FilterLocation from "./FilterLocation";
import { StaysPropsType } from "../../types/stays";
import FilterGuests from "./FilterGuests";
import {
  FilterContext,
  FilterContextType,
} from "../../../context/FilterContext";
import ListLocation from "./FilterLocation/ListLocation";

const cities = STAYS.map((item) => item.city);
const valuesCities = STAYS.filter(
  (item, idx) => !cities.includes(item.city, idx + 1)
);

const Drawer: React.FC<DrawerPropsType> = ({
  location,
  onChangeLocation,
  isShowDrawer,
  onShowDrawer,
  onMinusAdults,
  onMinusChildren,
  onAddAdults,
  onAddChildren,
  totalAdults,
  totalChildren,
  totalGuests,
}): JSX.Element => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const { handleFilterData } = useContext(FilterContext) as FilterContextType;

  const [filterType, setFilterType] = useState<"location" | "guests">();

  const handleSearch = () => {
    handleFilterData();
    onShowDrawer(false);
  };

  const handleCloseDrawer = () => {
    onShowDrawer(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as any)
      ) {
        onShowDrawer(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerRef]);

  return (
    <>
      <div className="overlay-container" data-show-overlay={isShowDrawer}></div>
      <div
        className={`drawer-container ${
          isShowDrawer ? "drawer-active" : "drawer-inactive"
        }`}
        ref={drawerRef}
        onClick={handleCloseDrawer}
      >
        <FilterLocation
          onClick={(e) => {
            e.stopPropagation();
            setFilterType("location");
          }}
          onChangeLocation={onChangeLocation}
          cities={valuesCities as StaysPropsType[]}
          location={location}
          showCities={filterType === "location"}
        />
        <FilterGuests
          totalGuests={totalGuests}
          totalAdults={totalAdults}
          totalChildren={totalChildren}
          onAddAdults={onAddAdults}
          onAddChildren={onAddChildren}
          onMinusAdults={onMinusAdults}
          onMinusChildren={onMinusChildren}
          onClick={(e) => {
            e.stopPropagation();
            setFilterType("guests");
          }}
          showGuests={filterType === "guests"}
        />
        <div className="list-location-responsive">
          {filterType === "location" && (
            <ListLocation
              cities={valuesCities as StaysPropsType[]}
              onChangeLocation={onChangeLocation}
            />
          )}
        </div>
        <button className="search-button" onClick={handleSearch}>
          <img src={SearchIcon} alt="search" />
          <p className="button-text">Search</p>
        </button>
      </div>
    </>
  );
};

export default Drawer;
