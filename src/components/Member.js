import React from "react";
import { Link } from "react-router-dom";
const Member = ({ id, name, email }) => {
   return (
      <>
         <div className="member_container">
            <div className="member_img">
               <img src={process.env.PUBLIC_URL + "/images/profile.jpg"} alt="profile" />
            </div>

            <div className="member_details">
               <h3>{name}</h3>
               <p>{email}</p>
            </div>

            <div className="member_btn">
               <button>
                  <Link to={`/service/${id}`}>Read More</Link>
               </button>
            </div>
         </div>
      </>
   );
};

export default Member;
