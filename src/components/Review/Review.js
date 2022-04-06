import React from "react";

const Review = ({ review }) => {
    const {name, comment, ratings, picture} = review
  return (
    <div className="border-2 border-blue-900 rounded-md p-4 m-4 bg-blue-50">
      <div className="w-60 h-60 m-auto">
        <img className="w-full h-full border rounded-full" src={picture} alt="" />
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold text-center my-4">{name}</h3>
        <p><span className="font-semibold">Comment</span>: {comment.slice(0,150)}....</p>
        <p className="font-semibold mt-4">Rating: <span className="text-yellow-600">{ratings}</span></p>
      </div>
    </div>
  );
};

export default Review;
