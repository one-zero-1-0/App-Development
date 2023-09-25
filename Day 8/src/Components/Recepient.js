// BloodDonationDetails.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function Recepient() {
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    donorName: '',
    district: '',
    bloodGroup: '',
    age: '',
  });

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleAdd = () => {
    setFormData({
      donorName: '',
      district: '',
      bloodGroup: '',
      age: '',
    });
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setEntries([...entries, formData]);
    setFormData({
      donorName: '',
      district: '',
      bloodGroup: '',
      age: '',
    });
    setShowModal(false);
  };

  return (
    <div>
      <h2>Recipient Details</h2>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Recipient Name</th>
            <th>District</th>
            <th>Blood Group</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.donorName}</td>
              <td>{entry.district}</td>
              <td>{entry.bloodGroup}</td>
              <td>{entry.age}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">
              <Button variant="success" onClick={handleAdd}>
                Add
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Blood Donation Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="donorName">
              <Form.Label>Recipient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Recipient Name"
                name="donorName"
                value={formData.donorName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="district">
              <Form.Label>District</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter District"
                name="district"
                value={formData.district}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="bloodGroup">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Blood Group"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Recepient;
