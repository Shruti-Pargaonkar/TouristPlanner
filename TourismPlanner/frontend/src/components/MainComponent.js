// MainComponent.js
import React, { useEffect , useState } from 'react'
import ViewHotel from './ViewHotel';
import ViewFlightDetails from './ViewFlightDetails';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import Profile from './Profile';
import { useParams } from 'react-router-dom'

const MainComponent = () => {
  const [userData, setUserData] = useState({});
  const [flightData, setFlightData] = useState({});
  const [hotelData, setHotelData] = useState({});
  const { id } = useParams();  

  useEffect(() => {
    // Fetch data for user, flight booking, and hotel booking
    const fetchUserData = async () => {
      const response = await axios.get(`http://localhost:8080/api/v1/user/${id}`,
        {withCredentials: true}
      );
      setUserData(response.data);
    };

    const fetchFlightData = async () => {
      const response = await axios.get(`http://localhost:8080/app/FlightDetails/${id}`,
        {withCredentials: true}
      );
      setFlightData(response.data);
    };

    const fetchHotelData = async () => {
      const response = await axios.get(`http://localhost:8080/hotel/HotelDetails/${id}`,
        {withCredentials: true}
      );
      setHotelData(response.data);
    };

    fetchUserData();
    fetchFlightData();
    fetchHotelData();
  }, []);

  return (
    <div>
      <Profile user={userData} />
      <ViewFlightDetails flight={flightData} />
      <ViewHotel hotel={hotelData} />
    </div>
  );
};

export default MainComponent;
