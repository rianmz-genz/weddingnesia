const { default: makeApiRequest } = require("@/api/helpers/MakeApi");
const { default: UploadImageRoute } = require("@/api/routes/upload");

const handleUploadApi = async ({ file }) => {
  const data = new FormData();
  data.append("cover", file);
  try {
    const response = await makeApiRequest({
      method: "POST",
      baseUrl: UploadImageRoute,
      data,
      type: "multipart/form-data",
    });
    return response?.url;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

export default handleUploadApi;
