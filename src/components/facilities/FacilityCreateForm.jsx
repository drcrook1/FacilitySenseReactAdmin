import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

function FacilityCreateForm(props) {
  const [Facility, setFacility] = useState({
    Name: "",
    Latitude: 0,
    Longitude: 0,
    Description: "",
    AddressLineOne: "",
    AddressLineTwo: "",
    City: "",
    State: "",
    ZipCode: "",
  });

  const createFacilityEndpoint = props.FacilitiesURL;
  const submitActions = props.submitActions;

  const onSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(Facility));
    let response = await fetch(createFacilityEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(Facility),
    });
    if (response.ok) {
      alert(`The content you entered was: 
        ${Facility}
        `);
    }
    submitActions();
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                Name: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="Longitude"
            name="Longitude"
            label="Longitude"
            fullWidth
            autoComplete="longitude"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                Longitude: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="Latitude"
            name="Latitude"
            label="Latitude"
            fullWidth
            autoComplete="latitude"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                Latitude: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Description"
            name="Description"
            label="Description"
            fullWidth
            autoComplete="description"
            variant="standard"
            multiline
            rows={2}
            maxRows={4}
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                Description: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                AddressLineOne: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                AddressLineTwo: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                City: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                State: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                ZipCode: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                Country: e.target.value,
              }))
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default FacilityCreateForm;
