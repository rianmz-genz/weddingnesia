import tempRoute from "@/api/routes/temp";
import GetToken from "@/api/utils/GetToken";
import axios from "axios";

const create = async () => {
  const { data } = await axios.post(tempRoute.base, null, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const getCouple = async (id) => {
  const { data } = await axios.get(tempRoute.couple(id), {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const createCouple = async (id, reqBody) => {
  const { data } = await axios.post(tempRoute.couple(id), reqBody, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const getLocation = async (id) => {
  const { data } = await axios.get(tempRoute.location(id), {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const createLocation = async (id, reqBody) => {
  const { data } = await axios.post(tempRoute.location(id), reqBody, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};
const getDesign = async (id) => {
  const { data } = await axios.get(tempRoute.design(id), {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const createDesign = async (id, reqBody) => {
  const { data } = await axios.post(tempRoute.design(id), reqBody, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};
const getAlbum = async (id) => {
  const { data } = await axios.get(tempRoute.album(id), {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const createAlbum = async (id, reqBody) => {
  const { data } = await axios.post(tempRoute.album(id), reqBody, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};
const getDomain = async (id) => {
  const { data } = await axios.get(tempRoute.domain(id), {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};

const createDomain = async (id, reqBody) => {
  const { data } = await axios.post(tempRoute.domain(id), reqBody, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};
const deleteTemp = async (id) => {
  const { data } = await axios.delete(tempRoute.base + "/" + id, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};
const get = async (id) => {
  const { data } = await axios.get(tempRoute.base + "/" + id, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};
const save = async (id) => {
  const { data } = await axios.post(tempRoute.base + "/" + id, null, {
    timeout: 20000,
    headers: {
      Authorization: GetToken(),
      Accept: "application/json",
    },
  });
  return data;
};
const tempService = {
  create,
  getCouple,
  createCouple,
  createLocation,
  getLocation,
  createDesign,
  getDesign,
  getAlbum,
  createAlbum,
  getDomain,
  createDomain,
  deleteTemp,
  get,
  save,
};
export default tempService;
