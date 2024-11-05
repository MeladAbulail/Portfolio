import React, { useState, useRef } from "react";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className="w-full text-lg text-secondary font-semibold">
      <div className="flex flex-row align-middle justify-between mt-8 mx-10">
        <div className="w-72 px-3 py-1">
          <NavItem label={`\u00A9 Code by Raiga `} isWithDot={false}/>
        </div>
        <div className="flex flex-row gap-14 px-3 py-1 select-none">
          <NavItem label="Work" isWithDot/>
          <NavItem label="About" isWithDot/>
          <NavItem label="Contact" isWithDot/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
