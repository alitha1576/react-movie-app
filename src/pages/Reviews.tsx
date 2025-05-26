import { useForm, type SubmitHandler } from "react-hook-form";
import "../styles/Form.css";

type FormFields = {
  email: string;
  movie: string;
  rating: number;
  review: string;
};

export default function Review() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2 className="sectionTitle">Reviews</h2>
      <form action="" className="review" onSubmit={handleSubmit(onSubmit)}>
        <label className="formLabel">
          Email
          <input
            className="formInput"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            type="text"
            placeholder="email"
          />
        </label>
        <label className="formLabel">
          Movie/Series name
          <input
            className="formInput"
            {...register("movie", {
              required: true,
            })}
            type="text"
            placeholder="Movie/Series name"
          />
        </label>
        <label className="formLabel">
          Rating (1–10)
          <input
            className="formInput"
            {...register("rating", {
              required: true,
              min: 1,
              max: 10,
            })}
            type="number"
            placeholder="Rating (1-10)"
          />
        </label>
        <label className="formLabel">
          Review
          <textarea
            className="formTextarea"
            {...register("review", {
              required: true,
              minLength: 3,
            })}
            placeholder="Write your thoughts..."
          />
        </label>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
