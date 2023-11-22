import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Start = () => {
  // const { startJourney } = useGlobalContext();
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
          <Link to='/login' className='btn start-btn'>
            start journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Start;
