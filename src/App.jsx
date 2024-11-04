import React, { useRef, useEffect } from "react";

const App = () => {
  const circleRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  
  const circleSize = 16;
  const halfCircleSize = circleSize / 2;

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          if (circleRef.current) {
            circleRef.current.style.transform = `translate(${positionRef.current.x - halfCircleSize}px, ${positionRef.current.y - halfCircleSize}px)`;
          }
          animationFrameId = null;
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative cursor-none">
      <div className="w-full border-b-[0.05px] border-white">
        <div className="w-1/2 mx-auto">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <img
                src="/Logo.webp"
                alt="Melad Abulail"
                className="h-10 w-10"
              />
              <a className="text-white p-4">Melad Abulail</a>
            </div>
            <div className="flex space-x-4">
              <a className="text-white cursor-none" href="#about">About</a>
              <a className="text-white cursor-none" href="#projects">Projects</a>
              <a className="text-white cursor-none" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>

      
      <div
        ref={circleRef}
        className="w-4 h-4 bg-white rounded-full pointer-events-none absolute transition-transform duration-75 ease-out"
        style={{
          top: 0,
          left: 0,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>
    </div>
  );
};

export default App;