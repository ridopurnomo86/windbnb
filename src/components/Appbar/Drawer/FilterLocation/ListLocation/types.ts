import { StaysPropsType } from "../../../../types/stays";

export type ListLocationPropsType = {
  cities: StaysPropsType[];
  onChangeLocation: (value: StaysPropsType) => void;
};
