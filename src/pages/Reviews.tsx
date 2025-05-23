import ReviewForm from "../components/reviews/ReviewForm";
import ReviewsList from "../components/reviews/ReviewsList";

export default function Reviews () {
return (
  <div className="reviewPage">
    <h2 className="sectionTitle">Reviews</h2>
    <ReviewForm />
    <ReviewsList />
  </div>
);
}