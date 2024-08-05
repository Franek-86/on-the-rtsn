import React from "react";
import { useGlobalContext } from "../context";
import { AiOutlineCloseSquare } from "react-icons/ai";
const Video = () => {
  const { stopData, test, closeVideo } = useGlobalContext();
  return (
    <>
      <button onClick={closeVideo} className='close-modal close-video'>
        <AiOutlineCloseSquare className='' />
      </button>

      <div className='video-section'>
        <iframe
          width='560'
          height='315'
          src={test ? stopData?.stop[0]?.video : "loading"}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Video;
