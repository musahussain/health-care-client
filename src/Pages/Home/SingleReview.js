import React from "react";

const SingleReview = ({ review }) => {
  const { name, review_description, reviewer_img } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="mt-5 mb-5">{review_description}</p>
        <div className="flex justify-center items-center">
          <div class="avatar mr-5">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
              <img src={reviewer_img} alt="" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl">{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
