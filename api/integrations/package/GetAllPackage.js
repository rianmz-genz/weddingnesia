import makeApiRequest from "@/api/helpers/MakeApi";
import PackageRoute from "@/api/routes/package";
import axios from "axios";

const GetAllPackage = async () => {
  console.log(PackageRoute);
  try {
    const hit = await axios({
      baseURL: "http://localhost:8000/package",
      method: "GET",
    });
    return hit.data;
  } catch (error) {
    if (error) {
      console.log("Response Data:", error.response);
      console.log("Response Status:", error.response);
      console.log("Response Headers:", error.response);
    }
    throw error;
  }
};

export default GetAllPackage;
