import * as React from "react";
import { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import FacilityRow from "./FacilityRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "city", label: "City", minWidth: 100 },
  { id: "state", label: "State", minWidth: 100 },
  { id: "ratings", label: "Ratings", minWidth: 100 },
  { id: "stars", label: "Stars", minWidth: 100 },
];

function createData(name, city, state, ratings, stars, id) {
  return { name, city, state, ratings, stars, id };
}

let rows = [
  createData("Loading", "Miami Beach", "FL", 75, 3.4, 1),
  createData("Loading", "Miami Beach", "FL", 75, 3.4, 2),
  createData("Loading", "Miami Beach", "FL", 75, 3.4, 9),
  createData("Loading", "Miami Beach", "FL", 75, 3.4, 10),
  createData("Loading", "Miami Beach", "FL", 75, 3.4, 11),
];

export default function FacilitiesTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [facilities, setFacilities] = useState(rows);

  const getFacilitiesData = async () => {
    let response = await fetch(props.FacilitiesURL, {
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Ratings</TableCell>
              <TableCell align="right">Stars</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {facilities
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <FacilityRow
                    key={row.ID}
                    row={row}
                    FacilitiesURL={props.FacilitiesURL}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={facilities.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
