import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
        <h2 className="text-4xl text-blue-900 mt-8 font-semibold">Customer Review</h2>
      <div className="grid grid-cols-3 gap-4 m-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
