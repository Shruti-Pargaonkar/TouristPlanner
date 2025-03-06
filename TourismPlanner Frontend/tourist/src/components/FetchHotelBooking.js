import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';



export default function FetchHotelBooking() {
    const [Booking, setBooking] = useState([])

        const {id}=useParams()

    useEffect(() => {
        fetchHotelBooking();

    }, []);

    const fetchHotelBooking = async () => {
        

        try {
            const result = await axios.get("http://localhost:8000/Book/all");
            console.log(result.data);
            setBooking(result.data);
        } catch (error) {
            console.error("Error fetching hotel bookings:", error);
        }
    }

    return (

       <div>
        <header><AdminNav></AdminNav></header>
         <div className='container'>
            <div className='py-4'>
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th scope="col">booking number</th>
                            <th scope="col">checkIn</th>
                            <th scope="col">checkOut</th>
                            <th scope="col">totalRoom</th>
                            <th scope="col">totalDay</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {Booking.length > 0 && 
                            Booking.map((Booking, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{Booking.checkIn}</td>
                                    <td>{Booking.checkOut}</td>
                                    <td>{Booking.totalRoom}</td>
                                    <td>{Booking.totalDay}</td>
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
