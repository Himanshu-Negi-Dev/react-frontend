import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const reviewData = [
   {
      id: 1,
      review:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
   },
   {
      id: 2,
      review:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t",
   },
   {
      id: 3,
      review:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
   },
   {
      id: 4,
      review:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuri",
   },
   {
      id: 5,
      review:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type .",
   },
];

const Review = () => {
   const [reviewList, setReviewList] = useState(reviewData);

   return (
      <>
         <div className="container">
            <div className="review_container" id="reviews">
               <h1>
                  <span>Our Reviews</span>
               </h1>
               <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     {reviewList.map((item) => {
                        const { id, review } = item;

                        return (
                           <>
                              <div className={id == 1 ? "carousel-item active" : "carousel-item"} key={id}>
                                 <p>
                                    <FaQuoteLeft className="quote_left" />
                                    {review} <FaQuoteRight className="quote_right" />
                                 </p>
                              </div>
                           </>
                        );
                     })}
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};

export default Review;
