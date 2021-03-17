import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Success.scss";

const Success: React.FC = () => {
  const { stripe } = useSelector((state: any) => state);

  return (
    <div className="success">
      <div className="success-content">
        <h1 className="thank-you">
          A Sincere Thank You From <span>Jesus Love Church</span> To You
          {stripe.donator !== "Anonymous" && ", "}
          {stripe.donator !== "Anonymous" && <span>{stripe.donator}</span>} For
          Your Donation of <span>${stripe.amount}</span>
        </h1>
        <div className="success-links">
          <Link className="link home-link" to="/">
            Home
          </Link>
          <Link className="link donations-link" to="/donations">
            All Donations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
