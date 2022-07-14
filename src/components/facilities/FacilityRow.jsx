import * as React from "react";
import { useState, useEffect } from "react";
import {
  Collapse,
  Box,
  Typography,
  TableRow,
  TableCell,
  IconButton,
  Rating,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown, Edit } from "@mui/icons-material";
import EditFacilityModal from "./EditFacilityModal";

export default function FacilityRow(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleEditClickOpen = () => {
    setOpenEditModal(true);
  };

  const handleEditClose = () => {
    setOpenEditModal(false);
  };

  return (
    <React.Fragment>
      <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Name}
        </TableCell>
        <TableCell align="right">{row.City}</TableCell>
        <TableCell align="right">{row.State}</TableCell>
        <TableCell align="right">{row.RatingsCount}</TableCell>
        <TableCell align="right">
          <Rating name="read-only" value={row.Stars} readOnly precision={0.5} />
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => handleEditClickOpen()}
          >
            <Edit />
          </IconButton>
          <EditFacilityModal
            Facility={row}
            FacilitiesURL={props.FacilitiesURL}
            open={openEditModal}
            handleClose={handleEditClose}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body2">{row.Description}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
