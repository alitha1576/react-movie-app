import { useForm, type SubmitHandler } from "react-hook-form";

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
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          type="text"
          placeholder="email"
        />
        <input
          {...register("movie", {
            required: true,
          })}
          type="text"
          placeholder="Movie/Series name"
        />
        <input
          {...register("rating", {
            required: true,
            min: 1,
            max: 10,
          })}
          type="number"
          placeholder="Rating (1-10)"
        />
        <input
          {...register("review", {
            required: true,
            minLength: 3,
          })}
          type="text"
          placeholder="Review"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
