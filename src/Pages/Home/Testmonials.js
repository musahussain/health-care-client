import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import SingleReview from "./SingleReview";

const Testmonials = () => {
    const reviews = [
        {
            _id:1,
            name: "Jos Buttler",
            review_description: "Very Good treatment. Would recommend",
            reviewer_img: people1
        },
        {
            _id:2,
            name: "Jonny Bairstow",
            review_description: "Very Good treatment. Would recommend",
            reviewer_img: people2
        },
        {
            _id:3,
            name: "Moeen Ali",
            review_description: "Very Good treatment. Would recommend",
            reviewer_img: people3
        }
    ]
  return (
    <section className="mt-28">
      <div className="flex justify-between">
        <div>
          <h3 className="text-accent text-xl">Testimonial</h3>
          <h2 className="text-2xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-12 lg:w-48" src={quote} alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {
            reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
        }
      </div>
      
    </section>
  );
};

export default Testmonials;
