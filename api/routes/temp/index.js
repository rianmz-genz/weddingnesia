const { default: GetDomain } = require("@/api/utils/GetDomain");

const base = GetDomain() + "/temp-inv";
const couple = (id) => base + "/" + id + "/bride-info";
const location = (id) => base + "/" + id + "/location-info";
const tempRoute = {
  base,
  couple,
  location,
};
export default tempRoute;
