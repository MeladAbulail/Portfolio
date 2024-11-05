import React from "react";

function Navbar() {
  return (
    <div className="w-full text-lg	text-secondary font-semibold">
      <div className="flex flex-row align-middle justify-between mt-8 mx-10">
        <div className="border-2 border-purple rounded-xl px-3 py-1">
          <span className="hover:rotate-180">&copy; Code by Melad</span>
        </div>
        <div className="flex flex-row gap-14 border-2 border-purple rounded-xl px-3 py-1">
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
