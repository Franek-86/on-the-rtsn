import React from "react";
// import { useGlobalContext } from "../context";
const Video = () => {
  // const { startJourney } = useGlobalContext();
  return (
    <div className='video-section'>
      <video
        width='320'
        height='240'
        src='https://www.youtube.com/watch?v=pbhncrh14xo&ab_channel=FrancescoLeccese'
        type='video/mp4'
        controls
      ></video>
    </div>
  );
};

export default Video;
