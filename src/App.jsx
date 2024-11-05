import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-darkPurple">
      <div className="max-w-screen-2xl bg-primary min-h-screen mx-auto  ">
        <div className="sticky top-0 h-14">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default App;
