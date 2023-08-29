const LoginApi = async ({ email, password }) => {
  const data = { email, password };
    
  const response = await fetch('http://localhost:8000/api/login', {
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

export default LoginApi;
