const { default: GetDomain } = require("@/api/utils/GetDomain");

const base = GetDomain() + "/temp-inv";
const audio = GetDomain() + "/upload-audio";
const couple = (id) => base + "/" + id + "/bride-info";
const location = (id) => base + "/" + id + "/location-info";
const design = (id) => base + "/" + id + "/design-info";
const album = (id) => base + "/" + id + "/album-info";
const domain = (id) => base + "/" + id + "/domain-info";
const tempRoute = {
  base,
  couple,
  location,
  design,
  audio,
  album,
  domain,
};
export default tempRoute;
