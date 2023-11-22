import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

const Congratulations = () => {
  const {
    isModalOpen,
    closeModal,
    correct,
    questions,
    setCenter,
    showOctopus,
    setIsPassed,
    isPassed,
    closeSecondModal,
    locationIndex,
    endJourney,
    end,
    resetQuiz,
    slideRoad,
  } = useGlobalContext();
  const navigate = useNavigate();
  let closeResultsAndShowCricket = () => {
    if (locationIndex === 4) {
      console.log("fine");
      closeSecondModal();
      navigate("/end");
    } else {
      showOctopus();
      closeSecondModal();
      // slideRoad();
    }
  };

  var getName = JSON.parse(localStorage.getItem("user"));

  let name = getName.name;

  return (
    <div className={isModalOpen ? "modal-container isOpen" : "modal-container"}>
      <div className='modal-content'>
        <h2>{`congrats ${name}!`}</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className='close-btn' onClick={closeResultsAndShowCricket}>
          {locationIndex === 4 ? <span>close</span> : <span>back to map</span>}
        </button>
      </div>
    </div>
  );
};

export default Congratulations;
