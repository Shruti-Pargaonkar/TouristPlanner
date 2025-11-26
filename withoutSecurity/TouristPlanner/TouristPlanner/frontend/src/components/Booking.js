import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { bookingHotel } from '../Services/booking-service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { hotelid } = useParams();

    const [pricePerDay, setPricePerDay] = useState(0);

    const [formData, setFormData] = useState({
        userId: '',
        checkIn: '',
        checkOut: '',
        totalRoom: '',
        totalDay: '',
        totalPrice: 0,
    });

    const [errors, setErrors] = useState({});

    // Fetch userId + hotel price
    useEffect(() => {
        const storedUserId = sessionStorage.getItem('userId');

        setFormData((prev) => ({
            ...prev,
            userId: storedUserId
        }));

        fetchHotelPrice();
    }, []);

    const fetchHotelPrice = async () => {
    try {
        const res = await axios.get(`http://localhost:8080/hotel/HotelDetails/${hotelid}`);

        console.log("Hotel API Response:", res.data);

        setPricePerDay(Number(res.data.priceperday));  
    } catch (err) {
        console.log("Error fetching hotel details", err);
    }
};


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Auto-calculate price
    const calculateTotalPrice = (rooms, days) => {
        if (!rooms || !days) 
            return 0;
        return rooms * days * pricePerDay;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // VALIDATION
        if (!formData.checkIn) {
            newErrors.checkIn = "Enter Check-in Date";
        } else if (checkInDate < today) {
            newErrors.checkIn = "Check-in cannot be before today";
        }

        if (!formData.checkOut) {
            newErrors.checkOut = "Enter Check-out Date";
        } else if (checkOutDate <= checkInDate) {
            newErrors.checkOut = "Check-out should be after Check-in";
        }

        if (!formData.totalRoom || formData.totalRoom < 1) {
            newErrors.totalRoom = "Enter valid room count";
        }

        if (!formData.totalDay || formData.totalDay < 1) {
            newErrors.totalDay = "Total Day must be > 0";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        // Calculate price before submit
        const totalPrice = calculateTotalPrice(formData.totalRoom, formData.totalDay);

        const finalData = {
            ...formData,
            totalPrice: totalPrice
        };

        bookingHotel(finalData)
            .then(() => {
                toast.success("Booking Successful");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Booking Failed");
            });
    };

    return (
        <div>
            <ToastContainer position="top-center" autoClose={2000} />
            <Navigation />

            <div style={{ margin: "10%", padding: "2%", borderRadius: "10px", border: "solid black" }}>
                <h3 style={{ textAlign: "center" }}>Hotel Booking</h3>

                <Form onSubmit={handleSubmit}>
                    {/* Check In */}
                    <Form.Group controlId="checkIn">
                        <Form.Label>Check-In</Form.Label>
                        <Form.Control
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className={`${errors.checkIn ? 'is-invalid' : ''}`}
                        />
                        {errors.checkIn && <small className="text-danger">{errors.checkIn}</small>}
                    </Form.Group>
                    <br />

                    {/* Check Out */}
                    <Form.Group controlId="checkOut">
                        <Form.Label>Check-Out</Form.Label>
                        <Form.Control
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className={`${errors.checkOut ? 'is-invalid' : ''}`}
                        />
                        {errors.checkOut && <small className="text-danger">{errors.checkOut}</small>}
                    </Form.Group>
                    <br />

                    {/* Total Rooms */}
                    <Form.Group controlId="totalRoom">
                        <Form.Label>Total Rooms</Form.Label>
                        <Form.Control
                            type="number"
                            name="totalRoom"
                            value={formData.totalRoom}
                            onChange={handleChange}
                            className={`${errors.totalRoom ? 'is-invalid' : ''}`}
                        />
                        {errors.totalRoom && <small className="text-danger">{errors.totalRoom}</small>}
                    </Form.Group>
                    <br />

                    {/* Total Days */}
                    <Form.Group controlId="totalDay">
                        <Form.Label>Total Days</Form.Label>
                        <Form.Control
                            type="number"
                            name="totalDay"
                            value={formData.totalDay}
                            onChange={handleChange}
                            className={`${errors.totalDay ? 'is-invalid' : ''}`}
                        />
                        {errors.totalDay && <small className="text-danger">{errors.totalDay}</small>}
                    </Form.Group>
                    <br />

                    {/* Total Price */}
                    <Form.Group controlId="totalPrice">
                        <Form.Label>Total Price</Form.Label>
                        <Form.Control
                            type="text"
                            name="totalPrice"
                            readOnly
                            value={calculateTotalPrice(formData.totalRoom, formData.totalDay)}
                        />
                    </Form.Group>
                    <br />

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
