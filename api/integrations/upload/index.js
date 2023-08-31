const { default: axios } = require("axios");

const handleUpload = async ({ file }) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    setMessage("An error occurred while uploading the file.");
    console.error("Upload error:", error);
  }
};
