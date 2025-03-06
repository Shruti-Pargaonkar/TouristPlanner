import './external.css';
import axios from 'axios';
import React, { useEffect , useState } from 'react'
import FooterBar from "./Footer";
import Navigation from "./Navigation";
import { Link ,useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
 import { BookingFlight } from '../Services/BookingFlight-service ';
import 'react-toastify/dist/ReactToastify.css';
// import image from '../Assets/Image/plane.jpg'

export default function FlightBook()
    {

        const [FlightDetails, setFlightDetails] = useState({
            userId:'',
            name: '',
        source: '',
        destination: '',
        capacity: '',
        date: '',
        price: ''
    });
    const {id} = useParams();

     const storedUserId = sessionStorage.getItem('userId');
     //setUserId(storedUserId);
     console.log(storedUserId);
    useEffect(()=>{
        viewFlightDetails();
    },[]);

    const viewFlightDetails =async ()=>{
        const result=await axios.get(`http://localhost:8000/app/FlightDetails/${id}`);
        setFlightDetails(result.data);
    }

    // const BookFlightDetails = async(id)=>{
    //     await axios.post(`http://localhost:8000/FlightBooking/add`)
    //     viewFlightDetails()

    //     // const data =  BookingFlight({ FlightBooking });

    // }

    
    const addTeam = async () => {
    const { name, source, destination, date, price } = FlightDetails;
    const userId = sessionStorage.getItem('userId'); // Retrieve userId from sessionStorage

    try {
        const response = await BookingFlight({ name, source, destination, date, price, userId });
        console.log(response.data);
        // Perform any necessary actions after successful booking
        window.alert("Flight booked successfully!"); 
        console.log(sessionStorage);   
        toast.success("Flight booked successfully!");
    } catch (error) {
        console.error('Error booking flight:', error);
        toast.error("Error booking flight");
    }
}
    

    
        
       
    
    
        return <div >
            
            <div className="backGround">
                <div>
                <Navigation/>
                <hr></hr>
                <div className="container">
    <form className="frm">
    
        <br />
        <label className="m-2">Flight No.: </label>{FlightDetails.id}
        <br />
        <label className="m-2">Name of flight: </label>{FlightDetails.name}
        <br />
        <label name="date" className="m-2"> Date: </label> {FlightDetails.date}
        <br />
        <label className="m-2">From: </label>{FlightDetails.source}
        <br />
        <label className="m-2">To: </label>{FlightDetails.destination}
        <br />
        <label className="m-2">Price: </label>{FlightDetails.price}
        <br />
            {/* <button type="button" class="btn btn-primary" onClick={()=>BookFlightDetails    }>Book</button> */}
          <button type="button" class="btn btn-primary"   onClick={addTeam}  >Book</button>

    </form>
</div>

                <FooterBar></FooterBar>
            </div>
            </div>
        </div>
    }

