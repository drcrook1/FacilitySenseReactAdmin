import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function FacilityForm(props) {
  const [Facility, setFacility] = useState(props.Facility);

  const submitActions = props.submitActions;

  const onSubmit = async (event) => {
    event.preventDefault();
    submitActions(Facility);
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
            defaultValue={Facility.Name}
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
            id="Longitude"
            name="Longitude"
            label="Longitude"
            fullWidth
            autoComplete="longitude"
            variant="standard"
            defaultValue={Facility.Longitude}
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
            id="Latitude"
            name="Latitude"
            label="Latitude"
            fullWidth
            autoComplete="latitude"
            variant="standard"
            defaultValue={Facility.Latitude}
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
            defaultValue={Facility.Description}
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
            defaultValue={Facility.AddressLineOne}
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
            defaultValue={Facility.AddressLineTwo}
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
            defaultValue={Facility.City}
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
            defaultValue={Facility.State}
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
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            defaultValue={Facility.ZipCode}
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
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            defaultValue={Facility.Country}
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

export default FacilityForm;
