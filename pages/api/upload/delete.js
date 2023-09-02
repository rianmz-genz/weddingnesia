import path from "path";
import fs from "fs/promises";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { filename } = req.query; // Nama file yang ingin dihapus dari query parameter

  if (!filename) {
    return res.status(400).json({ error: "Missing filename parameter" });
  }

  try {
    const filePath = path.join(process.cwd(), "public", "assets", filename);

    await fs.unlink(filePath); // Menghapus file

    res.status(200).json({
      message: "File deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the file" });
  }
}
