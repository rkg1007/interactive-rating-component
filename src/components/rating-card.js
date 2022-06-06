import { useState } from "react";
import star from "../images/icon-star.svg";
import "../style.css";

function RatingCard({ ratingHandler }) {
  const [ratingSelected, setRatingSelected] = useState(-1);

  return (
    <div className="card">
      <div className="star-img">
        <img src={star} alt="star img" />
      </div>
      <div className="rating-text">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offerings.
        </p>
      </div>
      <div className="buttons">
        <div className="rating-buttons">
          <button
            className={`rating-button ${
              ratingSelected === 1 ? "selected" : "notSelected"
            }`}
            onClick={() => setRatingSelected(1)}
          >
            1
          </button>
          <button
            className={`rating-button ${
              ratingSelected === 2 ? "selected" : "notSelected"
            }`}
            onClick={() => setRatingSelected(2)}
          >
            2
          </button>
          <button
            className={`rating-button ${
              ratingSelected === 3 ? "selected" : "notSelected"
            }`}
            onClick={() => setRatingSelected(3)}
          >
            3
          </button>
          <button
            className={`rating-button ${
              ratingSelected === 4 ? "selected" : "notSelected"
            }`}
            onClick={() => setRatingSelected(4)}
          >
            4
          </button>
          <button
            className={`rating-button ${
              ratingSelected === 5 ? "selected" : "notSelected"
            }`}
            onClick={() => setRatingSelected(5)}
          >
            5
          </button>
        </div>
        <div>
          <button
            className="submit-button"
            onClick={() => ratingHandler(ratingSelected)}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingCard;
