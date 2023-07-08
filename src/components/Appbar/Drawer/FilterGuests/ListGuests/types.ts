export type ListGuestsPropsType = {
  onMinusAdults: (e: React.MouseEvent) => void;
  onMinusChildren: (e: React.MouseEvent) => void;
  onAddAdults: (e: React.MouseEvent) => void;
  onAddChildren: (e: React.MouseEvent) => void;
  totalAdults: number;
  totalChildren: number;
};
