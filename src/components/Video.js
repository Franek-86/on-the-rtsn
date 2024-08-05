import React from "react";
// import { useGlobalContext } from "../context";
const Video = () => {
  // const { startJourney } = useGlobalContext();
  return (
    <div className='video-section'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/pbhncrh14xo?si=wiNa_j6fcIAAt3RO'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
