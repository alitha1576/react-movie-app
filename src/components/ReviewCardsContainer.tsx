import ReviewCard from "./ReviewCard";
import "../styles/ReviewCard.css";
import { useState, useEffect } from "react";

export default function ReviewCardsContainer({ limit }: { limit?: number }) {
  const getDataFromLocalStorage = (key: string) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error parsing localStorage data for key "${key}":`, error);
      return null;
    }
  };

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const data = getDataFromLocalStorage("reviews");
    if (data) {
      setReviews(data);
    }
  }, []);

  const displayedReviews = limit ? reviews.slice(-limit).reverse() : reviews;

  return (
    <div className="reviewsContainer">
      {reviews.length > 0 ? (
        reviews.map((r, i) => (
          <ReviewCard
            key={i}
            email={r.email}
            movie={r.movie}
            review={r.review}
            rating={r.rating}
          />
        ))
      ) : (
        <p>No reviews yet. Add yours!</p>
      )}
    </div>
  );
}
