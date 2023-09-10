import makeApiRequest from "@/api/helpers/MakeApi";
import OrderRoute from "@/api/routes/order";
import GetToken from "@/api/utils/GetToken";

const SelectTemplateApi = async ({ data }) => {
  try {
    const res = await makeApiRequest({
      baseUrl: `${OrderRoute}/select-template`,
      method: "POST",
      data,
      authorization: GetToken(),
    });
    if (!res) return false;
    return res[0];
  } catch (error) {
    return console?.log(error);
  }
};

export default SelectTemplateApi;
