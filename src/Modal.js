import React from "react";
import { useGlobalContext } from "./context";
import { FaOctopusDeploy } from "react-icons/fa";
import { SiChainguard } from "react-icons/si";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Modal = () => {
  const {
    openModal,
    handleSubmit,
    isModalOpen,
    closeModal,
    quiz,
    center,
    locationIndex,
  } = useGlobalContext();
  const { category, amount, difficulty, text } = quiz;
  let flag = false;
  if (category === "Musicals_And_Theatres") {
    flag = true;
  }
  return (
    <section
      className={!isModalOpen ? "section-modal" : "section-modal show-modal"}
    >
      <article className='modal modal-1'>
        <div className='modal-title'>
          <div className='modal-icon'>
            <SiChainguard className='modal-brand-icon' />
          </div>
          <h3>the {flag ? "Musicals & Theatres" : category} quiz</h3>
          <button onClick={closeModal} className='close-modal'>
            <AiOutlineCloseSquare className='modal-brand' />
          </button>
        </div>
        <div className='modal-center'>
          <div className='modal-text'>
            <p>{text}</p>
            <ul>
              <li>
                <h5>Category: </h5>
                <span>{flag ? "Musicals & Theatres" : category}</span>;
              </li>
              <li>
                <h5>Number of questions: </h5>
                <span>{amount};</span>
              </li>
              <li>
                <h5>Difficulty level: </h5>
                <span>{difficulty};</span>
              </li>
              <li>
                <h5>Test number: </h5>
                <span>
                  {locationIndex + 1} of {center.length};
                </span>
              </li>
            </ul>
          </div>
          <div className='open-modal-btn'>
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
