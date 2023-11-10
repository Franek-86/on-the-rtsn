// import "leaflet/dist/leaflet.css";
import "../node_modules/leaflet/dist/leaflet.css";
import Map from "./Map";
import Loading from "./Loading";
import Questions from "./Questions";
import Modal from "./Modal";
import Start from "./Start";
import End from "./End";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import Login from "./Login";

function App() {
  const { isModalOpen, waiting, loading, start, end, locationIndex, test } =
    useGlobalContext();

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
