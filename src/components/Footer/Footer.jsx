// import { useState } from "react";
import { useState } from "react";
import { FaUser, FaLink, FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [activeIcon, setactiveIcon] = useState("user");

  const handalIconclick = (iconName) => {
    setactiveIcon(iconName);
  };

  return (
    <>
      <div className="bg-black bottom-0 fixed w-full py-5 border-t-2 border-white  ">
        <div className="text-white flex justify-between px-6">
          <Link
            to="/AboutProject"
            onClick={() => {
              handalIconclick("brain");
            }}
            className={`brain-icon ${activeIcon == "brain" ? "active" : ""}`}
          >
            <FaBrain size={25} />
          </Link>

          <Link
            to="/"
            onClick={() => {
              handalIconclick("user");
            }}
            className={`user-icon ${activeIcon == "user" ? "active" : ""}`}
          >
            <FaUser size={25} />
          </Link>

          <Link
            to="/socailLink"
            onClick={() => {
              handalIconclick("link");
            }}
            className={`link-icon ${activeIcon == "link" ? "active" : ""}`}
          >
            <FaLink size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
