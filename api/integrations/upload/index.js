const { default: makeApiRequest } = require("@/api/helpers/MakeApi");
const { default: axios } = require("axios");

const handleUpload = async ({ file }) => {
  const data = new FormData();
  formData.append("image", file);
  try {
    const response = await makeApiRequest({
      baseUrl: "/api/upload",
      data,
      type: "multipart/form-data",
    });
    return response.data;
  } catch (error) {
    setMessage("An error occurred while uploading the file.");
    console.error("Upload error:", error);
  }
};
