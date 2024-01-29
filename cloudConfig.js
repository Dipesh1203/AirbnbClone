const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  //cloud_name and all other names are need to be same as it is
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // async code using `req` and `file`
    // ...
    return {
      folder: "horizon_Explorer_Dev",
      allowedFormats: ["png", "jpeg", "jpg"],
    };
  },
});

module.exports = {
  cloudinary,
  storage,
};
