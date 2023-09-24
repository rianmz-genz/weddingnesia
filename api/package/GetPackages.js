import axios from "axios";

const GetPackagesApi = async () => {
  try {
    const res = await axios({
      method: "GET",
      baseURL: "http://127.0.0.1:8000/api/package",
      timeout: 5000,
      timeoutErrorMessage: "Request time out, coba lagi",
    });
    return res.data;
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      //console.log(error.message);
    } else {
      //console.log(error);
      return error.response.data;
    }
  }
};

export default GetPackagesApi;
