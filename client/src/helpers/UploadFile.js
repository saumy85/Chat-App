// import dotenv from "dotenv";
// dotenv.config();
import axios from "axios";
const cloud_name = import.meta.env.VITE_CLOUD_NAME;
console.log(cloud_name);
const url = `https://api-ap.cloudinary.com/v1_1/${cloud_name}/auto/upload`;

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Chat_App");

  const response = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  // const responseData = await response.json();
  return response;
};
