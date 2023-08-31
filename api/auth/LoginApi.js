import { urlLogin } from "@ApiRoutes/auth";

const LoginApi = async ({ email, password }) => {
  const data = { email, password };
    
  const response = await fetch(urlLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    
  }).then((response) => {
    return response.json()
  })
  
  return response
};

export default LoginApi;
