import axios from "axios";
import { stubTrue } from "lodash";

import React, { useState, useContext } from "react";

import { Navigate } from "react-router-dom";

const AppContext = React.createContext();

let localization;
const setLocIndex = () => {
  if (localStorage.getItem("locationIndex")) {
    localization = parseInt(localStorage.getItem("locationIndex"));
  } else {
    localization = 0;
  }
  return localization;
};
let slideIndex;
const setSlideRoad = () => {
  if (localStorage.getItem("slideIndex")) {
    slideIndex = parseInt(localStorage.getItem("slideIndex"));
  } else {
    slideIndex = 0;
  }
  return slideIndex;
};

const AppProvider = ({ children }) => {
  // const [locationIndex, setLocationIndex] = useState(setLocIndex);
  const [locationIndex, setLocationIndex] = useState(setLocIndex);
  const [center, setCenter] = useState([
    ["airport", { lat: 41.1376372629904, lng: 16.765180540261554 }],
    ["duomo", { lat: 41.12859815408936, lng: 16.86877482698253 }],
    ["theatre", { lat: 41.12366528257363, lng: 16.872688445798705 }],
    ["games", { lat: 41.10871623899713, lng: 16.886143782588302 }],
    ["stadium", { lat: 41.085503141131355, lng: 16.84006701608872 }],
  ]);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [slide, setSlide] = useState(setSlideRoad);
  const [start, setIsStart] = useState(true);
  const [end, setIsEnd] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const [url, setUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(0);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [stopData, setStopData] = useState(null);
  const [test, setTest] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      console.log(response);
      const data = response.data.allQuestions;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };
  // console.log(test);
  const fetchStopData = async (url) => {
    setTest(false);
    // setLoading(true);
    // setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      // console.log(response.data);
      const data = response.data;
      console.log(data);
      if (data) {
        setStopData(data);
        setTest(true);
        // setLoading(false);
        // setWaiting(false);
        // setError(false);
      } else {
        console.log("boh");
        // setWaiting(true);
        // setError(true);
      }
    } else {
      console.log("boh2");
      // setWaiting(true);
    }
  };

  const startJourney = () => {
    setIsStart(false);
    setIsEnd(false);
  };
  const slideRoad = () => {
    if (locationIndex === 1) {
      setSlide(1);
      localStorage.setItem("slideIndex", 1);
    }
    if (locationIndex === 2) {
      console.log("slide2");
      setSlide(2);
      localStorage.setItem("slideIndex", 2);
    }
    if (locationIndex === 3) {
      console.log("slide3");
      setSlide(3);
      localStorage.setItem("slideIndex", 3);
    }
  };
  const reStart = () => {
    closeModal();
    setIsSecondModalOpen(false);
    setWaiting(true);
    localStorage.setItem("locationIndex", 0);
    setLocationIndex(0);
    startJourney();
    setSlide(0);
    setIsStart(true);
  };

  const endJourney = () => {
    setIsEnd(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };
  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };
  const nextLocation = () => {
    // console.log("test", locationIndex - (center.length - 1));
    let flag = locationIndex >= center.length - 1;

    if (flag) {
      setLocationIndex(0);

      // setCenter(center[0][1]);
    } else {
      let nextPlace = parseInt(locationIndex + 1);
      localStorage.setItem("locationIndex", nextPlace);
      setLocationIndex(nextPlace);
    }
  };
  const showOctopus = () => {
    closeModal();
    setIsPassed(true);
  };
  const hideCricket = () => {
    setIsPassed(false);
  };
  const nextQuestion = () => {
    if (index > questions.length - 1) {
      setIndex(0);
    }
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openSecondModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { location } = stopData.stop[0];
    const url = `https://rtsn-v2b.onrender.com/api/v1/quiz?location=${location}`;
    setUrl(url);
    fetchQuestions(url);
  };
  const getStopData = () => {
    const url = `https://rtsn-v2b.onrender.com/api/v1/stops?stop=${locationIndex}`;
    fetchStopData(url);
  };

  return (
    <AppContext.Provider
      value={{
        center,
        isModalOpen,
        loading,
        error,
        waiting,
        questions,
        index,
        correct,
        isSecondModalOpen,
        url,
        locationIndex,
        isPassed,
        start,
        end,
        slide,
        stopData,
        test,
        welcomeModal,
        setWelcomeModal,
        setSlideRoad,
        getStopData,
        showOctopus,
        setCenter,
        setWaiting,
        closeModal,
        openSecondModal,
        closeModal,
        openModal,
        handleSubmit,
        checkAnswer,
        nextQuestion,
        fetchQuestions,
        closeSecondModal,
        nextLocation,
        hideCricket,
        startJourney,
        endJourney,
        setLocationIndex,
        setLocIndex,
        reStart,
        slideRoad,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
