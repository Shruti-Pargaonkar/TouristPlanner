import { Component } from "react";


class AdminNav extends Component
{
    render()
    {
        return <div>
            <nav className='NavItems'>
                <h1 className='ProjTitle'>Tourist Planner</h1>
                <ul className='navMenu'>
                    <li>
                        <a href="UserfetchDetails">Customers</a>
                    </li>
                    <li>
                        <a href="fetch">Flight</a>
                    </li>
                    <li>
                        <a href="fetchHotelDetails">Hotel</a>
                    </li>
                    <li>
                        <a href="fetchFlightBooking">FlightBooking</a>
                    </li>
                    <li>
                        <a href="FetchHotelBooking">HotelBooking</a>
                    </li>
                    <li>
                        <a href="/">logout</a>
                    </li>
                </ul>
            </nav>
            
        </div>
    }
}
export default AdminNav;