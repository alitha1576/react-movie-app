import { createContext, useContext, useReducer } from "react";
import { reviewReducer, preExistingReviews } from "./reviewUtils";

const ReviewContext = createContext(undefined);

export const ReviewProvider = ({ children }) => {
  const [reviews, dispatch] = useReducer(reviewReducer, preExistingReviews);

  const addReview = (review) => {
    dispatch({ type: "ADD_REVIEW", payload: review });
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewContext);
  return context;
};