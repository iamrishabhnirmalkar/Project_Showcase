import React from "react";

function Project() {
  const ProjectData = [
    {
      id: 1,
      Img: "/Image/01.jpg",
      Head: "Power Group ",
      Des: "I designed and developed the complete website for Power Group, a luxury real estate company. Meeting the client's requirements, I utilized WordPress and incorporated various custom elements to ensure the website is not only responsive but also visually appealing. The project was assigned by Palak Dadlani, the project lead, who provided guidance throughout the development process. The goal was to create an impressive website that would leave the client satisfied with the final outcome.",
      Codelink: "/",
      Websitelink: "https://powergroup.info/",
    },
    {
      id: 2,
      Img: "/Image/02.png",
      Head: "Celeste India ",
      Des: "I designed and developed the complete website for Celeste India, an e-commerce platform. My client Siddhi, the owner of Celeste India, wanted a website that looked premium and amazing. In line with these requirements, I created an e-commerce site with a custom design, incorporating various features and utilizing a custom theme. The goal was to deliver a stunning website that aligns with their vision and provides a great online platform for their jewelry business. With this website, they are now well-equipped to commence their e-commerce jewelry business, and I ensured their satisfaction by meeting their specific requirements.",
      Codelink: "/",
      Websitelink: "https://celesteindia.in/",
    },
    {
      id: 3,
      Img: "/Image/01.jpg",
      Head: "Real State ",
      Des: "To upgrade my skills, I am attempting to create a real estate project using React, focusing solely on its component-based architecture. In this project, I am not utilizing any additional React features; it is purely a component-based React project with Tailwind CSS.",
      Codelink:
        "https://github.com/iamrishabhnirmalkar/RealState?tab=readme-ov-file",
      Websitelink: "https://powergroupproject.netlify.app/",
    },
    {
      id: 4,
      Img: "/Image/Movieokk.png",
      Head: "Movie Okkk ",
      Des: "In the movie OKK, which is a movie search website, I utilize the OMDB API to fetch movie data. In this React project, I focus on working with APIs and demonstrate how to retrieve data by searching for any movie provided by the user.",
      Codelink: "https://github.com/iamrishabhnirmalkar/Movie-Searvhing-App",
      Websitelink: "https://movieokk.netlify.app/",
    },
    {
      id: 5,
      Img: "/Image/Comman.png",
      Head: "Chat App",
      Des: "In the React project, I incorporated Firebase to handle authentication and database functionalities for my chat application. I learned how to create this project by following tutorials on YouTube and attempted to implement it independently.",
      Codelink: "https://github.com/iamrishabhnirmalkar/Chat-App/tree/main/src",
      Websitelink: "https://rishcodechatapp.netlify.app/",
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
