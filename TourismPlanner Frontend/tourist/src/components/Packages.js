import React from 'react';
import image1 from '../Assets/Image/kerela.jpg'
import image2 from '../Assets/Image/Rajasthan.jpg'
import image3 from '../Assets/Image/Gujrat.jpg'
import image4 from '../Assets/Image/download.jpg'
import image5 from '../Assets/Image/kashmir.jpg'
import image6 from '../Assets/Image/Goa.jpg'
import Navigation from './Navigation';
//import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
function Packages() {
  const handleClick = () => {
    const customMessage = 'Welcome to my State! here is temp 30 Degree celcius';
    alert(`Namasteh. ${customMessage }`);
};
const handleClick1 = () => {
  const customMessage = 'Welcome to my State! here is Temp is 50 Degree Celcius';
  alert(`Namasteh. ${customMessage}`);
};

const handleClick2 = () => {
  const customMessage = 'Welcome to my State! here is Temp is 25 Degree Celcius';
  alert(`Namasteh. ${customMessage}`);
};
const handleClick3 = () => {
  const customMessage = 'Welcome to my State! here is Temp is 35 Degree Celcius';
  alert(`Namasteh. ${customMessage}`);
};
const handleClick4 = () => {
  const customMessage = 'Welcome to my State! here is Temp is 15 Degree Celcius';
  alert(`Namasteh. ${customMessage}`);
};

return (
        <div>
          <Navigation/>
        <div className='head' style={{textAlign:'center'}}>
        <h1> Holiday Packages</h1></div>
        <br/>
        <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card">
   <img src={image1}class="card-img-top"  alt='kerela' style={{ height: '170px'}}/>
  <div class="card-body" style={{ height: '300px'}} >
    <h5 class="card-title">Kerala</h5>
    <p class="card-text">Kerala, often termed "God's Own Country," captivates with its serene backwaters, lush hill stations, and golden beaches. Immerse yourself in the tranquility of its backwaters aboard traditional houseboats or trek through mist-covered hills for an unforgettable experience in this picturesque state.</p>
    
    <Link to="/p" className='btn btn-primary' onClick={handleClick}>Book Now</Link>
    {/* <button onClick={()=>navigate("/p")}>Book Now</button> */}
    {/* <button onClick={()=>{
      setGoToBook(true);
    }}>Book Now</button> */}
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
    <img src={image2}class="card-img-top"  alt='Rajasthan' style={{ height: '170px'}}/>
  <div class="card-body" style={{ height: '300px'}}>
    <h5 class="card-title">Rajasthan</h5>
    <p class="card-text">Rajasthan, known as the "Land of Kings," enchants visitors with its majestic forts, vibrant culture, and golden deserts. Explore the grandeur of ancient palaces in Jaipur, Jodhpur, and Udaipur, or embark on a desert safari in Jaisalmer for an unforgettable journey through this regal state.</p>
    <Link to="/p" className='btn btn-primary' onClick={handleClick}>Book Now</Link>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
    <img src={image3}class="card-img-top"  alt='Gujarat' style={{ height: '170px'}}/>
  <div class="card-body" style={{ height: '300px'}}>
    <h5 class="card-title">Gujarat</h5>
    <p class="card-text">Gujarat, famed for its rich history, vibrant culture, and diverse landscapes, beckons travelers with its architectural wonders, vibrant festivals, and pristine beaches. Explore the intricately carved temples of Somnath and Dwarka, witness the colorful festivities of Navratri, and unwind along the serene shores of Diu.</p>
    <Link to="/p" className='btn btn-primary' onClick={handleClick}>Book Now</Link>
  </div>
</div>
    </div>
  </div>
</div>
<br></br>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card">
    <img src={image4}class="card-img-top"  alt='Agra' style={{ height: '170px'}}/>
  <div class="card-body" style={{ height: '300px'}}>
    <h5 class="card-title">Agra</h5>
    <p class="card-text">
Agra, home to the iconic Taj Mahal, epitomizes the grandeur of Mughal architecture and the timeless allure of love. Explore the majestic Taj Mahal, marvel at the grandeur of Agra Fort, and immerse yourself in the rich history and culture of this historic city on the banks of the Yamuna River.</p>
<Link to="/p" className='btn btn-primary' onClick={handleClick}>Book Now</Link>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
    <img src={image5}class="card-img-top"  alt='kashmir' style={{ height: '170px'}}/>
  <div class="card-body" style={{ height: '300px'}}>
    <h5 class="card-title">Kashmir</h5>
    <p class="card-text">Kashmir, often described as "Paradise on Earth," captivates with its breathtaking natural beauty, serene lakes, and snow-capped mountains. Explore the enchanting Dal Lake, witness the majestic beauty of the Himalayas, and experience the warm hospitality of the Kashmiri people for an unforgettable journey in this idyllic valley.</p>
    <Link to="/p" className='btn btn-primary' onClick={handleClick}>Book Now</Link>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card" >
    <img src={image6}class="card-img-top"  alt='goa'style={{ height: '170px'}}/>
  <div class="card-body" style={{ height: '300px'}}>
    <h5 class="card-title">Goa</h5>
    <p class="card-text">Goa, renowned for its pristine beaches, vibrant culture, and Portuguese heritage, offers a perfect blend of relaxation and adventure. Indulge in water sports along the golden sands of Calangute and Baga beaches, explore the historic churches and forts of Old Goa, and savor the flavors of Goan cuisine.</p>
    <Link to="/p" className='btn btn-primary' onClick={handleClick}>Book Now</Link>
  </div>
</div>
    </div>
  </div>
</div>
</div>

    )
}

export default Packages
