// import { useState } from "react";
import { FaUser, FaLink, FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-black bottom-0 fixed w-full py-5 border-t-2 border-white  ">
        <div className="text-white flex justify-between px-6">
          <Link to="/AboutProject">
            <FaBrain size={25} />
          </Link>
          <Link to="/">
            <FaUser size={25} />
          </Link>
          <Link to="/socailLink">
            <FaLink size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
