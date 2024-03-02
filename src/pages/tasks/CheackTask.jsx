import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CheakTask = () => {
  const navigate = useNavigate();
  const { projectId, taskId } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://projectmanagement-backend.onrender.com/project/${projectId}/task/${taskId}`
        );
        const task = response.data;
        setIsChecked(task.checked);
        const toggleChecked = !task.checked;

        await axios.put(
          `https://projectmanagement-backend.onrender.com/project/${projectId}/task/${taskId}/check`,
          { checked: toggleChecked }
        );
        console.log("Task status toggled!");
        setLoading(false);
        navigate(`/project/${projectId}`);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 500) {
            window.alert("An error occurred while toggling task status!");
          }
        } else {
          window.alert(
            "Network error occurred. Please check your internet connection."
          );
        }
      }
    };

    fetchTask();
  }, [projectId, taskId, navigate]);

  return (
    <div>
      {loading && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded p-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2">Loading...</p>
        </div>
      )}
    </div>
  );
};
export default CheakTask;
