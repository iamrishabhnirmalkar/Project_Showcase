import React from "react";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

function Sm() {
  return (
    <>
      <div className="bg-black py-3">
        <div className="text-white flex justify-center ">
          <div className="flex space-x-5">
            <a
              href="https://github.com/iamrishabhnirmalkar"
              className="border border-white p-2 rounded"
            >
              <FaGithub size={30} />
            </a>

            <a href="" className="border border-white p-2 rounded">
              <FaInstagram size={30} />
            </a>

            <a href="" className="border border-white p-2 rounded">
              <FaYoutube size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/iamrishunir/"
              className="border border-white p-2 rounded"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sm;
