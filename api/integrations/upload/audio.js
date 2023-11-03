import tempRoute from "@/api/routes/temp";
import axios from "axios";

const audio = async (file) => {
  const formData = new FormData();
  formData.append("audio", file);
  const { data } = await axios.post(tempRoute.audio, formData, {
    timeout: 9000,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(data);
  return data;
};

const uploadServices = {
  audio,
};
export default uploadServices;
