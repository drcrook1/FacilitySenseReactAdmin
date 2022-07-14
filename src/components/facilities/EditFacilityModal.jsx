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
    props.handleClose();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
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
          <Button onClick={props.handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditFacilityModal;
