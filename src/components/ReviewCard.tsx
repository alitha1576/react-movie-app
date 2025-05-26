import { fakeReviews } from "../data/FakeReviews";
import "../styles/ReviewCard.css";

type ReviewCardProps = {
  email: string;
  movie: string;
  review: string;
  rating: number;
};

export default function ReviewCard({ email, movie, review, rating }: ReviewCardProps) {
  return (
    <div className="reviewCard">
      <h3 className="reviewEmail">{email}</h3>
      <h4 className="reviewMovie">{movie}</h4>
      <p className="reviewText">{review}</p>
      <hr />
      <p className="reviewRating">Rated: {rating}</p>
    </div>
  );
}
