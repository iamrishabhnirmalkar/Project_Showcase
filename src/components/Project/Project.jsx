import React from "react";

function Project() {
  const ProjectData = [
    {
      id: 1,
      Img: "/Image/01.jpg",
      Head: "Power Group ",
      Des: "I designed and developed the complete website for Power Group, a luxury real estate company. Meeting the client's requirements, I utilized WordPress and incorporated various custom elements to ensure the website is not only responsive but also visually appealing. The project was assigned by Palak Dadlani, the project lead, who provided guidance throughout the development process. The goal was to create an impressive website that would leave the client satisfied with the final outcome.",
      Codelink: "",
      Websitelink: "https://powergroup.info/",
    },
    {
      id: 2,
      Img: "/Image/02.png",
      Head: "Celeste India ",
      Des: "I designed and developed the complete website for Celeste India, an e-commerce platform. My client Siddhi, the owner of Celeste India, wanted a website that looked premium and amazing. In line with these requirements, I created an e-commerce site with a custom design, incorporating various features and utilizing a custom theme. The goal was to deliver a stunning website that aligns with their vision and provides a great online platform for their jewelry business. With this website, they are now well-equipped to commence their e-commerce jewelry business, and I ensured their satisfaction by meeting their specific requirements.",
      Codelink: "",
      Websitelink: "https://celesteindia.in/",
    },
  ];

  return (
    <>
      {ProjectData.map((project) => (
        <div className="bg-black  text-white h-screen" key={project.id}>
          <div className="flex-row text-center py-3">
            <div className="flex justify-center">
              <img
                src={project.Img}
                alt=""
                className="rounded-full w-16 h-16 border border-white mx-auto"
              />
            </div>
            <div className="flex-row justify-center">
              <h1 className="text-xl">{project.Head}</h1>
              <p className="text-justify px-4 text-sm mb-4 text-gray-300">
                {project.Des}
              </p>
            </div>
            <div className="flex justify-center space-x-2">
              <a href={project.Websitelink}>
                <h1 className="border border-white px-10">Link</h1>
              </a>
              <a href={project.Codelink}>
                <h1 className="border border-white px-10">Code</h1>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Project;
