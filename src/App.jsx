import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  // const sectionRef = useRef(null);
  // const navbarHeight = 56; // Adjust this to match the actual height of your navbar

  // const onScrollToSectionClicked = () => {
  //   if (sectionRef.current) {
  //     const topOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
  //     window.scrollTo({
  //       top: topOffset,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="bg-darkPurple">
      <div className="max-w-screen-2xl bg-purple min-h-screen mx-auto">
        <div className="sticky top-0 h-14">
          <Navbar />
        </div>

        {/* <div ref={sectionRef} className="w-48 min-h-[2000px] bg-yellow-300">
          <p>Target Section</p>
        </div> */}
      </div>
    </div>
  );
};

export default App;
