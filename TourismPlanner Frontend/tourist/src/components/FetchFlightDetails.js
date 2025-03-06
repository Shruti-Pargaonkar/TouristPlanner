import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';



export default function FetchFlightDetails() {
    const [FlightDetails, setFlightDetails] = useState([])

        const {id}=useParams()

    useEffect(() => {
        fetchFlightDetails();

    }, []);

    const fetchFlightDetails = async () => {
        const result = await axios.get("http://localhost:8000/app/all");
        console.log(result.data);
        setFlightDetails(result.data);

    }

    const deleteFlightDetails = async(id)=>{
        const confirmed = window.confirm("Are you sure you want to delete this flight?");
    if (confirmed) {
        await axios.delete(`http://localhost:8000/app/delete/${id}`)
        fetchFlightDetails()
    }
    }
    return (
        <div>
            <header><AdminNav></AdminNav></header>
            <div className='container'>
            <div className='py-4'>
            <Link class="btn btn-primary mx-2" to="/AddFlightDetails">AddFlightDetails</Link><br></br>
            <br></br>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Flight Name</th>
                            <th scope="col">source</th>
                            <th scope="col">destination</th>
                            <th scope="col">capacity</th>
                            <th scope="col">date</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {FlightDetails.map((flight, index) => (
                            <tr key={index}>  
                                <th scope="row">{index + 1}</th>
                                <td>{flight.name}</td>
                                <td>{flight.source}</td>
                                <td>{flight.destination}</td>
                                <td>{flight.capacity}</td>
                                <td>{flight.date}</td>
                                <td>{flight.price}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/View/${flight.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mx-2" to={`/update/${flight.id}`}>Edit</Link>
                                    <button type="button" className="btn btn-danger" onClick={() => deleteFlightDetails(flight.id)}>Delete</button>
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
