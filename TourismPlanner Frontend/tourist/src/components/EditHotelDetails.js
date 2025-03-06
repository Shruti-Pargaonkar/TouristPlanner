import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditHotelDetails = () => {
    const { id } = useParams();
    const [Hotel, setHotel] = useState({
        name: '',
        location: '',
        description: '',
        emailid: '',
        priceperday: '',
        totalroom: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/hotel/HotelDetails/${id}`)
            .then(response => {
                setHotel(response.data);
            })
            .catch(error => {
                console.error('Error fetching Hotel details:', error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHotel({ ...Hotel, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validateInputs();
        if (Object.keys(validationErrors).length === 0) {
            axios.put(`http://localhost:8000/hotel/update/${id}`, Hotel)
                .then(response => {
                    console.log('Hotel details updated successfully:', response.data);
                    toast.success('Hotel details updated successfully');
                    // Redirect or show a success message
                })
                .catch(error => {
                    console.error('Error updating Hotel details:', error);
                });
        } else {
            setErrors(validationErrors);
        }
    };

    const validateInputs = () => {
        let errors = {};
        if (!Hotel.name.trim()) {
            errors.name = 'Hotel name is required';
        }
        if (!Hotel.location.trim()) {
            errors.location = 'location is required';
        }
        if (!Hotel.description.trim()) {
            errors.description = 'description is required';
        }
        if (!Hotel.emailid.trim()) {
            errors.emailid = 'emailid is required';
        }
        if (!Hotel.priceperday) {
            errors.priceperday = 'priceperday is required';
        }
        if (!Hotel.totalroom.trim()) {
            errors.totalroom = 'totalroom is required';
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
                        <h2>Edit Hotel Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label><b>Hotel Name:</b></label><br />
                                <input type='text' name='name' className='form-control' onChange={handleInputChange} value={Hotel.name} />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className='form-group'>
                                <label><b>Location:</b></label><br />
                                <input type='text' name='location' className='form-control' onChange={handleInputChange} value={Hotel.location} />
                                {errors.location && <small className="text-danger">{errors.location}</small>}
                            </div>
                            <div className='form-group'>
                                <label><b>description:</b></label><br />
                                <input type='text' name='description' className='form-control' onChange={handleInputChange} value={Hotel.description} />
                                {errors.description && <small className="text-danger">{errors.description}</small>}
                            </div>

                            <div className='form-group'>
                                <label><b>Email Id :</b></label><br />
                                <input type='text' name='emailid' className='form-control' onChange={handleInputChange} value={Hotel.emailid} />
                                {errors.emailid && <small className="text-danger">{errors.emailid}</small>}
                            </div>
                            <div className='form-group'>
                                <label><b>Price Per Day:</b></label><br />
                                <input type='text' name='priceperday' className='form-control' onChange={handleInputChange} value={Hotel.priceperday} />
                                {errors.priceperday && <small className="text-danger">{errors.priceperday}</small>}
                            </div>
                            <div className='form-group'>
                                <label><b>Total room:</b></label><br />
                                <input type='text' name='totalroom' className='form-control' onChange={handleInputChange} value={Hotel.totalroom} />
                                {errors.totalroom && <small className="text-danger">{errors.totalroom}</small>}
                            </div>  
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                                <Link className="btn btn-primary my-2" to={"/fetchHotelDetails"}>Back to Home</Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditHotelDetails;
