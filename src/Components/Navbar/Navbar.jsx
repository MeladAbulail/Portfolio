import React from "react";

function Navbar() {
  return (
    <div className="w-full">
      <div className="flex flex-row align-middle justify-between p-4">
        <div>
          <span>Melad Abulail</span>
        </div>
        <div className="">
          <div className="">
            <span>About</span>
            <span>Work</span>
          </div>
        </div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
