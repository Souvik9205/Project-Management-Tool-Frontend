import React, { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "../image/auth.jpg";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaUser, FaAlignLeft, FaMoneyBillAlt, FaClock } from "react-icons/fa";

const UpdateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  const [enddate, setEnddate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://projectmanagement-backend.onrender.com/project/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
        setBudget(response.data.budget);
        setEnddate(response.data.enddate);
      })
      .catch((error) => {
        alert("there is an error");
        console.log(error);
      });
  }, []);

  const handleEdit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        name,
        description,
        budget,
        enddate,
      };

      const response = await axios.put(
        `https://projectmanagement-backend.onrender.com/update/${id}`,
        data
      );
      console.log("project updated!");
      navigate(`/project/${id}`);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          window.alert("An error while updating project!");
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
            Update Project
          </h1>
        </div>
        <form onSubmit={handleEdit}>
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
              Update
            </button>
          </div>
        </form>
        <p className="text-gray-700 mt-4">
          Don't want to edit project?{" "}
          <Link to="/home" className="text-blue-500">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UpdateProject;
