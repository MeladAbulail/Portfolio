import React, { useState } from 'react'

function Navbar() {

  const [clicked, setClicked] = useState(false)

  function onMenuCliced(){
    setClicked(!clicked);
  }

  return (
    <div className="w-100 bg-[#7091e6] text-white min-h-32">
      <div className='flex justify-between'>
        <div className='m-6'>
          <span className='text-[#EDE8F5] text-4xl '>
            itsRaiga
          </span>
        </div>



        <div className="cursor-pointer m-8" onClick={onMenuCliced}>
          <div
            className={`h-[5px] w-[40px] bg-black my-1 rounded-md ${
              clicked
                ? "-rotate-45 translate-y-[10px] ease-in duration-150"
                : "ease-in duration-150"
            }`}
          ></div>
          <div
            className={`h-[5px] w-[40px] bg-black my-1 rounded-md ${
              clicked ? "ease-in duration-150 hidden" : ""
            }`}
          ></div>
          <div
            className={`h-[5px] w-[40px] bg-black my-1 rounded-md ${
              clicked
                ? "rotate-45 ease-in duration-150"
                : "ease-in duration-150"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar