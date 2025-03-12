//  import axios from 'axios';
//  import { useEffect } from 'react';
//  import { useLocation } from 'react-router-dom';
  
 
//  const Payment = () => {


//      const location = useLocation();
//      const totalamount = location.state?.totalamount; // Get totalamount from Link state
 
//      useEffect(() => {
//          const initialpayment = async () => {
//              try {

//                  const response = await axios.post('http://localhost:3001/payments/payment', {
//                      order_amount: totalamount, // Use the total amount here
//                      order_currency: "INR",
//                      customer_details: {
//                          customer_id: "akash123",
//                          customer_name: "akash",
//                          customer_email: "aj988276@gmail.com",
//                          customer_phone: "1234567890",
//                      },
//                  });

//                  console.log("lalit see the response" , response.data);


                 
                
//                  if (response?.data.statuscode === 200) {
                     
//                      const checkoutOption = {
//                          paymentSessionId:  response?.data?.data?.payment_session_id,
//                          redirectTarget: "_self",
//                      };
//                      console.log("Checkout options:", checkoutOption); 

//                      console.log("Cashfree object:", window.cashfree);

//                      if (window.cashfree) {
//                         window.cashfree.checkout(checkoutOption);
//                      } else {
//                              console.error("Cashfree SDK not loaded.");
//                      }
//                  } else {
//                      console.error("Payment order creation failed:", response.data.message);
//                  }


//                  const loadcashfree = () =>{
//                     const script = document.createElement('script');
//                     script.src = 'https://sdk.cashfree.com/js/v3/cashfree.min.js';
                    
//                     script.onload = () => {
//                         console.log("Cashfree SDK loaded:", window.cashfree);
//                     };
//                     script.onerror = () => console.error("Failed to load Cashfree SDK.");

//                     document.body.appendChild(script);
//                  }

//                  await loadcashfree();



//              } catch (error) {
//                  console.error("Error during payment order creation:", error);
//              }
//          };

//          if (totalamount) {
//             initialpayment(); // Call the payment function
//         } else {
//             console.error("Total amount is not defined.");
//         }
 
          
//      }, [totalamount]);
 
//      return <h1>Redirecting to Payment...</h1>;
//  };
 
//  export default Payment;


import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const totalamount = location.state?.totalamount; // Get totalamount from Link state

    useEffect(() => {
        const loadCashfreeSDK = () => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
                script.async = true;
                script.onload = () => {
                    console.log("Cashfree SDK script loaded.");
                    if (window.Cashfree) {
                        console.log("Cashfree SDK loaded: ", window.Cashfree);
                        resolve(window.Cashfree); // Resolve with window.Cashfree
                    } else {
                        reject(new Error("Cashfree is not properly loaded."));
                    }
                };
                script.onerror = () => {
                    reject(new Error("Failed to load Cashfree SDK."));
                };
                document.head.appendChild(script);
            });
        };

        const initialPayment = async () => {
            try {
                // Load the SDK
                const cashfree = await loadCashfreeSDK();
                console.log("Cashfree object:", cashfree);
                console.log("Cashfree object:but check out is no available", cashfree.Checkout);
                

                // Make the payment API call
                const response = await axios.post('http://localhost:3001/payments/payment', {
                    order_amount: totalamount, // Use the total amount here
                    order_currency: "INR",
                    customer_details: {
                        customer_id: "akash123",
                        customer_name: "akash",
                        customer_email: "aj988276@gmail.com",
                        customer_phone: "1234567890",
                    },
                });

                console.log("Payment API response:", response.data);

                if (response?.data.statuscode === 200) {
                    const checkoutOption = {
                        paymentSessionId: response?.data?.data?.payment_session_id,
                        cf_order_id: response?.data?.data?.cf_order_id,
                        redirectTarget: "_self",
                    }
                    console.log("Checkout options:", checkoutOption);

                    // Start the checkout process
                    window.Cashfree.checkout(checkoutOption).then((result) => {
                        if (result.error) {
                            console.log("Error during payment: akash", result.error);
                        }
                        if (result.paymentDetails) {
                            console.log("Payment completed:", result.paymentDetails);
                        }
                    });

                } else {
                    console.error("Payment order creation failed:", response.data.message);
                }
            } catch (error) {
                console.error("Error during payment initialization:", error);
            }
        };

        if (totalamount) {
              initialPayment(); // Call the payment function
        } else {
            console.error("Total amount is not defined.");
        }


    }, [totalamount]);


    return <h1>Redirecting to Payment...</h1>;
};

export default Payment;



 