import React from "react";
import { test } from "./testServer";
import { useGlobalContext } from "./context";
const Start = () => {
  // const { startJourney } = useGlobalContext();
  test();
  return (
    <section className='start-section'>
      <div className='banner'>
        <div className='start-banner'>
          <h1 className='header-title'>
            road to <br /> saint nicholas
          </h1>
          <h3 className='header-sub'> city quiz tour</h3>
        </div>
        {/* <div className='btn-wrapper' onClick={startJourney}> */}
        <div className='btn-wrapper'>
          <a href={`/login`} className='btn start-btn'>
            start journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Start;
