// import React, { useState } from 'react';
import './Navigation.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    // const [userId, setUserId] = useState(sessionStorage.getItem('userId'));

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
    };

    return (
        <div>
            <header>
                <nav className='NavItems'>
                    <h1 className='ProjTitle'>Tourist Planner</h1>
                    <ul className='navMenu'>
                        <li>
                            <a href="User"> <i className="fa-solid fa-house"></i> Home</a>
                        </li>
                        <li>
                            <a href="Weather"> <i className="fa-solid fa-house"></i> Weather</a>
                        </li>
                        <li>
                            <a href="Search"><i className="fa-solid fa-plane-departure"></i> Flights</a>
                        </li>
                        <li>
                            <a href="hotel"><i className="fa-solid fa-hotel"></i>Hotels</a>
                        </li>
                        <li>
                            <a href="Package"><i className="fa-solid fa-briefcase"></i>Holidays</a>
                        </li>
                        <li className='btn1'><BasicButtonExample handleLogout={handleLogout} /></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

function BasicButtonExample({ handleLogout }) { // used from react bootstrap
    return (
        <DropdownButton id="dropdown-basic-button" title={<i className="fa-solid fa-user-large"></i>}>
            <Link to="/history">
                <Dropdown.Item href="#/action-2">Your Bookings</Dropdown.Item>
            </Link>
            <hr></hr>
            <Dropdown.Item href="" onClick={handleLogout}>LogOut</Dropdown.Item>
        </DropdownButton>
    );
}

export default Navigation;