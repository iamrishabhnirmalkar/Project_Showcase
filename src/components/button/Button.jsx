// Button.js
import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="bg-black py-4">
      <div className="text-white flex justify-center">
        <div className="flex w-full max-w-screen-lg">
          <Link to="/AboutMe" className="flex-1 border border-white px-4 py-2">
            About Me
          </Link>
          <Link
            to="/AboutProject"
            className="flex-1 border border-white px-4 py-2"
          >
            About Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Button;
