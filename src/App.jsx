import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-darkPurple">
      <div className="max-w-screen-2xl bg-primary min-h-screen mx-auto">
        <div className="sticky top-0 h-14">
          <Navbar />
        </div>

        <span className="font-mono">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          labore, quia consequatur magnam obcaecati cum sint sed ipsam ipsum
          porro eius! Possimus quidem rerum dolores praesentium nostrum facilis
          maiores odit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quis quisquam veritatis sunt magnam ullam nobis modi culpa, temporibus
          natus ab autem excepturi alias minus quaerat, tenetur nihil accusamus
          labore repellat? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eligendi inventore tempore earum impedit perspiciatis, ducimus
          modi autem aliquid molestiae sed optio, quis saepe? Officiis quis,
          dicta in veritatis iste quod!
        </span>
      </div>
    </div>
  );
};

export default App;
