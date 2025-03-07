import React from 'react';
import image1 from '../Assets/Image/kerela.jpg';
import image2 from '../Assets/Image/Rajasthan.jpg';
import image3 from '../Assets/Image/Gujrat.jpg';
import image4 from '../Assets/Image/download.jpg';
import image5 from '../Assets/Image/kashmir.jpg';
import image6 from '../Assets/Image/Goa.jpg';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import FooterBar from './Footer';

function Packages() {
  const handleClick = (state, temp) => {
    alert(`Namasteh. Welcome to ${state}! The temperature is ${temp}°C`);
  };

  const destinations = [
    { name: 'Kerala', 
      image: image1, 
      temp: 30, 
      description: "Kerala, often termed 'God's Own Country,' captivates with its serene backwaters, lush hill stations, and golden beaches." 
    },
    { name: 'Rajasthan', 
      image: image2, 
      temp: 50, 
      description: "Rajasthan, known as the 'Land of Kings,' enchants visitors with its majestic forts, vibrant culture, and golden deserts." 
    },
    { name: 'Gujarat', 
      image: image3, 
      temp: 25, 
      description: "Gujarat, famed for its rich history, vibrant culture, and diverse landscapes, beckons travelers with its architectural wonders and vibrant festivals." 
    },
    { name: 'Agra', 
      image: image4, 
      temp: 35, 
      description: "Agra, home to the iconic Taj Mahal, epitomizes the grandeur of Mughal architecture and the timeless allure of love." 
    },
    { name: 'Kashmir', 
      image: image5, 
      temp: 15, 
      description: "Kashmir, often described as 'Paradise on Earth,' captivates with its breathtaking natural beauty, serene lakes, and snow-capped mountains." 
    },
    { name: 'Goa', 
      image: image6, 
      temp: 28, 
      description: "Goa, renowned for its pristine beaches and Portuguese heritage, offers a perfect blend of relaxation and adventure." 
    }
  ];

  return (
    <div>
      <Navigation />
      <div className='head' style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>Holiday Packages</h1>
      </div>
      <div className="container">
        <div className="row">
          {destinations.map((destination, index) => (
            <div className="col-sm-4 mb-4" key={index}>
              <div className="card shadow-lg" style={{ borderRadius: '15px' }}>
                <img src={destination.image} className="card-img-top" alt={destination.name} style={{ height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
                <div className="card-body" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <h5 className="card-title">{destination.name}</h5>
                  <p className="card-text" style={{ fontSize: '0.9rem', textAlign: 'justify' }}>{destination.description}</p>
                  <Link to="/p" className='btn btn-primary' onClick={() => handleClick(destination.name, destination.temp)}>
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterBar />
    </div>
  );
}

export default Packages;

