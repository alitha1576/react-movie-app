export const preExistingReviews = [
    {
      name: "Anna",
      comment: "Great movie, loved the cinematography!",
      rating: 9,
      media: "Interstellar",
    },
    {
      name: "John",
      comment: "A bit too long, but overall decent.",
      rating: 7,
      media: "The Brutalist",
    },
    {
      name: "Maria",
      comment: "Amazing character development!",
      rating: 8,
      media: "The Last of Us",
    },
  ];
  
  export const reviewReducer = (state, action) => {
      switch (action.type) {
        case "ADD_REVIEW":
          return [action.payload, ...state];
        default:
          return state;
      }
  };