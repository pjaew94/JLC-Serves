import "./Achievements.scss";

const Achievements: React.FC = () => {
  return (
    <div className="achievements">
      <div className="left-top-container achievements-subcontainer">
        <div className="border-top"></div>
        <div className="border-left"></div>
        <div className="achievement meals">
          <h2 className="number">3600 +</h2>
          <h3 className="description">
            <span>Meals</span> and <span>drinks</span> prepared and distributed
          </h3>
        </div>
        <div className="achievement shoes">
          <h2 className="number">500 +</h2>
          <h3 className="description">
            <span>Shoes</span> and <span>boots</span> purchased and given out
          </h3>
        </div>
      </div>
      <div className="right-bottom-container achievements-subcontainer">
        <div className="border-bottom"></div>
        <div className="border-right"></div>
        <div className="achievement sleeping-bags">
          <h2 className="number">100 +</h2>
          <h3 className="description">
            <span>Sleeping bags</span> and <span>blankets</span> donated
          </h3>
        </div>
        <div className="achievement toiletries">
          <h2 className="number">300 +</h2>
          <h3 className="description">
            <span>Toiletries</span> prepared, packaged, and handed out
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
