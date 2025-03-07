import { Component } from "react";
import FlightBook from "./FlightBook";

class HomeNav extends Component
{
    render()
    {
        return <div>
            <nav className='NavItems'>
                <h1 className='ProjTitle'>Tourist Planner</h1>
                <ul className='navMenu'>
                <a href="/signup"> <i class="fa-solid fa-user-tie"></i> Register/Login</a>
                    {/* <li>
                        <a href="#"><i class="fa-solid fa-hotel"></i> Hotels</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-solid fa-briefcase"></i>Holidays</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-solid fa-phone"></i>Contact Us</a>
                    </li>
                    
                    <button className='btn1'><i class="fa-solid fa-user-large"></i></button> */}
                </ul>
            </nav>
        </div>
    }
}
export default HomeNav;