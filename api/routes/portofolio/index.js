const { default: GetDomain } = require("@/api/utils/GetDomain");

const base = GetDomain() + "/portofolios";
const portofolioRoute = {
  base,
};
export default portofolioRoute;
