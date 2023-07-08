export type FilterGuestsPropsType = {
  onClick: (e: React.SyntheticEvent) => void;
  showGuests: boolean;
  onMinusAdults: (e: React.MouseEvent) => void;
  onMinusChildren: (e: React.MouseEvent) => void;
  onAddAdults: (e: React.MouseEvent) => void;
  onAddChildren: (e: React.MouseEvent) => void;
  totalAdults: number;
  totalChildren: number;
  totalGuests: number;
};
