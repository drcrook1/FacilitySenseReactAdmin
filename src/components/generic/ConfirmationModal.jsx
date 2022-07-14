import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";

function confirmationModal(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleConfirm}>Confirm</Button>
          <Button onClick={props.handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default confirmationModal;
