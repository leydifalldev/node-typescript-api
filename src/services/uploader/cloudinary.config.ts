const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dkv",
  api_key: "388488713334757",
  api_secret: "L95uiHp1CCoKn2mU0FbBN1AEk7g"
});

export default cloudinary;
