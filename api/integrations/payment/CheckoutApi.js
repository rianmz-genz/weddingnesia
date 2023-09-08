import { urlCheckout } from "@/api/routes/payment";

const CheckoutApi = async ({ orderId }) => {
  const data = { order_id: orderId };

  const response = await fetch(urlCheckout, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });

  return response;
};

export default CheckoutApi;
