import React from "react";
import Team from "./Team";
import Review from "./Review";
import Footer from "./Footer";
const Home = () => {
   return (
      <>
         <div className="container-fluid" id="home">
            <div className="row home_container">
               <div className="col-md-6 home_text">
                  <div className="text_box">
                     <h1 className="text_txt">Get Your Buisness To Next Level</h1>
                     <button className="text_btn">Build Now</button>
                  </div>
               </div>
               <div className="col-md-6 home_img">
                  <div className="img_box">
                     <img src={process.env.PUBLIC_URL + "/images/home.png"} alt="home" />
                  </div>
               </div>
            </div>
         </div>

         <Team />

         <Review />

         <Footer />
      </>
   );
};

export default Home;
