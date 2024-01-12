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
            <a href="https://github.com/iamrishabhnirmalkar">
              <FaGithub size={60} />
            </a>
          </div>

          <div className="flex justify-center items-center mb-4 border border-white p-4 text-blue-500 ">
            <a href="https://www.linkedin.com/in/iamrishunir/">
              <FaLinkedin size={60} />
            </a>
          </div>

          <div className="flex justify-center items-center mb-4  border border-white p-4  text-fuchsia-900 ">
            <a href="">
              <FaSquareInstagram size={60} />
            </a>
          </div>

          <div className="flex justify-center items-center mb-4 border border-white p-4 text-red-800 ">
            <a href="">
              <FaYoutube size={60} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default social;
