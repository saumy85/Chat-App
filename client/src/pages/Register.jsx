import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { uploadFile } from "../helpers/UploadFile";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  });
  const [upload, setUpload] = useState("");
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleEmail = () => {};
  const handlePassword = () => {};

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const uploadPhoto = await uploadFile(file);
    console.log("uploadPhoto", uploadPhoto);
    setUpload(file);
  };
  //console.log("photo :", upload);
  const handleClear = (e) => {
    //e.stopPropagation();
    e.preventDefault();
    setUpload(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", data);
  };
  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md mx:2 rounded overflow-hidden p-4 mx-auto shadow-lg">
        <h1>Welcome to Chat App</h1>
        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-slate-100 px-2 py-1 hover:border-primary focus:outline-primary"
              value={data.name}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="bg-slate-100 px-2 py-1 hover:border-primary cursor-default focus:outline-primary"
              value={data.email}
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="bg-slate-100 px-2 py-1 focus:outline-primary"
              value={data.password}
              onChange={handleChange}
              required
            ></input>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="profile_pic">
              <div className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer ">
                <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1">
                  {upload?.name ? upload.name : "Upload profile picture"}
                </p>
                {upload?.name && (
                  <button
                    className="text-lg ml-2 hover:text-red-600 "
                    onClick={handleClear}
                  >
                    <IoClose />
                  </button>
                )}
              </div>
            </label>
            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              className="bg-slate-100 px-2 py-1 focus:outline-primary hidden"
              onChange={handleUpload}
              required
            ></input>
          </div>

          <button
            className="bg-primary text-lg px-4 py-2 hover:bg-secondry rounded mt-2 font-bold text-white leading-relaxed tracking-wider"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="my-3 text-center">
          Already have an account?{" "}
          <Link
            to={"/email"}
            className=" font-semibold hover:text-primary hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
