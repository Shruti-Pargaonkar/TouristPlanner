import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const MyBookings = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null); 
  const [Booking, setBooking] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [canceledBookingId, setCanceledBookingId] = useState(null); 

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);
  
  const fetchBookings = async () => {
    try {
      setLoading(true);
      
      const response = await axios.get(`http://localhost:8000/FlightBooking/myFlightBookings?userId=${userId}`);
      setBooking(response.data);

      const hotelResponse = await axios.get(`http://localhost:8000/Book/myHotelBookings?userId=${userId}`);
      setHotelBookings(hotelResponse.data);

      setLoading(false);
    } catch (error) {
      setError('An error occurred while fetching bookings. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    
    if (userId) {
      fetchBookings();
    }
  }, [userId, canceledBookingId]); 

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:8000/FlightBooking/${bookingId}`);
      setCanceledBookingId(bookingId); 
    } catch (error) {
      console.error('Error while canceling booking:', error);
    }
  };

  const handleGenerateTicket = (bookingId) => {
    
    alert('Ticket has been sent to your registered email.');
  };
  

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <Navigation/>
    
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <div className="container">
        
        <h2>My Bookings</h2>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {Booking.length === 0 && !loading && !error && <p>No bookings found.</p>}
        {Booking.length > 0 && (
          <table className="table">
            <thead>
              <tr>
              <th>Flight Name</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Booking.map(Booking => (
                <tr key={Booking.id}>
                  <td>{Booking.name}</td>
                  <td>{Booking.source}</td>
                  <td>{Booking.destination}</td>
                  <td>{Booking.date}</td>
                  <td>{Booking.price}</td>
                  <td>
                    {Booking.id !== canceledBookingId && ( 
                      <button className="btn btn-success me-2" onClick={() => handleGenerateTicket(Booking.id)}>Generate Ticket</button>
                    )}
                    <button className="btn btn-danger" onClick={() => handleCancelBooking(Booking.id)}>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {canceledBookingId && ( 
          <div className="alert alert-success mt-3">
            Ticket is successfully canceled, the refund will be credited back to your account in the next 3 days.
          </div>
        )}

<h3>Hotel Bookings</h3>
          {hotelBookings.length === 0 && !loading && !error && <p>No hotel bookings found.</p>}
          {hotelBookings.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Total Days</th>
                  <th>Total Rooms</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {hotelBookings.map(booking => (
                  <tr key={booking.id}>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                    <td>{booking.totalDay}</td>
                    <td>{booking.totalRoom}</td>
                    <td>{booking.price}</td>
                    <td>
                    {Booking.id !== canceledBookingId && ( 
                      <button className="btn btn-success me-2" onClick={() => handleGenerateTicket(Booking.id)}>Generate Ticket</button>
                    )}
                    <button className="btn btn-danger" onClick={() => handleCancelBooking(Booking.id)}>Cancel</button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>
    </div>
    </div>
  );
};

export default MyBookings;