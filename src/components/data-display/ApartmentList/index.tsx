import React, { useContext } from "react";
import "./styles.css";
import ApartmentCard from "../../cards/ApartmentCard";
import {
  FilterContext,
  FilterContextType,
} from "../../../context/FilterContext";

const ApartmentList: React.FC = (): JSX.Element => {
  const { data } = useContext(FilterContext) as FilterContextType;

  return (
    <div className="grid-container">
      {data?.map((item, key) => (
        <ApartmentCard
          key={key}
          beds={item.beds}
          description={item.title}
          imgUrl={item.photo}
          isSuperHost={item.superHost}
          rating={item.rating}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default ApartmentList;
