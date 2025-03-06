import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';

export default function ViewFlightDetails() {
    const [FlightDetails, setFlightDetails] = useState({
        id: '',
        name: '',
        source: '',
        destination: '',
        capacity: '',
        date: '',
        price: ''
    });

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            viewFlightDetails();
        }
    }, [id]);

    const viewFlightDetails = async () => {
        try {
            const result = await axios.get(`http://localhost:8000/app/FlightDetails/${id}`);
            setFlightDetails({
                id: result.data.id,
                name: result.data.airline,
                source: result.data.source,
                destination: result.data.destination,
                capacity: result.data.capacity,
                date: result.data.flightDate,
                price: result.data.price,
            });
        } catch (error) {
            console.error("Error fetching flight details:", error);
            alert('Invalid Flight ID or Flight not found!');
        }
    };

    return (
        <div>
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4"> Flight Details</h2>
                        <div className="card">
                            <div className="card-header text-center m-2">
                                <b>Details of Flight ID :</b> {FlightDetails.id}
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Flight Name:</b> {FlightDetails.name}</li>
                                    <li className="list-group-item"><b>Source:</b> {FlightDetails.source}</li>
                                    <li className="list-group-item"><b>Destination:</b> {FlightDetails.destination}</li>
                                    <li className="list-group-item"><b>Capacity:</b> {FlightDetails.capacity}</li>
                                    <li className="list-group-item"><b>Date:</b> {FlightDetails.date}</li>
                                    <li className="list-group-item"><b>Price:</b> {FlightDetails.price}</li>
                                </ul>
                            </div>
                        </div>
                        <Link className="btn btn-primary my-2" to={"/fetch"}>Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
