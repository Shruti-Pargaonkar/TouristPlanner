import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';
import FetchFlightBooking from './FetchFlightBooking';
import ViewFlightDetails from './ViewFlightDetails';



export default function UserfetchDetails() {
    const [User, setUser] = useState([])

        const {id}=useParams()

    useEffect(() => {
        userfetchDetails();

    }, []);

    const userfetchDetails = async () => {
        const result = await axios.get("http://localhost:8000/registration/getalluser");
        console.log(result.data);
        setUser(result.data);

    }

    return (
        <div>
            <header><AdminNav/> </header>
            <div className='container'>                
            <div className='py-4'>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email Id</th>                            
                            <th scope="col">Role</th>
    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            User.map((User,index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{User.username}</td>
                                    <td>{User.email}</td>
                                    <td>{User.role}</td>
                                   
                                
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
