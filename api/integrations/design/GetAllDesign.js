import makeApiRequest from "@/api/helpers/MakeApi";
import DesignRoute from "@/api/routes/design";

const GetAllDesign = async () => {
  try {
    const res = await makeApiRequest({ baseUrl: DesignRoute });
    console.log("res", res);
    if (!res) return false;
    return res[0];
  } catch (error) {
    return false;
  }
};

export default GetAllDesign;
