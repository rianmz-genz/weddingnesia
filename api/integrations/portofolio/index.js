import portofolioRoute from "@/api/routes/portofolio";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";
const getAll = async () => {
  const { data } = await axios.get(portofolioRoute.base, {
    timeout: 20000,
    timeoutErrorMessage: "Server sedang sibuk",
    headers: {
      Accept: "application/json",
    },
  });
  return data;
};
const portofolioApi = {
  getAll,
};

export default portofolioApi;
