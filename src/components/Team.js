import React, { useState, useEffect } from "react";
import Member from "./Member";

const Team = () => {
   const [members, setMembers] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setMembers(data);
   };

   // console.log(members);
   return (
      <>
         <div className="container-fluid ">
            <div className="team_header" id="team" >
               <h1>Our Team</h1>
            </div>
            <div className="row team_container">
               {members.map((member) => {
                  const { id, name, email } = member;
                  return (
                     <>
                        <div className="col-md-4 team_single" key={id}>
                           {id < 7 && <Member id={id} name={name} email={email} />}
                        </div>
                     </>
                  );
               })}
            </div>
         </div>
      </>
   );
};

export default Team;
