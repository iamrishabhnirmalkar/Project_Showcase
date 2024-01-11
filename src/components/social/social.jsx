import {
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";

function social() {
  return (
    <>
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="text-white  flex flex-col items-center ">
          <div className="flex justify-center items-center mb-4 border border-white p-4  ">
            <a href="">
              <FaGithub size={60} />
            </a>
            <h1>GitHub</h1>
          </div>

          <div className="flex justify-center items-center mb-4 border border-white p-4">
            <a href="">
              <FaLinkedin size={60} />
            </a>
            <h1>LinkedIn</h1>
          </div>

          <div className="flex justify-center items-center mb-4  border border-white p-4">
            <a href="">
              <FaSquareInstagram size={60} />
            </a>
            <h1>Instagram</h1>
          </div>

          <div className="flex justify-center items-center mb-4 border border-white p-4">
            <a href="">
              <FaYoutube size={60} />
            </a>
            <h1>Youtube</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default social;
