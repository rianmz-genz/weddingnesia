import path, { resolve } from "path";
import formidable from "formidable";
import fs from "fs/promises";
export const config = {
  api: {
    bodyParser: false,
  },
};
const readfile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/assets");
    options.filename = (name, ext, path, form) => {
      return (
        Date.now().toString() + "_" + path.originalFilename.replace(/ /g, "_")
      );
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/assets"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/assets"));
  }
  const { files } = await readfile(req, true);
  if (files && files.image) {
    const filenya = files.image[0].newFilename;
    res.status(200).json({
      message: "File uploaded successfully",
      path: `http://${req.headers.host}/assets/${filenya}`,
    });
  } else {
    res.status(400).json({ error: "No image file found" });
  }
}
