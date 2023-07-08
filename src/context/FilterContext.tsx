import React, { createContext, useState, useEffect } from "react";
import { StaysPropsType } from "../components/types/stays";
import STAYS from "../stays.json";

export type FilterProviderPropsType = {
  children: React.ReactNode | React.ReactElement;
};

export type FilterContextType = {
  filter?: FilterType;
  setFilter: (value: FilterType) => void;
  data?: StaysPropsType[];
  handleAddAdults: (e: React.MouseEvent) => void;
  handleMinusAdults: (e: React.MouseEvent) => void;
  handleAddChildren: (e: React.MouseEvent) => void;
  handleMinusChildren: (e: React.MouseEvent) => void;
  handleFilterLocation: (item: StaysPropsType) => void;
  handleFilterData: () => void;
};

export type FilterType = {
  city?: string;
  country?: string;
  adults?: number;
  children?: number;
};

export const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider: React.FC<FilterProviderPropsType> = ({
  children,
}) => {
  const [data, setData] = useState<StaysPropsType[]>(STAYS as StaysPropsType[]);
  const [filter, setFilter] = useState<FilterType>({
    city: "",
    country: "",
    adults: 0,
    children: 0,
  });

  useEffect(() => {
    if (data) {
      setData(STAYS as StaysPropsType[]);
      setFilter({
        city: STAYS[0].city,
        country: STAYS[0].country,
        adults: 0,
        children: 0,
      });
    }
  }, []);

  const handleFilterLocation = (item: FilterType) => {
    setFilter((prev) => ({ ...prev, city: item.city, country: item.country }));
  };

  const handleAddAdults = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFilter((prev) => ({ ...prev, adults: Number(prev.adults) + 1 }));
  };

  const handleMinusAdults = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (Number(filter.adults) > 0) {
      setFilter((prev) => ({ ...prev, adults: Number(prev.adults) - 1 }));
    }
  };

  const handleAddChildren = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFilter((prev) => ({ ...prev, children: Number(prev.children) + 1 }));
  };

  const handleMinusChildren = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (Number(filter.children) > 0) {
      setFilter((prev) => ({ ...prev, children: Number(prev.children) - 1 }));
    }
  };

  const handleFilterData = () => {
    const filterData = STAYS.filter(
      (item) => item.city === filter?.city && item.country === filter.country
    ) as StaysPropsType[];
    if (filterData) setData(filterData);
    return null;
  };

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        data,
        handleAddAdults,
        handleMinusAdults,
        handleAddChildren,
        handleMinusChildren,
        handleFilterLocation,
        handleFilterData,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
