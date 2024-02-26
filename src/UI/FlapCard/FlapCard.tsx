import  { useState } from 'react';
import './FlapCard.css';
import img from '/img/1.png'
const FlapCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          {/* Front content */}
          <img src={img} alt="robotImage" className="w-full rounded-lg" />
        </div>
        <div className="card-back">
          {/* Back content */}
          <h2>BOTATHON</h2>
          <p>
            Unleash the power of automation in BOTATHON! Join forces, submit
            your scenarios, and witness bots come to life at IDEA SUMMIT and BOT
            EXPO.
          </p>
          <div className="card-buttons">
            <button className="outline">Know more</button>
            <button className="secondary">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlapCard;
