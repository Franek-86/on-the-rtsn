import React from "react";
import { useGlobalContext } from "../context";
const Video = () => {
  const { stopData, test } = useGlobalContext();
  return (
    <div className='video-section'>
      {/* <iframe
        width='560'
        height='315'
        src={test ? stopData?.stop[0]?.video : "loading"}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe> */}
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/pbhncrh14xo?si=YCDNX3gaABw5vXLU'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
      ></iframe>
    </div>
  );
};

export default Video;
// <iframe
//   width='560'
//   height='315'
//   src='https://youtu.be/pbhncrh14xo'
//   title='YouTube video player'
//   frameborder='0'
//   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//   referrerpolicy='strict-origin-when-cross-origin'
// ></iframe>;
