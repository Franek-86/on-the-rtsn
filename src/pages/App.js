// import "leaflet/dist/leaflet.css";
import "../../node_modules/leaflet/dist/leaflet.css";
import Map from "../components/Map";
import Loading from "../components/Loading";
import Questions from "../components/Questions";
import Modal from "../components/Modal";

import { useGlobalContext } from "../context";

function App() {
  const { waiting, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
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
