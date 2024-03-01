import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../image/auth.jpg";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";

function CreateTask() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { projectId } = useParams();

  const handleTaskCreate = async (event) => {
    event.preventDefault();

    try {
      const data = {
        name,
      };
      const response = await axios.put(
        `https://projectmanagement-backend.onrender.com/project/${projectId}/taskcreate`,
        data
      );
      console.log("task added!");
      navigate(`/project/${projectId}`);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          window.alert("An error while creating task!");
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
            New Task Create
          </h1>
        </div>
        <form onSubmit={handleTaskCreate}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Name:
            </label>
            <div className="flex items-center border rounded-lg">
              <span className="ml-3">
                <FaAlignLeft />
              </span>
              <input
                type="text"
                className="py-2 px-4 flex-1 outline-none"
                placeholder="Enter Task name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
          Don't want to create task?{" "}
          <Link to={`/project/${projectId}`} className="text-blue-500">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CreateTask;
