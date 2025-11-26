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
        const result = await axios.get("http://localhost:8080/app/all");
        console.log(result.data);
        setFlightDetails(result.data);

    }

    const deleteFlightDetails = async(id)=>{
        const confirmed = window.confirm("Are you sure you want to delete this flight?");
    if (confirmed) {
        await axios.delete(`http://localhost:8080/app/delete/${id}`)
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
                        {
                            FlightDetails.map((FlightDetails,index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{FlightDetails.name}</td>
                                    <td>{FlightDetails.source}</td>
                                    <td>{FlightDetails.destination}</td>
                                    <td>{FlightDetails.capacity}</td>
                                    <td>{FlightDetails.date}</td>
                                    <td>{FlightDetails.price}</td> 
                                    <td>
                                    <Link class="btn btn-primary mx-2" to={`/View/${FlightDetails.id}`}>View</Link>
                                    <Link class="btn btn-outline-primary mx-2" to={`/update/${FlightDetails.id}`}>Edit</Link>
                                    <button type="button" class="btn btn-danger" onClick={()=>deleteFlightDetails(FlightDetails.id)}>Delete</button>

                                            
                                        </td>  
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>


        </div>
        </div>
    )
}
