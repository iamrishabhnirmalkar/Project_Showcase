import React from "react";

function image() {
  return (
    <div className="bg-black">
      <div className="flex justify-center items-center py-3">
        <img
          src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className=" w-2/5 h-2/5 rounded-full border border-white "
        />
      </div>
    </div>
  );
}

export default image;
