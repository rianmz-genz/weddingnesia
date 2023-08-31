import { urlRegister } from "@ApiRoutes/auth";

const RegisterApi = async ({ name, email, password }) => {
    const data = { fullName: name, email, password };
      
    const response = await fetch(urlRegister, {
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
  
  export default RegisterApi;
  