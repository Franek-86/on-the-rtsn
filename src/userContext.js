import axios from "axios";
import "./utils/axios";
import React, { useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./context";
const SET_LOADING = "SET_LOADING";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";
const SET_ALERT_OFF = "SET_ALERT_OFF";
const SET_ALERT_ON = "SET_ALERT_ON";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === SET_LOADING) {
    return { ...state, showAlert: false };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
      showAlert: false,
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      user: null,
      showAlert: true,
    };
  }

  if (action.type === SET_USER) {
    return { ...state, user: action.payload };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
      showAlert: false,
    };
  }
  if (action.type === SET_ALERT_OFF) {
    return {
      ...state,
      showAlert: false,
    };
  }
};

const initialState = {
  user: null,
  isLoading: false,
  showAlert: false,
};

const AppContext = React.createContext();

const UserProvider = ({ children }) => {
  const { setLocationIndex, setSlideRoad } = useGlobalContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  const setAlertOff = () => {
    dispatch(SET_ALERT_OFF);
  };

  // register
  const registerUser = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(
        `https://rtsn-b.onrender.com/api/v1/auth/register`,
        {
          ...userInput,
        }
      );

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.username });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.username, token: data.token })
      );
    } catch (error) {
      console.log(error);
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };

  // login
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(
        `https://rtsn-b.onrender.com/api/v1/auth/login`,
        {
          ...userInput,
        }
      );
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.name });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      dispatch({ type: REGISTER_USER_ERROR });
    }
  };

  // logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("slideIndex");
    localStorage.removeItem("locationIndex");
    setLocationIndex(0);
    setSlideRoad(0);

    dispatch({ type: LOGOUT_USER });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const newUser = JSON.parse(user);
      dispatch({ type: SET_USER, payload: newUser.name });
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: SET_ALERT_OFF });
    }, 3000);
  }, [state.showAlert]);
  const [member, setIsMember] = React.useState(false);
  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        login,
        logout,
        setIsMember,
        member,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(AppContext);
};

export { UserProvider };
