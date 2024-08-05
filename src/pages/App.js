import "../../node_modules/leaflet/dist/leaflet.css";
import Map from "../components/Map";
import Loading from "../components/Loading";
import Questions from "../components/Questions";
import Modal from "../components/Modal";

import { useGlobalContext } from "../context";
import Video from "./video";

function App() {
  const { waiting, loading, video } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (video) {
    return <Video />;
  }

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
