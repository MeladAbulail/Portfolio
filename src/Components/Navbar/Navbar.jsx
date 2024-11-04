import React from "react";

function Navbar() {
  return (
    <div className="w-full border-b-[0.05px] border-white">
      <div className="mx-auto">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center ">
            <img
              src="/Logo.webp"
              alt="Melad Abulail"
              className="h-10 w-10 pointer-events-none  "
            />
            <a className="text-white p-4">Melad Abulail</a>2
          </div>
          <div className="flex space-x-4">
            <a className="text-white cursor-none">About</a>
            <a className="text-white cursor-none">Projects</a>
            <a className="text-white cursor-none">Contact</a>
            <a className="text-white cursor-none">Melad</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
