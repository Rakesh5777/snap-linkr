import multer, { FileFilterCallback, MulterError } from "multer";
import path from "path";

// Define allowed image MIME types
const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

// Configure Multer storage (store files in 'uploads' folder)
const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const { folderPath } = req; // Get folder path from generate folder middleware
    cb(null, folderPath); // Specify upload directory
  },
  filename: (_req, file, cb) => {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9); // Append current timestamp to avoid duplicate names
    cb(null, uniquePrefix + path.extname(file.originalname));
  },
});

const fileFilter: multer.Options["fileFilter"] = (
  _req,
  file,
  cb: FileFilterCallback
) => {
  if (allowedImageTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new MulterError("LIMIT_UNEXPECTED_FILE"));
  }
};

// Multer middleware configuration
const upload = multer({
  storage: storage,
  fileFilter,
  limits: { fileSize: 20 * 1024 * 1024 }, // Limit file size to 20MB
});

export default upload;
