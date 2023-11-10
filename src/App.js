// import "leaflet/dist/leaflet.css";
import "../node_modules/leaflet/dist/leaflet.css";
import Map from "./Map";
import Loading from "./Loading";
import Questions from "./Questions";
import Modal from "./Modal";

import Start from "./Start";
import End from "./End";

import { useGlobalContext } from "./context";
import Login from "./Login";
import { useEffect } from "react";

function App() {
  const { isModalOpen, waiting, loading, start, end, locationIndex, test } =
    useGlobalContext();

  // useEffect(() => {
  //   var test = JSON.parse(localStorage.getItem("user"));
  //   console.log(test);
  //   if (!test) {
  //     <Navigate to='/login' replace={true} />;
  //   }
  // }, []);

  if (loading) {
    return <Loading />;
  }
  // if (start && locationIndex === 0) {
  //   return <Start />;
  // }
  // if (end) {
  //   return (
  //     <section className='map-section'>
  //       <Map />
  //       <End />
  //     </section>
  //   );
  // }
  if (waiting) {
    return (
      <section className='map-section'>
        <Map />
        <Modal />
      </section>
    );
  }
  return (
    <section className='map-section'>
      <Map />
      <Questions />
    </section>
  );
}

export default App;
