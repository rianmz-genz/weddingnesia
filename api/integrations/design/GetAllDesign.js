import makeApiRequest from "@/api/helpers/MakeApi";
import DesignRoute from "@/api/routes/design";

const GetAllDesign = async () => {
  try {
    const res = await makeApiRequest({ baseUrl: DesignRoute });
    if (!res) return false;
    return res?.designs;
  } catch (error) {
    return false;
  }
};

export default GetAllDesign;
