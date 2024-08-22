import { React, useState, useEffect } from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";
import "leaflet/dist/leaflet.css";

import Road from "./Road";
import CircleMarkers from "./CircleMarkers";
import {
  FeatureGroup,
  TileLayer,
  Marker,
  ImageOverlay,
  Circle,
  Polyline,
  Polygon,
  Rectangle,
  Popup,
  SVGOverlay,
  LayerGroup,
  useMap,
  useMapEvents,
  MapContainer,
  isPassed,
} from "react-leaflet";
import octopus from "../images/octopus.png";
import Table from "./Table";
import Welcome from "./Welcome";
import { useUserContext } from "../userContext";

const Map = () => {
  // const [isDisabled, setIsDisabled] = useState(false);
  const {
    openModal,
    isPassed,
    handleSubmit,
    isModalOpen,
    setQuiz,
    center,
    setCenter,
    locationIndex,
    nextLocation,
    hideCricket,
    reStart,
    test,
    slide,
    slideRoad,
    getStopData,
    getStop,
    stopData,
    welcomeModal,
    setWelcomeModal,
  } = useGlobalContext();
  const { showAlert } = useUserContext();
  const blackOptions = { color: "black" };
  const brownOption = { color: "#cc660e" };
  const redOptions = { color: "red" };
  const fillRedOptions = { color: "red", fillColor: "white" };
  const purpleOptions = { color: "purple" };
  useEffect(() => {
    setWelcomeModal(true);
    // setTimeout(() => {
    //   setWelcomeModal(false);
    //   console.log("ciao");
    // }, [3000]);
  }, []);

  useEffect(() => {
    getStopData();
  }, [locationIndex]);
  const FlyToButton = ({ latlng }) => {
    const map = useMap();
    const fly = () => {
      // if (isDisabled === false) {
      if (locationIndex < center.length - 1) {
        nextLocation();

        // getStopData();
      }
      if (locationIndex < center.length) {
        map.flyTo(latlng, 17, { duration: 2 });
      } else {
        console.log("stop it");
      }
      // setIsDisabled(true);
      slideRoad();
      hideCricket();
      // }
    };
    return (
      <div className='fly-btn-wrapper' onClick={fly}>
        <div className='loader-btn'></div>
        <div className='background-btn'></div>
        <img className='flyToBtn' src={octopus} alt='no' />
      </div>
    );
  };

  return (
    <MapContainer
      style={{ width: "100%", height: "100%" }}
      center={center[locationIndex][1]}
      zoom={17}
      scrollWheelZoom={false}
      eventHandlers={{
        click: () => {
          console.log("marker clicked");
        },
      }}
    >
      {showAlert && <Welcome />}
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
      /> */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {/* {test && <Test />} */}
      {isPassed ? <FlyToButton latlng={center[locationIndex + 1][1]} /> : null}
      {/* ---------------------Welcome---------------------- */}
      {/* {welcomeModal && <Welcome />} */}
      {/* ---------------------table---------------------- */}
      {!isModalOpen && <Table />}
      {/* ---------------------road----------------------- */}
      {!isModalOpen && <Road />}
      {/* -----------------circle markers----------------- */}
      {!isPassed && <CircleMarkers />}
    </MapContainer>
  );
};

export default Map;
