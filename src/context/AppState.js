import axios from "axios";
import { useReducer } from "react";
import AppContext from "./AppContext";

const ACTION = {
  SET_LOADING: "SET_LOADING",
  GET_IMAGES: "GET_IMAGES",
  LIKE_IMAGE: "LIKE_IMAGE",
  UNLIKE_IMAGE: "UNLIKE_IMAGE"
};

const BASE_URL = `https://api.nasa.gov/planetary/apod?start_date=2021-09-01&end_date=2021-09-15&api_key=${process.env.REACT_APP_API_KEY}`;

export default props => {
  const initialState = {
    loading: false,
    images: [],
    liked: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTION.SET_LOADING:
        return { ...state, loading: true, images: [] };
      case ACTION.GET_IMAGES:
        return { ...state, loading: false, images: action.payload };
      case ACTION.LIKE_IMAGE:
        return { ...state, liked: [...state.liked, action.payload] };
      case ACTION.UNLIKE_IMAGE:
        return {
          ...state,
          liked: state.liked.filter(image => image !== action.payload)
        };
      default:
        return state;
    }
  }

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

  // Like Images
  const likeImage = data => {
    dispatch({
      type: ACTION.LIKE_IMAGE,
      payload: data
    });
  };

  // Unlike Images
  const unlikeImage = data => {
    dispatch({
      type: ACTION.UNLIKE_IMAGE,
      payload: data
    });
  };

  return (
    <AppContext.Provider
      value={{
        loading: state.loading,
        images: state.images,
        liked: state.liked,
        setLoading,
        getImages,
        likeImage,
        unlikeImage
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
