import React, { useState, useEffect } from "react";

const SingleTeam = ({ match }) => {
  

   useEffect(() => {
      fetchData();
   }, []);
   const [member, setMember] = useState({});

   const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
      const data = await response.json();
      setMember(data);
   };

   console.log(member);

   return (
      <>
         <h1>{member.name}</h1>
      </>
   );
};

export default SingleTeam;
