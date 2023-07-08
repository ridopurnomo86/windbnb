import React from "react";
import { ApartmentCardPropsType } from "./types";
import StarIcon from "../../../assets/star-rounded.svg";
import "./styles.css";

const renderBeds = (beds: number | null, type: string) => {
  if (beds) return <p className="type-text">{`${type} . ${beds} beds`}</p>;
  return <p className="type-text">{type}</p>;
};

const ApartmentCard: React.FC<ApartmentCardPropsType> = ({
  imgUrl,
  description,
  type,
  rating,
  isSuperHost = false,
  beds,
}): JSX.Element => (
  <div className="apartment-card-container">
    <img
      className="card-image"
      src={imgUrl}
      alt={`image-${imgUrl}`}
      loading="lazy"
    />
    <div className="flex-between-container">
      <div className="flex-container">
        {isSuperHost && <span className="super-host-tag">SUPER HOST</span>}
        {renderBeds(beds, type)}
      </div>
      <div className="flex-container">
        <img src={StarIcon} alt="star-rating" />
        <p className="rating-text">{rating}</p>
      </div>
    </div>
    <p className="description-text">{description}</p>
  </div>
);

export default ApartmentCard;
