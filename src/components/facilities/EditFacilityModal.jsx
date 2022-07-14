import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  IconButton,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import FacilityForm from "./FacilityForm";

function EditFacilityModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (Facility) => {
    let response = await fetch(
      props.FacilitiesURL + "/" + String(Facility.ID),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Facility),
      }
    );
    if (response.ok) {
    }
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="expand row"
        size="small"
        onClick={() => handleClickOpen()}
      >
        <Edit />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Facility</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide the following details to edit the existing facility
            in the system.
          </DialogContentText>
          <FacilityForm
            submitActions={handleSubmit}
            title="Edit Facility"
            details="Facility will be saved exactly as shown."
            Facility={props.Facility}
            FacilitiesURL={props.FacilitiesURL}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditFacilityModal;
