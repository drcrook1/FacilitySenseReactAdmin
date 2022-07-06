import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import FacilityCreateForm from "./FacilityCreateForm";

function CreateFacilityModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <FacilityCreateForm
            submitActions={handleClose}
            FacilitiesURL="https://localhost:3000/api/facilities"
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
