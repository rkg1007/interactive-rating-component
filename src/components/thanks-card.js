import thanksImg from "../images/illustration-thank-you.svg";
import "../style.css";

function ThanksCard({rating}) {
  return (
    <div className="card">
      <div className="thanks-img">
        <img src={thanksImg} alt="thanks img" />
      </div>
      <div className="rating-selected">
        You selected {rating} out of 5
      </div>
      <div className="thanks-text">
        <h1>Thank you</h1>
        <p>
          We appreciate you taking the time to give a rating.
          If you ever need more support, don't hesitate to get in touch.
        </p>
      </div>
    </div>
  );
}

export default ThanksCard;
