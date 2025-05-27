import { useForm, type SubmitHandler } from "react-hook-form";
import ReviewCardsContainer from "../components/ReviewCardsContainer";
import "../styles/ReviewForm.css";

type FormFields = {
  email: string;
  movie: string;
  rating: number;
  review: string;
};

export default function Review() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const newReview = { ...data, id: Date.now() };
    const updatedReviews = [...existingReviews, newReview];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <>
      <h2 className="sectionTitle">Add review</h2>
      <form action="" className="review" onSubmit={handleSubmit(onSubmit)}>
        <label className="formLabel">
          Email
          <input
            className="formInput"
            {...register("email", {
              required: "Email is required",
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            type="text"
          />
          {errors.email && (
            <div className="red-text">{errors.email.message}</div>
          )}
        </label>
        <label className="formLabel">
          Movie/Series name
          <input
            className="formInput"
            {...register("movie", {
              required: "Please enter the movie or series name",
            })}
            type="text"
          />
          {errors.movie && (
            <div className="red-text">{errors.movie.message}</div>
          )}
        </label>
        <label className="formLabel">
          Rating
          <input
            className="formInput"
            {...register("rating", {
              required: "Please enter a rating from 1 to 10",
              min: {
                value: 1,
                message: "Rating cannot be less than 1.",
              },
              max: {
                value: 10,
                message: "Rating cannot be more than 10.",
              },
            })}
            type="number"
            placeholder="from 1 to 10"
          />
          {errors.rating && (
            <div className="red-text">{errors.rating.message}</div>
          )}
        </label>
        <label className="formLabel">
          Review
          <textarea
            className="formTextarea"
            {...register("review", {
              required: "Please write your review",
              minLength: {
                value: 3,
                message: "Review should be at least 3 characters long",
              },
            })}
            placeholder="Write your thoughts..."
          />
          {errors.review && (
            <div className="red-text">{errors.review.message}</div>
          )}
        </label>
        <button disabled={isSubmitting} className="submitButton" type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
      <h2 className="sectionTitle">Reviews</h2>
      <ReviewCardsContainer />
    </>
  );
}
