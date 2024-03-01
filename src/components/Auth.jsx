import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Auth = ({ destination = "/login" }) => {
  return (
    <div>
      <Link to={destination}>
        <BsArrowLeftCircleFill />
      </Link>
    </div>
  );
};

export default Auth;
