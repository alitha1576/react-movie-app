import { fakeReviews } from "../data/FakeReviews";
import ReviewCard from "./ReviewCard";
import "../styles/ReviewCard.css";

export default function ReviewCardsContainer() {
  return (
    <div className="reviewsContainer">
      {fakeReviews.map((r, i) => (
        <ReviewCard
          key={i}
          email={r.email}
          movie={r.movie}
          review={r.review}
          rating={r.rating}
        />
      ))}
    </div>
  );
}
