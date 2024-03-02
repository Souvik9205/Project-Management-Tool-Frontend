import React, { useEffect, useState } from "react";
import { FaPen, FaPlus, FaTrash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Calendar from "../components/Calender";
import axios from "axios";
import backgroundImage from "../assets/home.avif";

const Home = () => {
  const [project, setProject] = useState([]);
  const navigate = useNavigate();

  function formatDate(dateString) {
    if (!dateString) {
      return "Unknown";
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    axios
      .get("https://projectmanagement-backend.onrender.com/home")
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          if (error.response.status === 401) {
            navigate("/login");
          }
        }
      });
  }, []);

  return (
    <div
      className="grid grid-cols-3 h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" col-span-1 p-4 overflow-hidden">
        <div className="m-5 mt-3">
          <h1 className="font-bold text-6xl py-2">Welcome buddy!</h1>
          <p className="font-semibold text-xl">Here are the projects</p>
        </div>
        <div className="mr-20 my-5 pr-10">
          <Calendar />
        </div>
        <div className="m-5 mt-3">
          <p className="font-semibold text-xl pt-8">you can add project here</p>
          <div className="flex justify-center mr-20 my-10 pr-10">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-14 py-3 text-center me-2 mb-2"
            >
              <Link to="/create">
                <FaPlus />
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-2 p-4 overflow-auto">
        <div>
          <h1 className="font-bold text-2xl p-10 pl-5">
            Your Created Projects:
          </h1>
        </div>
        <div>
          {project.map((project, index) => (
            <div
              key={project._id}
              className="bg-white shadow-md rounded-lg p-6 mr-10 border mb-3 border-gray-800"
            >
              <div className="flex justify-between">
                <div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-500"
                    >
                      Name:
                    </label>
                    <p id="name" className="text-lg text-black">
                      {project.name}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold text-gray-500"
                    >
                      Description:
                    </label>
                    <p id="description" className="text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-5">
                  <Link to={`/project/${project._id}`}>
                    <FaEye />
                  </Link>
                  <Link to={`/update/${project._id}`}>
                    <FaPen />
                  </Link>
                  <Link to={`/delete/${project._id}`}>
                    <FaTrash />
                  </Link>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4 mr-10">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-gray-500"
                  >
                    Budget:
                  </label>
                  <p id="budget" className="text-lg">
                    {project.budget}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-semibold text-gray-500"
                  >
                    Start Date:
                  </label>
                  <p id="startDate" className="text-lg">
                    {formatDate(project.startdate)}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="endDate"
                    className="block text-sm font-semibold text-gray-500"
                  >
                    End Date:
                  </label>
                  <p id="endDate" className="text-lg">
                    {formatDate(project.enddate)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
