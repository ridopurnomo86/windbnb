import React, { useState, useContext } from "react";
import Logo from "../../assets/logo.png";
import SearchInput from "./SearchInput";
import Drawer from "./Drawer";
import { FilterContext, FilterContextType } from "../../context/FilterContext";
import "./styles.css";

const AppBar: React.FC = (): JSX.Element => {
  const {
    filter,
    handleAddAdults,
    handleMinusAdults,
    handleAddChildren,
    handleMinusChildren,
    handleFilterLocation,
  } = useContext(FilterContext) as FilterContextType;

  const [isShowDrawer, setIsShowDrawer] = useState(false);

  return (
    <div className="header-container">
      <header className="appbar-container">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <SearchInput
          location={`${filter?.city}, ${filter?.country}`}
          onClick={() => setIsShowDrawer((prev) => !prev)}
          totalGuests={Number(filter?.adults) + Number(filter?.children)}
        />
      </header>
      <Drawer
        totalGuests={Number(filter?.adults) + Number(filter?.children)}
        onChangeLocation={handleFilterLocation}
        location={`${filter?.city}, ${filter?.country}`}
        isShowDrawer={isShowDrawer}
        totalAdults={Number(filter?.adults)}
        totalChildren={Number(filter?.children)}
        onShowDrawer={setIsShowDrawer}
        onMinusAdults={handleMinusAdults}
        onAddAdults={handleAddAdults}
        onAddChildren={handleAddChildren}
        onMinusChildren={handleMinusChildren}
      />
    </div>
  );
};

export default AppBar;
