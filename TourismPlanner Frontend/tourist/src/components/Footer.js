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
                <h6>tourismPlanner@gmail.com</h6>
                <h6>+91 9876543210</h6>
            </footer>
        </div>
    }
}
export default FooterBar;