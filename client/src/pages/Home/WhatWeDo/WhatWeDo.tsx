import "./WhatWeDo.scss";

const WhatWeDo: React.FC = () => {
  return (
    <div className="what-we-do">
      <h3 className="wwd-text">WHAT WE DO</h3>
      <h1 className="wwd-heading-text">
        <span>Serving</span> the Philadelphia Community
      </h1>
      <div className="wwd-content">
        <div className="when-and-where wwd-content-section">
          <h2 className="wwd-section-title"><span>&#8212;</span>When & Where</h2>
          <p className="wwd-description">
            We currently travel to Love Park, Philadelphia every Sunday between
            2PM and 3PM for our missions. We also rotate to Reading Terminal
            Market to hand out whatever we can.
          </p>
        </div>
        <div className="what wwd-content-section">
          <h2 className="wwd-section-title"><span>&#8212;</span>What</h2>
          <p className="wwd-description">
            Each of our meals we prepare include 4 pieces of fried chicken,
            chips, bread, and water. During the winter, we also provide hot
            chocolate, coffee, and ramen noodles for the homeless.
          </p>
        </div>
        <div className="how wwd-content-section">
          <h2 className="wwd-section-title"><span>&#8212;</span>How</h2>
          <p className="wwd-description">
            Each our of meals are purchased, prepared, and packaged by members
            of our congregation. Most importantly, none of this would have been
            possible without the help of God and Him looking over us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
