const GetMidtransUrl = () => {
  const domain = process.env.NEXT_PUBLIC_MIDTRANS_URL;
  return domain;
};

export default GetMidtransUrl;
