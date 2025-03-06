import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { bookingHotel } from '../Services/booking-service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';

const Booking = () => {
    const [formData, setFormData] = useState({
        userId:'',
        checkIn: '',
        checkOut: '',
        totalRoom: '',
        totalDay: '',
        totalPrice: 0, // Add totalPrice state
    });

    const storedUserId = sessionStorage.getItem('userId');
     //setUserId(storedUserId);
     console.log(storedUserId);

    const [errors, setErrors] = useState({
        checkIn: '',
        checkOut: '',
        totalRoom: '',
        totalDay: '',
    });

    useEffect(() => {
        const storedUserId = sessionStorage.getItem('userId');
        setFormData(prevState => ({
            ...prevState,
            userId: storedUserId // Set userId in formData
        }));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form fields
        let newErrors = {};
        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);
        const currentDate = new Date();

        // Check if check-in date is not less than current date
        if (!formData.checkIn) {
            newErrors.checkIn = 'Please enter check-in date';
        } else if (checkInDate < currentDate) {
            newErrors.checkIn = 'Check-in date should be greater than or equal to current date';
        }

        // Check if check-out date is not less than check-in date
        if (!formData.checkOut) {
            newErrors.checkOut = 'Please enter check-out date';
        } else if (checkOutDate < checkInDate) {
            newErrors.checkOut = 'Check-out date should be greater than or equal to check-in date';
        }

        if (!formData.totalRoom) {
            newErrors.totalRoom = 'Please enter total room';
        } else if (formData.totalRoom < 1) {
            newErrors.totalRoom = 'Total room should be greater than 0';
        }

        if (!formData.totalDay) {
            newErrors.totalDay = 'Please fill total day';
        } else if (formData.totalDay < 1) {
            newErrors.totalDay = 'Total day should be greater than 0';
        }

        setErrors(newErrors); // Update errors state first

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Handle form submission, e.g., send data to backend
        console.log(formData);
        // Calculate total price
        const totalPrice = calculateTotalPrice(formData.totalRoom, formData.totalDay);

        // Validate data if you want
        bookingHotel(formData).then(() => {
            // Show alert only when all fields are filled correctly
            toast.success("Booking successful");
            setFormData({ ...formData, totalPrice }); // Set totalPrice in state
        }).catch((error) => {
            console.log(error);
        });
    };

    const calculateTotalPrice = (totalRoom, totalDay) => {
        // Assuming price per room per day is $100
        const pricePerRoomPerDay = 500;
        return totalRoom * totalDay * pricePerRoomPerDay;
    };

    return (
        <div>
            <ToastContainer position="top-center" autoClose={2000} />
            <Navigation />
            <div style={{ margin: "10%", padding: "2%", borderRadius: "10px", border: "solid black" }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="checkIn">
                        <Form.Label>checkIn</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Enter checkIn"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className={`${errors.checkIn ? 'is-invalid' : ''} ${formData.checkIn && !errors.checkIn ? 'is-valid' : ''}`}
                        />
                        {errors.checkIn && <div className="invalid-feedback" style={{ color: 'red' }}>{errors.checkIn}</div>}
                    </Form.Group>
                    <br />
                    <Form.Group controlId="checkOut">
                        <Form.Label>checkOut</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Enter checkOut"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className={`${errors.checkOut ? 'is-invalid' : ''} ${formData.checkOut && !errors.checkOut ? 'is-valid' : ''}`}
                        />
                        {errors.checkOut && <div className="invalid-feedback" style={{ color: 'red' }}>{errors.checkOut}</div>}
                    </Form.Group>
                    <br />
                    <Form.Group controlId="totalRoom">
                        <Form.Label>total Room</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter total Room"
                            name="totalRoom"
                            value={formData.totalRoom}
                            onChange={handleChange}
                            className={`${errors.totalRoom ? 'is-invalid' : ''} ${formData.totalRoom && !errors.totalRoom ? 'is-valid' : ''}`}
                        />
                        {errors.totalRoom && <div className="invalid-feedback" style={{ color: 'red' }}>{errors.totalRoom}</div>}
                    </Form.Group>
                    <br />
                    <Form.Group controlId="totalDay">
                        <Form.Label>total Day</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter total Day    "
                            name="totalDay"
                            value={formData.totalDay}
                            onChange={handleChange}
                            className={`${errors.totalDay ? 'is-invalid' : ''} ${formData.totalDay && !errors.totalDay ? 'is-valid' : ''}`}
                        />
                        {errors.totalDay && <div className="invalid-feedback" style={{ color: 'red' }}>{errors.totalDay}</div>}
                    </Form.Group>

                    <Form.Group controlId="totalPrice">
                        <Form.Label>Total Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="totalPrice"
                            value={calculateTotalPrice(formData.totalRoom, formData.totalDay)}
                            readOnly
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit" style={{ width: "200px" }}>
                            Book Hotel
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Booking;
