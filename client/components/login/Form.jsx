"use client";

import axios from "axios";
import React, { useState } from "react";

export const Form = () => {
  const [isLogin, setLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "http://localhost:8080/users/login";
    try {
      const { data: res } = await axios.post(URL, data);
      window.location = "/";
      console.log(res.data);
      console.log("login succeed");
    } catch (error) {
      console.error("error :" + error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorMsg(error.response.data.message);
      }
    }
  };

  const buttonVariant = `w-[80%] my-3 py-2 font-medium rounded-md text-md ${
    isLogin ? "text-white bg-green-600" : "text-black bg-yellow-400"
  } `;

  return (
    <div className="my-4">
      <h1 className="text-white text-center text-2xl font-medium">
        {isLogin ? "Login" : "Register"}
      </h1>
      <form onSubmit={handleSubmit} className="flex-row text-center px-3">
        <div className="my-5">
          <p className="font-medium text-left text-xs text-white my-2">
            Username
          </p>
          <input
            className="w-full text-lg rounded-md focus:outline-none bg-neutral-100 border-b-2 mx-auto px-2 py-1"
            onChange={handleChange}
            type="text"
            name="username"
          />
        </div>
        <div className="my-5">
          <p className="font-medium text-left text-xs text-white my-2">
            Password
          </p>
          <input
            className="w-full text-lg rounded-md focus:outline-none bg-neutral-100 border-b-2 mx-auto px-2 py-1"
            onChange={handleChange}
            type="password"
            name="password"
          />
        </div>
        <button className={buttonVariant} type="submit">
          {isLogin ? "Login" : "Register"}
        </button>
        <p>{errorMsg ? `${errorMsg}` : null}</p>
      </form>
    </div>
  );
};
