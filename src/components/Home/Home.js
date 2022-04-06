import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div>
      <div className="w-full flex items-center">
        <div className="w-2/4 text-left p-8">
          <h1 className="text-6xl font-bold text-zinc-900 mb-4">
            YOUR NEXT BIKE
          </h1>
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            YOUR BEST BIKE
          </h1>
          <p className="text-lg">
            Engine: 155cc, Mileage: 52.02Kmpl, mileage Emission Type: BS6, Kerb
            Weight: 138Kg, Max Power: 18.5 bhp, ABS: Single Channel
          </p>
        </div>
        <div className="w-2/4 p-4">
          <img
            className=""
            src="https://cdn.autoportal.com/bp-v3/img/models/f/0/img-5c8b59c1f17a0.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-3xl font-semibold my-4">Custom Review(3)</h2>
        <div className="grid grid-cols-3 mb-4 p-8">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <Link
          className="bg-blue-900 text-white px-4 py-2 rounded-md"
          to="/review"
        >
          See All Review
        </Link>
      </div>
    </div>
  );
};

export default Home;
