import React, { useState } from "react";
import RatingCard from "./components/rating-card";
import ThanksCard from "./components/thanks-card";
import "./style.css";

function App() {

  const [rating, setRating] = useState(-1);

  function ratingSubmit(selectedRating) {
    setRating(selectedRating);
  }

  return (
    <div className="app">
      {
        rating === -1
        ? <RatingCard ratingHandler={ratingSubmit}/>
          : <ThanksCard rating={rating} />
      }
    </div>
  );
}

export default App;
