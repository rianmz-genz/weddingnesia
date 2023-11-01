const { default: GetDomain } = require("@/api/utils/GetDomain");

const base = GetDomain() + "/temp-inv";
const couple = (id) => base + "/" + id + "/bride-info";
const tempRoute = {
  base,
  couple,
};
export default tempRoute;
