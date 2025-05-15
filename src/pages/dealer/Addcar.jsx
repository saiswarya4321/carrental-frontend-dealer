import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddCar() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    registrationNumber: '',
    location: '',
    description: '',
    vehicleNumber: '',
    pricePerDay: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append("image", image);

    try {
      const response = await axios.post(`${baseUrl}/cars/create`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      console.log(response.data);
      toast.success('Car added successfully!');
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error('Failed to add car!');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg p-4 rounded-4">
            <Card.Body>
              <h2 className="text-center mb-4">Add Car</h2>
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Brand */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Brand</Form.Label>
                  <Form.Control
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="Brand"
                    required
                    maxLength={50}
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Model */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Model</Form.Label>
                  <Form.Control
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Model"
                    required
                    maxLength={50}
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Year */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Year</Form.Label>
                  <Form.Control
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="Year"
                    required
                    min={1900}
                    max={new Date().getFullYear()}
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Registration Number */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    placeholder="Registration Number"
                    required
                    maxLength={20}
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Location */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                    required
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Description (TextArea) */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter description about the car"
                    required
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Vehicle Number */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Vehicle Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    placeholder="Vehicle Number"
                    required
                    maxLength={20}
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Price Per Day */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Price Per Day</Form.Label>
                  <Form.Control
                    type="number"
                    name="pricePerDay"
                    value={formData.pricePerDay}
                    onChange={handleChange}
                    placeholder="Price per day"
                    required
                    min={0}
                    className="rounded-3"
                  />
                </Form.Group>

                {/* Image Upload */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Car Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="rounded-3"
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100 fw-semibold rounded-3">
                  Add Car
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddCar;
