const express = require("express");
const router = express.Router();
const { config } = require('dotenv');
config({path: __dirname + '../config/.env'});

const stripe = require("stripe")(
  process.env.STRIPE_KEY
);

router.post("/create-donation-session", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: "JLC Serves Donation"
                    },
                    unit_amount: req.body.amount
                },
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: 'https://localhost:3000/success',
        cancel_url: 'https://localhost:3000/cancel'
    });

    res.json({ id: session.id, amount: req.body.amount})
});

module.exports = router