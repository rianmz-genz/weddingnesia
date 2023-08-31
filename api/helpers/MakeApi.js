import axios from "axios";

const makeApiRequest = async ({ baseUrl, method = "GET", data }) => {
  try {
    const response = await axios({
      baseURL: baseUrl,
      method: method,
      timeout: 5000,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default makeApiRequest;
