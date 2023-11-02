import tempRoute from "@/api/routes/temp";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const create = async () => {
  const { data } = await axios.post(tempRoute.base, null, {
    timeout: 9000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  console.log(data);
  return data;
};

const getCouple = async (id) => {
  const { data } = await axios.get(tempRoute.couple(id), {
    timeout: 9000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const createCouple = async (id, reqBody) => {
  const { data } = await axios.post(tempRoute.couple(id), reqBody, {
    timeout: 9000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  console.log(data);
  return data;
};

const getLocation = async (id) => {
  const { data } = await axios.get(tempRoute.location(id), {
    timeout: 9000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const createLocation = async (id, reqBody) => {
  const { data } = await axios.post(tempRoute.location(id), reqBody, {
    timeout: 9000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  console.log(data);
  return data;
};
const tempService = {
  create,
  getCouple,
  createCouple,
  createLocation,
  getLocation,
};
export default tempService;
