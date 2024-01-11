import React from "react";

function Project() {
  return (
    <>
      <div className="bg-black  text-white min-h-screen">
        <div className=" flex-row text-center py-3">
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/4929032/pexels-photo-4929032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="rounded-full w-16 h-16 border border-white mx-auto"
            />
          </div>
          <div className="flex-row justify-center">
            <h1 className="text-lg">Heading</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="flex justify-center space-x-2">
            <button className="border border-white">Link</button>
            <button className="border border-white">Code</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
