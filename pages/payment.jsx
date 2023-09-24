import CheckoutApi from "@/api/integrations/payment/CheckoutApi";
import GetMidtransUrl from "@/api/utils/GetMidtransUrl";
import { useState } from "react";

export function ShowSnap(snapToken) {
  const script = document.createElement("script");
  script.src = GetMidtransUrl();
  script.async = true;

  script.onload = () => {
    snap.pay(snapToken, {
      onSuccess: function (result) {
        // Handle successful payment
        //console.log(result);
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
    CheckoutApi({ orderId }).then((response) => {
      console.log(response);
      const token = response.data.snap_token;
      setSnapToken(token);
    });
  };

  return (
    <div>
      <h1>Midtrans Payment Integration</h1>
      <button
        onClick={() => handlePayment("72d8eacb-62e4-43a7-a71a-4332eddbd0bf")}
      >
        Pay Now
      </button>
      {snapToken != "" ? ShowSnap(snapToken) : ""}
    </div>
  );
}

export default PaymentPage;
