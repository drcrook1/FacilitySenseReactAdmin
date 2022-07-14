import React, { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import FacilitiesTable from "../facilities/FacilitiesTable";
import CreateFacilityModal from "../facilities/CreateFacilityModal";

function FacilitiesView(props) {
  const [openCreateFacility, setOpenCreateFacility] = React.useState(false);
  const [facilities, setFacilities] = useState([]);

  const getFacilitiesData = async () => {
    let response = await fetch("https://localhost:7113/api/facilities", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      let facilities = (await response.json()).map((facility) => {
        facility.Ratings = [];
        facility.RatingsCount = 42;
        facility.Stars = 3.3;
        return facility;
      });
      setFacilities(facilities);
    }
  };

  useEffect(() => {
    getFacilitiesData();
  }, []);

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
        handleReload={getFacilitiesData}
      />
      <FacilitiesTable
        FacilitiesURL="https://localhost:7113/api/facilities"
        Facilities={facilities}
        handleReload={getFacilitiesData}
      />
    </Container>
  );
}

export default FacilitiesView;
