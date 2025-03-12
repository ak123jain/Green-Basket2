 


import { asynchandler } from "../utils/asynchandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Cashfree } from "cashfree-pg";

Cashfree.XClientId = process.env.CASHFREE_KEY_ID;
Cashfree.XClientSecret = process.env.CASHFREE_KEY_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

// Creating an order (receipt or bill) for the frontend to pay
const payment = asynchandler(async (req, res) => {
  const { order_amount, customer_details } = req.body;

  console.log("Order Amount Received:", req.body.order_amount, typeof req.body.order_amount);

  if (!order_amount || !customer_details) {
    return res.status(400).json({ success: false, message: "Invalid request" });
  }

  const request = {
    order_amount: order_amount.toString(),
    order_currency: "INR",
    customer_details: {
      customer_id: customer_details.customer_id,
      customer_name: customer_details.customer_name,
      customer_email: customer_details.customer_email,
      customer_phone: customer_details.customer_phone,
    },
    order_meta: {
      return_url: "https://test.cashfree.com/pgappsdemos/return.php?order_id=order_123",
    },
    order_note: "",
  };

  try {
    const response = await Cashfree.PGCreateOrder("2023-08-01", request);
    const paymentSessionId = response?.data?.payment_session_id;

    if (!paymentSessionId) {
      throw new Error("Failed to create payment session");
    }

    console.log("Response when order is created:", response.data);

    // Return the necessary details to the frontend
    return res.status(200).json({
      statuscode: 200,
      message: "Payment order created successfully",
      data: response.data,
      success: true,
    });
  } catch (error) {
    console.error("Error setting up order request:", error.response?.data || error.message);

    return res.status(500).json(
      new ApiResponse({
        success: false,
        messege: "Failed to create payment order",
        error: error.response?.data || error.message,
      })
    );
  }
});

export { payment };
