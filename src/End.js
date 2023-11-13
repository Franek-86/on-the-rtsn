import React from "react";
import { FaTrophy } from "react-icons/fa";
// import { useGlobalContext } from "./context";
import { useGlobalContext } from "./context";
import { useUserContext } from "./userContext";
import { Link } from "react-router-dom";
import Map from "./Map";

const End = () => {
  // const { start, reStart } = useGlobalContext();
  const { start, reStart } = useGlobalContext();
  const { logout } = useUserContext();

  var user = JSON.parse(localStorage.getItem("user"));

  let userName = user.name;
  return (
    <section className='map-section'>
      <Map></Map>
      <section className='end-section'>
        <div className='end-wrapper'>
          <article className='end-icon'>
            <FaTrophy />
          </article>
          <article className='end-text'>
            <p>
              Well done <span>{userName}</span>!
            </p>
            <p>
              You successfully completed the`{" "}
              <span>road to Saint Nicholas </span>
              quiz tour.
            </p>
            <div className='end-btn-container'>
              <Link
                to='/start'
                onClick={() => {
                  reStart();
                  logout();
                }}
                className='btn end-btn'
              >
                end quiz
              </Link>
              <Link
                to='/rtsn'
                onClick={reStart}
                className='btn start-again-btn'
              >
                back to airport
              </Link>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default End;

// <div className='failure-btn-wrapper'>
//   <button className='close-btn play-again' onClick={closeSecondModal}>
//     play again
//   </button>
//   <button className='close-btn back-to-map' onClick={closeModal}>
//     back to map
//   </button>
// </div>;
