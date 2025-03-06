import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';



export default function FetchFlightBooking() {
    const [FlightBooking, setFlightBooking] = useState([])

        const {id}=useParams()

    useEffect(() => {
        fetchFlightBooking();

    }, []);

    const fetchFlightBooking = async () => {
        const result = await axios.get("http://localhost:8000/FlightBooking/all");
        console.log(result.data);
        setFlightBooking(result.data);

    }

    const deleteFlightBook = async(id)=>{
        const confirmed = window.confirm("Are you sure you want to delete this flight?");
    if (confirmed) {
        await axios.delete(`http://localhost:8000/FlightBooking/delete/${id}`)
        fetchFlightBooking()
    }
    }
    return (
        <div>
            <header><AdminNav></AdminNav></header>
            <div className='container'>
            <div className='py-4'>
                <br></br>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Flight Name</th>
                            <th scope="col">source</th>
                            <th scope="col">destination</th>
                            <th scope="col">date</th>
                            <th scope="col">price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            FlightBooking.map((FlightBooking,index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{FlightBooking.name}</td>
                                    <td>{FlightBooking.source}</td>
                                    <td>{FlightBooking.destination}</td>
                                    <td>{FlightBooking.date}</td>
                                    <td>{FlightBooking.price}</td> 
                                    <td>
                                    <button type="button" class="btn btn-danger" onClick={()=>deleteFlightBook(FlightBooking.id)}>Delete</button>

                                            
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
