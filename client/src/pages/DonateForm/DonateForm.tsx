import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "react-hook-form";
import TextareaAutoSize from "react-textarea-autosize";
import { useDispatch } from 'react-redux';
import { stageDonation } from './../../redux/actions/stripe';

import "./DonateForm.scss";

const stripePromise = loadStripe(
  "pk_test_51IUfrBJhW8qJo9NGLa5bT8ioIPUNBSd0dCIfLU7kWDwt1bxWgt90Gxx59ssei7H8IgQpu0jgT6stiabm8OPZVxub00FpULdVC0"
);

type Comment = {
  text: string;
  user: string;
  status: string;
};

type Inputs = {
  amount: number;
  donator: string;
  message?: string;
  location?: string;
  comment?: Comment[];
};

const DonateForm: React.FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {

    let { amount } = data
    if(data.donator === "") {
        data.donator = 'Anonymous'
    }
    

    try {
      // Get Stripe.js instance
      const stripe = await stripePromise;

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({ amount: +amount * 100});

        dispatch(stageDonation(data))

      // Call your backend to create the Checkout Session
      const res = await axios.post(
        "/api/stripe/create-donation-session",
        body,
        config
      );

      const session = res.data;

      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
         
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="form-container">
      <form className="donate-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="donate-text">Donate</h1>

        <div className="input-block">
          <h3 className="info amount">
            Enter Amount You Would Like To Donate <span>Required</span>
          </h3>
          <input name="amount" defaultValue=".00" ref={register} />
        </div>
        <div className="input-block">
          <h3 className="info donator">
            We Would Like To Thank You Personally! <span>Optional</span>
          </h3>
          <input name="donator" placeholder="Name" ref={register} />
        </div>
        <div className="input-block">
          <h3 className="info location">
            Let Us Know How Far The Word Spread! <span>Optional</span>
          </h3>
          <input name="location" placeholder="Location" ref={register} />
        </div>
        <div className="input-block">
          <h3 className="info message">
            Share Your Message<span>Optional</span>
          </h3>
          <TextareaAutoSize
            className="textarea"
            minRows={3}
            maxRows={8}
            name="message"
            ref={register}
          />
        </div>
        <div className="button-container">
          <button className="submit-button" type="submit">
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonateForm;
