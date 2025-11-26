import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import AdminNav from './AdminNav';

export default function ViewFlightDetails() {
  

    const [FlightDetails, setFlightDetails] = useState({
        name: '',
        source: '',
        destination: '',
        capacity: '',
        date: '',
        price: ''
    });
    const {id} = useParams();

    useEffect(()=>{
        viewFlightDetails();
    });

    const viewFlightDetails =async ()=>{
        const result=await axios.get(`http://localhost:8080/app/FlightDetails/${id}`);
        setFlightDetails(result.data);
    }

    return (
        <div>
            <AdminNav/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"> Flight Details</h2>
                    <div className="card">
                        <div className="card-header text-center m-2">
                            <b>Details of FlightDetail number :</b> {FlightDetails.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Flight Name : </b>
                                    {FlightDetails.name}

                                </li>
                                <li className="list-group-item">
                                    <b>source : </b>
                                    {FlightDetails.source}
                                </li>
                                <li className="list-group-item">
                                    <b>destination : </b>
                                    {FlightDetails.destination}
                                </li>
                                <li className="list-group-item">
                                    <b>capacity : </b>
                                    {FlightDetails.capacity}
                                </li>
                                <li className="list-group-item">
                                    <b>date : </b>
                                    {FlightDetails.date}
                                </li>
                                <li className="list-group-item">
                                    <b>price : </b>
                                    {FlightDetails.price}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/fetch"}>Back to Home</Link>
                </div>
            </div>
        </div>
        </div>
            )
    }
