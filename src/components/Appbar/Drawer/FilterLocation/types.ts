import React from "react";
import { StaysPropsType } from "../../../types/stays";

export type FilterLocationPropsType = {
  cities: StaysPropsType[];
  location: string;
  onClick: (e: React.SyntheticEvent) => void;
  showCities: boolean;
  onChangeLocation: (value: StaysPropsType) => void;
};
