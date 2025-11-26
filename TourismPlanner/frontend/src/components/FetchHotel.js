import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';

export default function FetchHotel() {

    const [hotels, setHotels] = useState([]); // changed state variable name to 'hotels'

    // const { hotelid } = useParams();

    useEffect(() => {
        fetchHotelDetails();
    }, []);

    const fetchHotelDetails = async () => {
        try {
            const response = await axios.get("http://localhost:8080/hotel/getallhoteldetails",
                {withCredentials: true}
            );
            console.log(response.data);
            setHotels(response.data);
        } catch (error) {
            console.error('Error fetching hotel details:', error);
        }
    };

    const deleteHotel = async (hotelId) => { // changed parameter name to camelCase
        try {
            const confirmed = window.confirm("Are you sure you want to delete this hotel?");
            if (confirmed) {
            await axios.delete(`http://localhost:8080/hotel/${hotelId}`,
                {withCredentials: true}
            );
            fetchHotelDetails(); 
            }// fetch updated hotel list after deletion
        } catch (error) {
            console.error('Error deleting hotel:', error);
        }

    };

    return (
        <div>
            <header><AdminNav></AdminNav></header>
            <div className='container-fluid'>
            <div className='py-4'>
                <Link className="btn btn-primary mx-2" to="/AddHotel">Add Hotel</Link><br></br>
                <br></br>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Description</th>
                            <th scope="col">Email</th>
                            <th scope="col">Price Per Day</th>
                            <th scope="col">Total Rooms</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    hotels.map((hotels,index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{hotels.name}</td>
                                    <td>{hotels.location}</td>
                                    <td>{hotels.description}</td>
                                    <td>{hotels.emailid}</td>
                                    <td>{hotels.priceperday}</td>
                                    <td>{hotels.totalroom}</td> 
                                    {/* <td>{hotels.totalprice}</td>  */}
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/Views/${hotels.hotelid}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2 mt-2" to={`/updatehotel/${hotels.hotelid}`}>Edit</Link>
                                    <button type="button" className="btn btn-danger mt-2" onClick={() => deleteHotel(hotels.hotelid)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}
