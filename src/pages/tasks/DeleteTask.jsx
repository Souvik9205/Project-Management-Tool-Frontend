import React from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const DeleteTask = () => {
  const navigate = useNavigate();
  const { projectId, taskId } = useParams();

  const handleDelete = () => {
    axios
      .delete(
        `https://projectmanagement-backend.onrender.com/project/${projectId}/task/${taskId}`
      )
      .then(() => {
        navigate(`/project/${projectId}`);
      })
      .catch((error) => {
        alert("error while deleting", error);
      });
  };

  return (
    <div className="min-h-screen text-center m-8 p-4 border border-gray-300 rounded-lg">
      <div className="pt-16">
        <h1 className="text-xl font-bold mb-4">Delete Task</h1>
        <h3 className="text-lg text-gray-600 mb-8">
          Are you sure you want to delete it?
        </h3>
        <button
          className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
          onClick={handleDelete}
        >
          Yes, delete it!
        </button>
        <p className="text-gray-700 mt-4">
          Don't want to delete the project?{" "}
          <Link to={`/project/${projectId}`} className="text-blue-500">
            Back
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DeleteTask;
