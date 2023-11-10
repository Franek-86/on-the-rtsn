import axios from "axios";
import "./axios";
import React, { useContext, useEffect, useReducer } from "react";

const SET_LOADING = "SET_LOADING";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
const SET_USER = "SET_USER";
const LOGOUT_USER = "LOGOUT_USER";

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload,
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
};

const initialState = {
  user: null,
  isLoading: false,
  showAlert: false,
};

const AppContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  // register
  const registerUser = async (userInput) => {
    console.log(userInput);
    setLoading();
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/questions/register`,
        {
          ...userInput,
        }
      );
      console.log(data);

      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user.username });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.username, token: data.token })
      );
      JSON.stringify({ name: "ciao" });
    } catch (error) {
      // dispatch({ type: REGISTER_USER_ERROR });
      console.log(error);
    }
  };

  // login
  const login = async (userInput) => {
    setLoading();
    try {
      const { data } = await axios.post(
        `http://localhost:8000/api/v1/questions/login`,
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
    dispatch({ type: LOGOUT_USER });
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const newUser = JSON.parse(user);
      dispatch({ type: SET_USER, payload: newUser.name });
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { UserProvider };
