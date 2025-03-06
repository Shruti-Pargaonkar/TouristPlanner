import { Component } from "react"

class NavHotel extends Component{

    render(){
        return <div>
        <nav className='NavItems'>
            <h1 className='ProjTitle'>Tourist Planner</h1>
            <ul className='navMenu'>
                <li>
                    <a href="#"> <i class="fa-solid fa-user-tie"></i> My booking</a>
                </li>
                <li>
                    <a href="#"> <i class="fa-solid fa-user"></i> Logout</a>
                </li>
                
            </ul>
        </nav>
    </div>
    }
}

export default NavHotel;