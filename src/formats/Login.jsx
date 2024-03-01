import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import backgroundImage from "../assets/auth.avif";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigate("/home");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        username,
        password,
      };
      const response = await axios.post(
        "https://projectmanagement-backend.onrender.com/login",
        data
      );
      console.log("user logged in!");

      localStorage.setItem("token:", response.data);
      // console.log(response.data);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data}`;

      navigate("/home");
    } catch (error) {
      console.error("Error Logged in:", error);
      if (error.response) {
        if (error.response.status === 404) {
          window.alert("Username not exists. Please choose a correct one!");
        } else {
          window.alert("Password is incorrect. Please try again!");
        }
      } else {
        window.alert(
          "Network error occurred. Please check your internet connection."
        );
      }
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-xl w-full bg-white p-10 rounded-lg shadow-xl border border-gray-300">
        <div className="flex justify-between mb-4">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-3.5 text-center me-2 mb-2"
          >
            Sign in
          </button>
          <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <div className="flex items-center border rounded-lg">
              <span className="ml-3">
                <AiOutlineUser />
              </span>
              <input
                type="text"
                className="py-2 px-4 flex-1 outline-none"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg">
              <span className="ml-3">
                <BiKey />
              </span>
              <input
                type="password"
                className="py-2 px-4 flex-1 outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2 leading-tight" />
            <label className="text-sm text-gray-700">Remember Me</label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-12 py-3.5 text-center me-2 mb-2 text-xl"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-gray-700 mt-4">
          Don't have an account yet?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
