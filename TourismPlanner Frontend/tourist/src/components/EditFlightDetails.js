import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditFlightDetails = () => {
    const { id } = useParams();
    const [flightDetails, setFlightDetails] = useState({
        name: '',
        source: '',
        destination: '',
        capacity: '',
        date: '',
        price: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/app/FlightDetails/${id}`)
            .then(response => {
                setFlightDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching flight details:', error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFlightDetails({ ...flightDetails, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateInputs();
        if (Object.keys(validationErrors).length === 0) {
            axios.put(`http://localhost:8000/app/update/${id}`, flightDetails)
                .then(response => {
                    console.log('Flight details updated successfully:', response.data);
                    toast.success('Flight details updated successfully');
                    // Redirect or show a success message
                })
                .catch(error => {
                    console.error('Error updating flight details:', error);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    const validateInputs = () => {
        let errors = {};
        if (!flightDetails.name.trim()) {
            errors.name = 'Flight name is required';
        }
        if (!flightDetails.source.trim()) {
            errors.source = 'Source is required';
        }
        if (!flightDetails.destination.trim()) {
            errors.destination = 'Destination is required';
        }
        if (!flightDetails.capacity.trim()) {
            errors.capacity = 'Capacity is required';
        }
        if (!flightDetails.date) {
            errors.date = 'Date is required';
        }
        if (!flightDetails.price.trim()) {
            errors.price = 'Price is required';
        }
        return errors;
    };

    return (
        <div>
            <ToastContainer position="top-center" autoClose={2000}/>
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2>Edit Flight Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label>Flight Name:</label><br />
                                <input type='text' name='name' className='form-control' onChange={handleInputChange} value={flightDetails.name} />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className='form-group'>
                                <label>Source:</label><br />
                                <input type='text' name='source' className='form-control' onChange={handleInputChange} value={flightDetails.source} />
                                {errors.source && <small className="text-danger">{errors.source}</small>}
                            </div>
                            <div className='form-group'>
                                <label>Destination:</label><br />
                                <input type='text' name='destination' className='form-control' onChange={handleInputChange} value={flightDetails.destination} />
                                {errors.destination && <small className="text-danger">{errors.destination}</small>}
                            </div>
                            <div className='form-group'>
                                <label>Capacity:</label><br />
                                <input type='text' name='capacity' className='form-control' onChange={handleInputChange} value={flightDetails.capacity} />
                                {errors.capacity && <small className="text-danger">{errors.capacity}</small>}
                            </div>
                            <div className='form-group'>
                                <label>Date:</label><br />
                                <input type='date' name='date' className='form-control' onChange={handleInputChange} value={flightDetails.date} />
                                {errors.date && <small className="text-danger">{errors.date}</small>}
                            </div>
                            <div className='form-group'>
                                <label>Price:</label><br />
                                <input type='text' name='price' className='form-control' onChange={handleInputChange} value={flightDetails.price} />
                                {errors.price && <small className="text-danger">{errors.price}</small>}
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                                <Link className="btn btn-primary my-2" to={"/fetch"}>Back to Home</Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditFlightDetails;
