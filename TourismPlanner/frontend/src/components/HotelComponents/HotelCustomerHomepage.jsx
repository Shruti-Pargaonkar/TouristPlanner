import NavHotel from "./NavHotel";
import { Link } from "react-router-dom";
import { Button, Card, Form } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from "axios";
import image1 from '../../Assets/Image/jwmarriot.jpg';
import image2 from '../../Assets/Image/hyatt.jpg';
import image3 from '../../Assets/Image/taj.jpg';
import image4 from '../../Assets/Image/raddison.jpg';
import { useParams } from "react-router-dom";
import Navigation from "../Navigation";
import FooterBar from "../Footer";
const HotelCustomer = () => {

  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  const [hotels, setHotels] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const handleCheckboxChange = (location) => {
    // Toggle selection status of the location
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/hotel/getallhoteldetails');
        setHotels(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="Home">
      <Navigation />

      <h2 style={{ textAlign: 'center' }}>Hotels</h2>

      <div style={{ display: 'flex' }}>
        <div> 
        <div style={{ width: '10%', marginTop: '20px', marginLeft: '20px' }}>
          {/* Create checkboxes for each unique location */}
          <h4>Locations</h4>
          {Array.from(new Set(hotels.map(hotels => hotels.location))).map((location, index) => (
            <div key={index}>
              <Form.Check
                type="checkbox"
                id={location}
                label={location}
                checked={selectedLocations.includes(location)}
                onChange={() => handleCheckboxChange(location)}
              />
            </div>
          ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {hotels.filter(hotels => selectedLocations.length === 0 || selectedLocations.includes(hotels.location)).map((item, index) => (
              <div key={item.hotelid} style={{ margin: '20px', width: '18rem' }}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={images[index % images.length]} style={{ height: '6cm', width: '7.58cm' }} />
                  <Card.Body>
                    <Card.Title>{item.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {item.location}</Card.Title>
                    <Card.Text>
                      {item.description}
                      <br />
                      <b>Price Per Day:</b>{item.priceperday}
                      <br />
                      <b>Total rooms:</b>{item.totalroom}
                      <br />
                      
                    </Card.Text>
                    <Link to={`/booking`} className="btn btn-primary">Book Now</Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

        </div>
      </div>
      <FooterBar/>
    </div>



  )
}

export default HotelCustomer;