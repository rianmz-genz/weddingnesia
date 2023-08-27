import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Disable built-in body parsing
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), "public/assets");
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err);
        return res.status(500).json({ error: "Error parsing form data" });
      }

      // Assuming the input field name is "image"
      const image = files.image;

      if (!image) {
        return res.status(400).json({ error: "No image file found" });
      }

      // Generate a unique filename to prevent overwriting
      const uniqueFilename = `${Date.now()}-${image.name}`;
      const newPath = path.join(form.uploadDir, uniqueFilename);

      fs.rename(image.path, newPath, (renameErr) => {
        if (renameErr) {
          console.error("Error renaming file:", renameErr);
          return res.status(500).json({ error: "Error renaming file" });
        }

        const publicPath = `/assets/${uniqueFilename}`;
        res
          .status(200)
          .json({ message: "File uploaded successfully", path: publicPath });
      });
    });
  } catch (err) {
    console.error("Error handling upload:", err);
    res.status(500).json({ error: "Error handling upload" });
  }
}
