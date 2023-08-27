const url = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;

const getDomain = () => {
  return `${url}/api`;
};

export default getDomain;
