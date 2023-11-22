import React from "react";
import { useUserContext } from "../userContext";

const Welcome = () => {
  const { user, member } = useUserContext();
  return (
    <div className='welcome'>
      <h2>
        {`Welcome ${member ? "back" : ""}`} <br /> on board <br /> {`${user}`}
      </h2>
    </div>
  );
};

export default Welcome;
