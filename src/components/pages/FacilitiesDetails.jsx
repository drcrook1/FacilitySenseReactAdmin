import React, { useState } from "react";
import { useParams } from "react-router-dom";

function FacilitiesDetails() {
  const [count, setCounter] = useState(100);
  const { id } = useParams();

  return (
    <div>
      <h2>Welcome to Facilities Details Page</h2>
      <h1>My ID IS: {id}</h1>
    </div>
  );
}

export default FacilitiesDetails;
