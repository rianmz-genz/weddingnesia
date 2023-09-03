import Cookies from "js-cookie";

const GetToken = () => {
  return `Bearer ${Cookies.get("token")}`;
};
export default GetToken;
