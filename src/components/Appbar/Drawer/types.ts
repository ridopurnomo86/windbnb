import { StaysPropsType } from "../../types/stays";

export type DrawerPropsType = {
  location: string;
  isShowDrawer: boolean;
  onShowDrawer: (value: boolean) => void;
  onChangeLocation: (value: StaysPropsType) => void;
  onMinusAdults: (e: React.MouseEvent) => void;
  onMinusChildren: (e: React.MouseEvent) => void;
  onAddAdults: (e: React.MouseEvent) => void;
  onAddChildren: (e: React.MouseEvent) => void;
  totalAdults: number;
  totalChildren: number;
  totalGuests: number;
};
