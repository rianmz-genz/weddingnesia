import axios from "axios";

const makeApiRequest = async ({
  baseUrl,
  method = "GET",
  data,
  type = "application/json",
}) => {
  try {
    const response = await axios({
      baseURL: baseUrl,
      method: method,
      timeout: 5000,
      timeoutErrorMessage: "Timeout Please Try Again",
      data: data,
      headers: {
        "Content-Type": type,
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export default makeApiRequest;
