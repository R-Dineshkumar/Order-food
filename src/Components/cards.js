/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from './Images/star icon.png';

export default function Cards(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/restaurant/${props.info.id}`);
  }

  return (
    <div className="cards-container" onClick={handleClick}>
      <img src={props.info.image_url} className="card-img" alt={props.info.name} />
      <div className="card-content">
        <h2 className="card-name">{props.info.name}</h2>
        <p className="card-type">{props.info.cuisine}</p>
        <div className="rating-section">
          <img src={star} alt="rating" />
          <p>{props.info.user_rating.rating}</p>
          <p>
            {' '}
            (
            {props.info.user_rating.total_reviews}
            )
            {' '}
          </p>
        </div>
      </div>
    </div>
  );
}
