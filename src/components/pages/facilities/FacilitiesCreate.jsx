import React, { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

function FacilitiesCreate() {
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

  const createFacilityEndpoint = "https://localhost:7113/api/facilities";

  const handleFormChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
  };

  return (
    <Container>
      <h2>Create New Facility</h2>
      <p>facility name: {Facility.Name}</p>
      <br></br>
      <p>address: {Facility.AddressLineOne}</p>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Location Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location's Name"
              onChange={(e) =>
                setFacility((oldValue) => ({
                  ...oldValue,
                  Name: e.target.value,
                }))
              }
            />
          </Col>

          <Col>
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="float"
              placeholder="Enter Latitude"
              onChange={(e) =>
                setFacility((oldValue) => ({
                  ...oldValue,
                  Latitude: e.target.value,
                }))
              }
            />
          </Col>

          <Col>
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="float"
              placeholder="Enter Longitude"
              onChange={(e) =>
                setFacility((oldValue) => ({
                  ...oldValue,
                  Longitude: e.target.value,
                }))
              }
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Description"
              onChange={(e) =>
                setFacility((oldValue) => ({
                  ...oldValue,
                  Description: e.target.value,
                }))
              }
            />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                AddressLineOne: e.target.value,
              }))
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            onChange={(e) =>
              setFacility((oldValue) => ({
                ...oldValue,
                AddressLineTwo: e.target.value,
              }))
            }
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Miami Beach"
              onChange={(e) =>
                setFacility((oldValue) => ({
                  ...oldValue,
                  City: e.target.value,
                }))
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              placeholder="FL"
              onChange={(e) =>
                setFacility((oldValue) => ({
                  ...oldValue,
                  State: e.target.value,
                }))
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              placeholder="33141"
              onChange={(e) =>
                setFacility((oldValue) => ({
                  ...oldValue,
                  ZipCode: e.target.value,
                }))
              }
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FacilitiesCreate;
