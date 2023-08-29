const RegisterApi = async ({ name, email, password }) => {
    const data = { fullName: name, email, password };
      
    const response = await fetch('http://localhost:8000/api/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      
    }).then((response) => {
      return response.json()
    })
    
    return response.data
  };
  
  export default RegisterApi;
  