import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CheakTask = () => {
  const navigate = useNavigate();
  const { projectId, taskId } = useParams();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
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

  return null;
};
export default CheakTask;
