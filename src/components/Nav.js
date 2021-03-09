import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Nav = () => {
   const [toggle, setToggle] = useState(false);
   const handleToggle = () => {
      setToggle(!toggle);
   };
   return (
      <>
         <nav className="navbar_container">
            <div className="nav_icons">
               <div className="nav_logo">
                  <h1>TRVL</h1>
               </div>
               <div className="nav_toggle">
                  <button onClick={handleToggle}>{toggle ? <FaTimes /> : <FaBars />}</button>
               </div>
            </div>

            <div className={`nav_links ${toggle ? "show_links" : ""}`}>
               <ul>
                  <li>
                     <Link smooth to="#home">
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link smooth to="#team">
                        Team
                     </Link>
                  </li>
                  <li>
                     <Link smooth to="#reviews">
                        Reviews
                     </Link>
                  </li>
               </ul>
            </div>

            <div className={`nav_btns ${toggle ? "show_btns" : ""}`}>
               <button>Sign up</button>
            </div>
         </nav>
      </>
   );
};

export default Nav;
