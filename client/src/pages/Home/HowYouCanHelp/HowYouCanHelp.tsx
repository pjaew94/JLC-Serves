import "./HowYouCanHelp.scss";

const HowYouCanHelp: React.FC = () => {
  return (
    <div className="how-you-can-help">
      <h3 className="hych-text">HOW YOU CAN HELP</h3>
      <h1 className="hych-heading-text">
        Coming Together With <span>Purpose</span>
      </h1>
      <div className="hych-content">
        <div className="up-to-now hych-content-section">
          <h2 className="hych-section-title"><span>&#8212;</span>Early Journey</h2>
          <p className="hych-description">
            In the beginning, all of our missions were funded by our church
            members. We carried 100 meals every trip, each containing a hot dog,
            bag of chips, and water for each meal. It was after a few trips we
            realized that it was not enough.
          </p>
        </div>
        <div className="what hych-content-section">
          <h2 className="hych-section-title"><span>&#8212;</span>Up To Now</h2>
          <p className="hych-description">
            We have made a long way since we have started. With the help of
            donations from local churches, organizations, and many others, we
            were able to donate essentials such as toiletries, sleeping bags,
            and boots for the winter.{" "}
          </p>
        </div>
        <div className="how hych-content-section">
          <h2 className="hych-section-title"><span>&#8212;</span>Your Donation</h2>
          <p className="hych-description">
            By donating, you will be making a direct impact on the lives of the
            homeless in Philadelphia. No donation will used for profiting our
            organization. Any additional funding will be used to support our
            local churches and the missionaries in North Korea, risking their
            lives to spread the gospel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowYouCanHelp;
