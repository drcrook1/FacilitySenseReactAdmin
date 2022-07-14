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
  const handleSubmit = async (Facility) => {
    let response = await fetch(props.FacilitiesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(Facility),
    });
    if (response.ok) {
      props.handleReload();
    }
    props.handleClose();
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
      <Dialog open={props.open} onClose={props.handleClose}>
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
          <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateFacilityModal;
