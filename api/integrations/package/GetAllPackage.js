import makeApiRequest from "@/api/helpers/MakeApi";
import PackageRoute from "@/api/routes/package";

const GetAllPackage = async () => {
  try {
    const res = await makeApiRequest({ baseUrl: PackageRoute });
    console.log("res", res);
    if (!res) return false;
    return res.packages;
  } catch (error) {
    return false;
  }
};

export default GetAllPackage;
