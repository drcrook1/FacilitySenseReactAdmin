import React, { useState } from "react";
import Container from "@mui/material/Container";
import FacilitiesTable from "../facilities/FacilitiesTable";
import CreateFacilityModal from "../facilities/CreateFacilityModal";

function FacilitiesView() {
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <CreateFacilityModal FacilitiesURL="https://localhost:7113/api/facilities" />
      <FacilitiesTable FacilitiesURL="https://localhost:7113/api/facilities" />
    </Container>
  );
}

export default FacilitiesView;
