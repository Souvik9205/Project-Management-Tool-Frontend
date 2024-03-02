import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./image/land.jpg";

function Landing() {
  return (
    <div
      className="flex min-h-screen sm:min-w-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="p-5 ">
          <h1 className="text-4xl sm:text-6xl font-bold p-3 font-serif">
            Project Management Tool
          </h1>
          <p className="text-sm sm:text-xl p-3 mt-4">
            Welcome to our project management tool, the ultimate solution for
            organizing, collaborating, and tracking your projects effortlessly.
            With our user-friendly interface, you can create projects, add
            tasks, and keep a close eye on progress, ensuring that every
            milestone is reached efficiently. Stay connected with your team,
            streamline communication, and drive productivity with our intuitive
            platform. Try it now and experience seamless project management like
            never before.
          </p>
          <div className="mt-8 p-3">
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              View Code in Github
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <Link to="/login">Get Started!</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 items-top justify-end hidden sm:flex">
        <img src="./landing.png" alt="landing image" className=" p-1" />
      </div>
    </div>
  );
}

export default Landing;
