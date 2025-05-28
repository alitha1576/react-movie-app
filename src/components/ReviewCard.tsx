import "../styles/ReviewCard.css";
import { Rating } from "@mui/material";

type ReviewCardProps = {
  email: string;
  movie: string;
  review: string;
  rating: number;
};

export default function ReviewCard({
  email,
  movie,
  review,
  rating,
}: ReviewCardProps) {
  const starRating = rating / 2;

  return (
    <div className="reviewCard">
      <h3 className="reviewEmail">{email}</h3>
      <h4 className="reviewMovie">{movie}</h4>
      <p className="reviewText">{review}</p>
      <hr />
      <div className="reviewRating">
        <p>Rated: {rating} / 10</p>
        <Rating
          value={starRating}
          precision={0.5}
          readOnly
          sx={{
            "& .MuiRating-iconEmpty": {
              color: "#ccc",
            },
          }}
        />
      </div>
    </div>
  );
}
