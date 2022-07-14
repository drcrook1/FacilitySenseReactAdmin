import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import FacilityForm from "./FacilityForm";

function CreateFacilityModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (Facility) => {
    let response = await fetch(props.FacilitiesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(Facility),
    });
    if (response.ok) {
    }
    setOpen(false);
  };

  const emptyFacility = {
    Name: "",
    Latitude: 0,
    Longitude: 0,
    Description: "",
    AddressLineOne: "",
    AddressLineTwo: "",
    City: "",
    State: "",
    ZipCode: "",
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Facility
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Facility</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide the following details to create a new facility in the
            system.
          </DialogContentText>
          <FacilityForm
            submitActions={handleSubmit}
            title="Create New Facility"
            details="Please provide the following details to create a new facility in the system."
            Facility={emptyFacility}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateFacilityModal;
