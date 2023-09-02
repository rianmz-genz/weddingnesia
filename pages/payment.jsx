import CheckoutApi from "@/api/integrations/payment/CheckoutApi";
import { useState } from "react";

function ShowSnap(snapToken) {
  const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.async = true;

    script.onload = () => {
      snap.pay(snapToken, {
        onSuccess: function (result) {
          // Handle successful payment
          console.log(result);
        },
        onError: function (result) {
          // Handle payment failure
          console.error(result);
        },
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
}

function PaymentPage() {
  const [snapToken, setSnapToken] = useState("");

  const handlePayment = async (orderId) => {
    CheckoutApi({orderId}).then((response) => {
      const token = response.data.snap_token
      setSnapToken(token)
    })    
  };

  return (
    <div>
      <h1>Midtrans Payment Integration</h1>
      <button onClick={() => handlePayment("c99f7002-02a5-488f-a22c-9afc88fdc292")}>Pay Now</button>
      {snapToken != "" ? ShowSnap(snapToken) : ''}
    </div>
  );
}

export default PaymentPage;
