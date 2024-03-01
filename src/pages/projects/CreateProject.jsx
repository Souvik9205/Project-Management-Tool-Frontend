import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../image/auth.jpg";
import { FaUser, FaAlignLeft, FaMoneyBillAlt, FaClock } from "react-icons/fa";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [enddate, setEnddate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        name,
        description,
        budget,
        enddate,
      };

      const response = await axios.post(
        "https://projectmanagement-backend.onrender.com/create",
        data
      );
      console.log("project created!");
      navigate("/home");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          window.alert("An error while creating project!");
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
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl text-gray-800 pb-5">
            New Project Create
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Name:
            </label>
            <div className="flex items-center border rounded-lg">
              <span className="ml-3">
                <FaUser />
              </span>
              <input
                type="text"
                className="py-2 px-4 flex-1 outline-none"
                placeholder="Enter project name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Description:
            </label>
            <div className="flex items-center border rounded-lg">
              <span className="ml-3">
                <FaAlignLeft />
              </span>
              <input
                type="text"
                className="py-2 px-4 flex-1 outline-none"
                placeholder="Enter project description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Budget:
            </label>
            <div className="flex items-center border rounded-lg">
              <span className="ml-3">
                <FaMoneyBillAlt />
              </span>
              <input
                type="number"
                className="py-2 px-4 flex-1 outline-none"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Deadline:
            </label>
            <div className="flex items-center border rounded-lg">
              <span className="ml-3">
                <FaClock />
              </span>
              <input
                type="date"
                className="py-2 px-4 flex-1 outline-none"
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg px-12 py-3.5 text-center me-2 mb-2 text-xl"
            >
              Create
            </button>
          </div>
        </form>
        <p className="text-gray-700 mt-4">
          Don't want to create project?{" "}
          <Link to="/home" className="text-blue-500">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateProject;
