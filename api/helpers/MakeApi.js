import axios from "axios";

const makeApiRequest = async ({
  baseUrl,
  method = "GET",
  data,
  type = "application/json",
  authorization,
}) => {
  try {
    const response = await axios({
      baseURL: baseUrl,
      method: method,
      timeout: 9000,
      timeoutErrorMessage: "Timeout Please Try Again",
      data: data,
      headers: {
        "Content-Type": type,
        Authorization: authorization,
        Accept: "application/json",
      },
    });
    if (response.data.status) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    //console.log(error);
    return false;
  }
};

export default makeApiRequest;
