import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function ViewHotel() {
  

    const [Hotel, setHotel] = useState({
        name: '',
        location: '',
        description: '',
        emailid: '',
        priceperday: '',
        totalroom: ''
    });
    const {id} = useParams();

    useEffect(()=>{
        viewHotel();
    },[]);

    const viewHotel =async ()=>{
        const result=await axios.get(`http://localhost:8000/hotel/HotelDetails/${id}`);
        setHotel(result.data);
    }

    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"> Hotel Details</h2>
                    <div className="card">
                        <div className="card-header text-center m-2">
                            <b> Hotel number :</b> {Hotel.hotelid}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Hotel Name : </b>
                                    {Hotel.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Location : </b>
                                    {Hotel.location}
                                </li>
                                <li className="list-group-item">
                                    <b>description : </b>
                                    {Hotel.description}
                                </li>
                                <li className="list-group-item">
                                    <b>emailid : </b>
                                    {Hotel.emailid}
                                </li>
                                <li className="list-group-item">
                                    <b>price per day : </b>
                                    {Hotel.priceperday}
                                </li>
                                <li className="list-group-item">
                                    <b>total room : </b>
                                    {Hotel.totalroom}
                                </li>
                                <li className="list-group-item">
                                    <b>total room : </b>
                                    {Hotel.totalroom}
                                </li>
                                <li className="list-group-item">
                                    <b>total room : </b>
                                    {Hotel.totalprice}
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/fetchHotelDetails"}>Back to Home</Link>
                </div>
            </div>
        </div>
        </div>
            )
    }
