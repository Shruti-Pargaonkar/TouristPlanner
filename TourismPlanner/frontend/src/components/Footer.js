import { Component } from "react";
import './Footer.css'

class FooterBar extends Component
{
    render()
    {
        return <div>
            {/* <div className="foot">
                <h4>tourismPlanner@gmail.com</h4>
                <h4>+91 9876543210</h4>
            </div> */}

            <footer>
                <hr></hr>
                <h5>tourismPlanner@gmail.com</h5>
                <h6>Contact Us: +91 9876543210</h6>
                 follow us at
                 &nbsp;
                <i className="fa-brands fa-instagram fontAwesome"></i>  &nbsp;
                <i className="fa-brands fa-facebook-f fontAwesome"></i>
            </footer>
        </div>
    }
}
export default FooterBar;