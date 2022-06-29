import React, { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

function FacilitiesCreate() {
  const [Name, setName] = useState("");
  const [Latitude, setLatitude] = useState("");
  const [Longitude, setLongitude] = useState("");
  const [Description, setDescription] = useState("");
  const [AddressLineOne, setAddressLineOne] = useState("");
  const [AddressLineTwo, setAddressLineTwo] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [ZipCode, setZipCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The content you entered was: 
    ${Name} ${Latitude} ${Longitude}
    ${Description}
    ${AddressLineOne}
    ${AddressLineTwo}
    ${City} ${State} ${ZipCode}
    `);
  };

  return (
    <Container>
      <h2>Create New Facility</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Location Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location's Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>

          <Col>
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="float"
              placeholder="Enter Latitude"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </Col>

          <Col>
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="float"
              placeholder="Enter Longitude"
              onChange={(e) => setLongitude(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            onChange={(e) => setAddressLineOne(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            placeholder="Apartment, studio, or floor"
            onChange={(e) => setAddressLineTwo(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="Miami Beach"
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              placeholder="FL"
              onChange={(e) => setState(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              placeholder="33141"
              onChange={(e) => setZipCode(e.target.value)}
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
