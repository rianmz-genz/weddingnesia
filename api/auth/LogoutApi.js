import { urlLogout } from "@ApiRoutes/auth";
import Cookies from "js-cookie";

const LogoutApi = async () => {
  const token = "Bearer " + Cookies.get("token");
  return await fetch(urlLogout, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((response) => {
    return response.json();
  });
};

export default LogoutApi;
