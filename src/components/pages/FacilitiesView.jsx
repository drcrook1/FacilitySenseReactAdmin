import React, { useState } from "react";
import Container from "@mui/material/Container";
import FacilitiesTable from "../facilities/FacilitiesTable";
import CreateFacilityModal from "../facilities/CreateFacilityModal";

function FacilitiesView() {
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <CreateFacilityModal />
      <FacilitiesTable />
    </Container>
  );
}

export default FacilitiesView;
