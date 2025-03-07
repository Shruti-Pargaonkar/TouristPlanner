// SearchPage.js
import { Link } from "react-router-dom";
import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import FooterBar from "./Footer";
import './SearchPage.css';

const SearchPage = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({}); // Define errors state
  const fetchData = () => {
    axios
      .get("http://localhost:8080/app/flights", {
        params: { source, destination, date },
      })
      .then((res) => {
        setBooking(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  // useEffect(() => {
  //   if (source && destination && date) {
  //     fetchData();
  //   }
  // }, [source, destination, date]);

  const flightBooking = (selectedFlight) => {
    navigate('/flightBooking', { state: { selectedFlight } });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    let newErrors = {};
    const currentDate = new Date();

    if (!source) {
        newErrors.source = 'Please enter source';
    }

    if (!destination) {
        newErrors.destination = 'Please enter destination';
    }

    if (!date) {
        newErrors.date = 'Please select a date';
    } else {
        const selectedDate = new Date(date);
        if (selectedDate < currentDate) {
            newErrors.date = 'Date should be greater than or equal to current date';
        }
    }

    setErrors(newErrors); // Update errors state first

    if (Object.keys(newErrors).length > 0) {
        return;
    }

    // Handle form submission, e.g., send data to backend
    console.log({ source, destination, date }); // Use source, destination, date directly instead of formData
    // Validate data if you want
    fetchData();
};

  return (
    <div>
      <Navigation />
      <div>
      <form style={{ backgroundColor: "yellow" }} className="Searchfrm" onSubmit={handleSubmit}>
  <h1>Enquiry</h1>
  <br />
  <div className="row">
  <div className="col">
    <input
        className={`form-control ${errors.source ? 'is-invalid' : source ? 'is-valid' : ''}`}
        type="text"
        placeholder="From"
        name="from"
        onChange={(e) => setSource(e.target.value)}
    />
    {errors.source && <div className="invalid-feedback">{errors.source}</div>}
</div>
<div className="col">
    <input
        className={`form-control ${errors.destination ? 'is-invalid' : destination ? 'is-valid' : ''}`}
        type="text"
        placeholder="To"
        name="to"
        onChange={(e) => setDestination(e.target.value)}
    />
    {errors.destination && <div className="invalid-feedback">{errors.destination}</div>}
</div>

  </div>
  <br />
  <div className="row">
    <div className="col">
      <input 
      className={`form-control ${errors.date ? 'is-invalid' : date ? 'is-valid' : ''}`}
      type="date" placeholder="Start Date" name="start" onChange={(e) => setDate(e.target.value)} />
      {errors.date && <div className="invalid-feedback">{errors.date}</div>}
    </div>
  </div>
  <button type="submit" className="btn btn-primary mt-2">Search</button>
</form>
      </div>
      <br />
      <div>
        <h4 className="text-center">List</h4>
        <table border={1} className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Capacity</th>
              <th>Date</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {booking.map((bookingItem) => (
              <tr key={bookingItem.id}>
                <td>{bookingItem.id}</td>
                <td>{bookingItem.name}</td>
                <td>{bookingItem.source}</td>
                <td>{bookingItem.destination}</td>
                <td>{bookingItem.capacity}</td>
                <td>{bookingItem.date}</td>
                <td>{bookingItem.price}</td>
                <td><Link to={`/flightBooking/${bookingItem.id}`}
                            className="btn btn-warning" onClick={() => flightBooking(bookingItem)}>Book Now</Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FooterBar></FooterBar>
    </div>
    
  );
};

export default SearchPage;
