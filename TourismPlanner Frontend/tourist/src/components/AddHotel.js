import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddHotel() {
    const navigate = useNavigate();

    const [hotel, setHotel] = useState({
        name: '',
        location: '',
        description: '',
        emailid: '',
        priceperday: '',
        totalroom: ''
    });

    const [errors, setErrors] = useState({});

    const { name, location, description, emailid, priceperday, totalroom } = hotel;

    const onInputChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateInputs();
        if (Object.keys(validationErrors).length === 0) {
            await axios.post(`http://localhost:8000/hotel/addhoteldetail`, hotel);

            toast.success("hotel added successfully.", {
                onClose: () => {
                  navigate('/fetchHotelDetails');
                }
              });
           
            
        } else {
            setErrors(validationErrors);
        }
    };

    const validateInputs = () => {
        let errors = {};
        if (!name.trim()) {
            errors.name = 'Hotel name is required';
        }
        if (!location.trim()) {
            errors.location = 'Location is required';
        }
        if (!description.trim()) {
            errors.description = 'Description is required';
        }
        if (!emailid.trim()) {
            errors.emailid = 'Email ID is required';
        }
        if (!priceperday.trim()) {
            errors.priceperday = 'Price per day is required';
        }
        if (!totalroom.trim()) {
            errors.totalroom = 'Total room is required';
        }
        return errors;
    };

    return (
      <div>
        <ToastContainer position="top-center" autoClose={1000}/>
        <AdminNav/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>Add Hotel Details</h2>

                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">Hotel Name</label>
                            <input type="text" className="form-control" placeholder="Enter the Hotel Name" name="name" value={name} onChange={onInputChange} />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>
                        <div>
                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" className="form-control" placeholder="Enter the location" name="location" value={location} onChange={onInputChange} />
                            {errors.location && <small className="text-danger">{errors.location}</small>}
                        </div>
                        <div>
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="textarea" className="form-control" placeholder="Enter the description" name="description" value={description} onChange={onInputChange} />
                            {errors.description && <small className="text-danger">{errors.description}</small>}
                        </div>
                        <div>
                            <label htmlFor="emailid" className="form-label">Email ID</label>
                            <input type="email" className="form-control" placeholder="Enter the emailid" name="emailid" value={emailid} onChange={onInputChange} />
                            {errors.emailid && <small className="text-danger">{errors.emailid}</small>}
                        </div>
                        <div>
                            <label htmlFor="priceperday" className="form-label">Price Per Day</label>
                            <input type="number" className="form-control" placeholder="Enter the price" name="priceperday" value={priceperday} onChange={onInputChange} />
                            {errors.priceperday && <small className="text-danger">{errors.priceperday}</small>}
                        </div>
                        <div>
                            <label htmlFor="totalroom" className="form-label">Total Room</label>
                            <input type="number" className="form-control" placeholder="Enter the total room" name="totalroom" value={totalroom} onChange={onInputChange} />
                            {errors.totalroom && <small className="text-danger">{errors.totalroom}</small>}
                        </div>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}
