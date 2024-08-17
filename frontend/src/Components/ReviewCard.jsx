// src/ReviewCard.js
import React from "react";

function ReviewCard({ avatar, name, review, rating }) {
  return (
    <div className="review-card">
      <div className="avatar">
        <img src={avatar} alt={`${name}'s avatar`} />
      </div>
      <div className="review-content">
        <h3 className="user-name">{name}</h3>
        <p className="review-text">{review}</p>
        <div className="rating">
          {Array.from({ length: 5 }, (v, i) => (
            <span key={i} className={i < rating ? "star filled" : "star"}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
