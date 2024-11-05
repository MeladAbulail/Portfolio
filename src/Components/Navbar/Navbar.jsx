import React, { useState, useRef } from "react";

function Navbar() {
  return (
    <div className="w-full text-lg text-secondary font-semibold">
      <div className="flex flex-row align-middle justify-between mt-8 mx-10">
        <div className="w-72 px-3 py-1">
          <NavItem label={`\u00A9 Code by Melad`} isWithDot={false}/>
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

function NavItem({ label, isWithDot }) {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    if (itemRef.current) {
      const { left, top, width, height } =
        itemRef.current.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 15;
      const y = ((clientY - top) / height - 0.5) * 15;
      setTransform({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <div
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col gap-3 group cursor-pointer w-fit h-16 text-center"
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      <span>{label}</span>
      {isWithDot && (
        <div className="h-2 w-2 bg-purple rounded-xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      )}{" "}
    </div>
  );
}

export default Navbar;
