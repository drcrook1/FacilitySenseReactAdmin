import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import FacilitiesTable from "../facilities/FacilitiesTable";
import CreateFacilityModal from "../facilities/CreateFacilityModal";

function FacilitiesView() {
  const [openCreateFacility, setOpenCreateFacility] = React.useState(false);

  const handleClickFacilityCreate = () => {
    setOpenCreateFacility(true);
  };

  const handleCloseFacilityCreate = () => {
    setOpenCreateFacility(false);
  };
  return (
    <Container>
      <Button variant="outlined" onClick={handleClickFacilityCreate}>
        Add New Facility
      </Button>
      <CreateFacilityModal
        FacilitiesURL="https://localhost:7113/api/facilities"
        open={openCreateFacility}
        handleClose={handleCloseFacilityCreate}
      />
      <FacilitiesTable FacilitiesURL="https://localhost:7113/api/facilities" />
    </Container>
  );
}

export default FacilitiesView;
