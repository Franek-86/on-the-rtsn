import React from "react";
import { useGlobalContext } from "../context";

import {
  FeatureGroup,
  TileLayer,
  Marker,
  CircleMarker,
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
import { useRef } from "react";

// import Popup from "./Popup";

const MyMarker = (props) => {
  const initMarker = (ref) => {
    if (ref) {
      ref.openPopup();
    }
  };

  return <CircleMarker ref={initMarker} {...props} />;
};
const CircleMarkers = () => {
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
    slide,
    slideRoad,
    loadQuiz,
    quiz,
    stopData,
    test,
  } = useGlobalContext();
  // const { location, text, image } = quiz;

  // const [location, text, image] = stopData.stop[0];
  // console.log(stopData.stop[0]);
  // const { location, image } = stopData.stop[0];
  // console.log(location);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setTest1(!test1);
  //   }, 2000);
  // }, [center]);
  const blackOptions = { color: "black" };
  const brownOption = { color: "#cc660e" };
  const redOptions = { color: "red" };
  const fillRedOptions = { color: "red", fillColor: "white" };
  const purpleOptions = { color: "purple" };

  let circleArr = Array.apply(null, { length: center.length });
  // React.useEffect(() => {
  //   loadQuiz();
  // }, [center]);

  return circleArr.map((i, index) => {
    return (
      <MyMarker
        key={index}
        className={locationIndex === index ? "stop" : "disappear"}
        center={center[index][1]}
        pathOptions={brownOption}
        stroke={brownOption}
        radius={20}
        eventHandlers={{
          click: () => {
            openModal();
            // slideRoad();
          },
        }}
      >
        {locationIndex === index ? (
          <Popup>
            <img
              className='popup-image '
              src={test ? stopData.stop[0].image : "null"}
              alt={test ? stopData.stop[0].location : "loading"}
              onClick={console.log("ciao")}
            />
          </Popup>
        ) : null}
      </MyMarker>
    );
  });
};

export default CircleMarkers;
