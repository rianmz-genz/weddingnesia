const GetDomain = () => {
  const domain = process.env.NEXT_PUBLIC_API_URL;
  return domain;
};

export default GetDomain;
