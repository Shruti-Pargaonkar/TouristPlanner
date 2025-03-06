import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFlightDetails = () => {
  let Navigate = useNavigate();

  const [flightDetails, setFlightDetails] = useState({
    name: '',
    source: '',
    destination: '',
    capacity: '',
    date: '',
    price: ''
  });

  const [errors, setErrors] = useState({});

  const { name, source, destination, capacity, date, price } = flightDetails;

  const validateInputs = () => {
    let errors = {};
    if (!name.trim()) {
      errors.name = 'Flight name is required';
    }
    if (!source.trim()) {
      errors.source = 'Source is required';
    }
    if (!destination.trim()) {
      errors.destination = 'Destination is required';
    }
    if (!capacity.trim()) {
      errors.capacity = 'Capacity is required';
    }
    if (!date) {
      errors.date = 'Date is required';
    }
    if (!price.trim()) {
      errors.price = 'Price is required';
    }
    return errors;
  };

  const onInputChange = (e) => {
    setFlightDetails({ ...flightDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      await axios.post(`http://localhost:8000/app/test3`, flightDetails);
      
      toast.success("Flight added successfully.", {
        onClose: () => {
          Navigate('/fetch');
        }
      });
      
    } else {
      setErrors(validationErrors);
    }
  };

  return (
<div>
<ToastContainer position="top-center" autoClose={2000}/>
  <AdminNav></AdminNav>
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Flight Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Flight Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name && 'is-invalid'}`}
                placeholder="Enter the flight Details"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="source" className="form-label">
                Source
              </label>
              <input
                type="text"
                className={`form-control ${errors.source && 'is-invalid'}`}
                placeholder="Enter the source"
                name="source"
                value={source}
                onChange={(e) => onInputChange(e)}
              ></input>
              {errors.source && <div className="invalid-feedback">{errors.source}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="destination" className="form-label">
                Destination
              </label>
              <input
                type="text"
                className={`form-control ${errors.destination && 'is-invalid'}`}
                placeholder="Enter the destination"
                name="destination"
                value={destination}
                onChange={(e) => onInputChange(e)}
              ></input>
              {errors.destination && <div className="invalid-feedback">{errors.destination}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="capacity" className="form-label">
                Capacity
              </label>
              <input
                type="number"
                className={`form-control ${errors.capacity && 'is-invalid'}`}
                placeholder="Enter the capacity"
                name="capacity"
                value={capacity}
                onChange={(e) => onInputChange(e)}
              ></input>
              {errors.capacity && <div className="invalid-feedback">{errors.capacity}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className={`form-control ${errors.date && 'is-invalid'}`}
                placeholder="Enter the date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              ></input>
              {errors.date && <div className="invalid-feedback">{errors.date}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className={`form-control ${errors.price && 'is-invalid'}`}
                placeholder="Enter the price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              ></input>
              {errors.price && <div className="invalid-feedback">{errors.price}</div>}
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
              <Link className="btn btn-primary my-2" to="/fetch">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddFlightDetails;
