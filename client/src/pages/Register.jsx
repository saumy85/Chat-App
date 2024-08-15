import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_pic: "",
  });
  const [upload, setUpload] = useState("");
  const handleName = async (e) => {
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

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUpload(file);
  };
  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4">
        <h1>Welcome to Chat App</h1>
        <form className="grid gap-4 mt-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-slate-100 px-2 py-1 hover:border-primary focus:outline-primary"
              value={data.name}
              onChange={handleName}
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
              onChange={handleEmail}
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
              onChange={handlePassword}
              required
            ></input>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="profile_pic">
              <div className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer ">
                <p className="text-sm">
                  {upload.name ? upload.name : "Upload profile picture"}
                </p>
              </div>
            </label>
            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              className="bg-slate-100 px-2 py-1 focus:outline-primary hidden"
              value={data.password}
              onChange={handleUpload}
              required
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
