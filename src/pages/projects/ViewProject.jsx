import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { BsSquare, BsCheckSquare } from "react-icons/bs";
import { useParams, Link, useNavigate } from "react-router-dom";
import backgroundImage from "../image/view.jpg";

function ViewProject() {
  const [project, setProject] = useState({});
  const [task, setTask] = useState([]);
  const { id } = useParams();
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
      .get(`https://projectmanagement-backend.onrender.com/project/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://projectmanagement-backend.onrender.com/project/${id}/task`)
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6 bg-white bg-opacity-50 backdrop-blur-sm mt-5 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">
          <Link to="/home">
            <IoIosArrowBack />
          </Link>
          {project.name}
        </h1>
        <p className="text-gray-600 text-lg mt-2">{project.description}</p>
        <div className="flex mt-4">
          <div className="w-1/2">
            <p className="text-gray-700">
              <span className="font-semibold">Budget:</span> {project.budget}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Start Date:</span>{" "}
              {formatDate(project.startdate)}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Deadline:</span>{" "}
              {formatDate(project.enddate)}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 mx-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold font-heading text-gray-800">
            Tasks
          </h2>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border border-gray-300"
          >
            <Link to={`/project/${project._id}/taskcreate`}>Add Task</Link>
          </button>
        </div>
        <div className="bg-white bg-opacity-50 backdrop-blur-sm  rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Remaining Tasks
          </h2>
          <div
            style={{ marginBottom: "1em" }}
            className="space-y-4 bg-white p-3 rounded-lg"
          >
            {task
              .filter((task) => !task.checked)
              .map((task, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5em",
                  }}
                  className="flex items-center justify-between border-b border-gray-200 py-2"
                >
                  <div className="flex item-center gap-5 justify-center">
                    <div>
                      <Link
                        to={`/project/${project._id}/task/${task._id}/check`}
                        className="mr-2 text-blue-500"
                      >
                        <BsSquare />
                      </Link>
                    </div>
                    <div className="text-gray-800 font-semibold text-lg">
                      {task.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <Link
                      to={`/project/${project._id}/update/${task._id}`}
                      className="text-gray-500 hover:text-gray-800 mr-2"
                    >
                      <FaPen />
                    </Link>
                    <Link
                      to={`/project/${project._id}/delete/${task._id}`}
                      className="text-red-500 hover:text-red-800"
                    >
                      <FaTrash />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              completed Tasks
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <div className="space-y-4">
                {task
                  .filter((task) => task.checked)
                  .map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-200 py-2"
                    >
                      <div className="flex item-center gap-5 justify-center">
                        <div>
                          <Link
                            to={`/project/${project._id}/task/${task._id}/check`}
                            className="mr-2 text-blue-500"
                          >
                            <BsCheckSquare />
                          </Link>
                        </div>
                        <div
                          style={{
                            textDecoration: task.checked
                              ? "line-through"
                              : "none",
                          }}
                          className="text-gray-600 font-semibold text-lg"
                        >
                          {task.name}
                        </div>
                      </div>
                      <div className="flex items-center gap-5">
                        <Link
                          to={`/project/${project._id}/update/${task._id}`}
                          className="text-gray-500 hover:text-gray-800 mr-2"
                        >
                          <FaPen />
                        </Link>
                        <Link
                          to={`/project/${project._id}/delete/${task._id}`}
                          className="text-red-500 hover:text-red-800"
                        >
                          <FaTrash />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProject;
