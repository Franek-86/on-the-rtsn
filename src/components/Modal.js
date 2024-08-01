import React from "react";
import { useGlobalContext } from "../context";
import { FaOctopusDeploy } from "react-icons/fa";
import { SiChainguard } from "react-icons/si";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Modal = () => {
  const {
    openModal,
    handleSubmit,
    isModalOpen,
    closeModal,
    center,
    locationIndex,
    quiz,
    stopData,
    loading,
    test,
  } = useGlobalContext();
  // const { location, amount, difficulty, text } = quiz;

  // const { location, image, text } = stopData?.stop[0];

  return (
    <section
      className={!isModalOpen ? "section-modal" : "section-modal show-modal"}
    >
      <article className='modal modal-1'>
        <div className='modal-title'>
          <div className='modal-icon'>
            <SiChainguard className='modal-brand-icon' />
          </div>
          <h3>the {test ? stopData?.stop[0].location : "loading"}'s quiz</h3>
          <button onClick={closeModal} className='close-modal'>
            <AiOutlineCloseSquare className='modal-brand' />
          </button>
        </div>
        <div className='modal-center'>
          <div className='modal-text'>
            <p>{test ? stopData?.stop[0].text : "loading"}</p>
          </div>
          <div className='open-modal-btn'>
            <button className='btn open-btn' onClick={handleSubmit}>
              watch video
            </button>
            <button className='btn open-btn' onClick={handleSubmit}>
              start test
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Modal;
