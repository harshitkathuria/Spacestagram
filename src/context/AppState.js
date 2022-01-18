import axios from "axios";
import { useReducer } from "react";
import AppContext from "./AppContext";

const ACTION = {
  SET_LOADING: "SET_LOADING",
  GET_IMAGES: "GET_IMAGES"
};

const BASE_URL = `https://api.nasa.gov/planetary/apod?start_date=2021-09-01&end_date=2021-09-30&api_key=${process.env.REACT_APP_API_KEY}`;

function reducer(state, action) {
  switch (action.type) {
    case ACTION.SET_LOADING:
      return { ...state, loading: true, images: [] };
    case ACTION.GET_IMAGES:
      return { ...state, loading: false, images: action.payload };
    default:
      return state;
  }
}

export default props => {
  const initialState = {
    loading: false,
    images: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch({ type: ACTION.SET_LOADING });
  };

  // Get Images
  const getImages = async () => {
    setLoading();
    const res = await axios.get(BASE_URL);
    dispatch({
      type: ACTION.GET_IMAGES,
      payload: res.data
    });
  };

  return (
    <AppContext.Provider
      value={{
        loading: state.loading,
        images: state.images,
        setLoading,
        getImages
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
