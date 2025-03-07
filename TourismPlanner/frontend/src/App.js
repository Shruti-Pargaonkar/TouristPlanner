// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import {Button} from 'react-bootstrap'
import FlightBook from './components/FlightBook';
import HomePage from './components/HomePage';
import Booking from './components/Booking';
import AddFlightDetails from './components/AddFlightDetails';
import FetchFlightDetails from './components/FetchFlightDetails';
import EditFlightDetails from './components/EditFlightDetails';
import ViewFlightDetails from './components/ViewFlightDetails';
import UserfetchDetails from './components/UserfetchDetails';
import UserHomePage from './components/UserHomePage';
import Packages from './components/Packages';
import AddHotel from './components/AddHotel';
import FetchHotel from './components/FetchHotel';
import ViewHotel from './components/ViewHotel';
import SearchPage from './components/SearchPage';
import FetchHotelBooking from './components/FetchHotelBooking';
import AdminNav from './components/AdminNav';
import HotelCustomer from './components/HotelComponents/HotelCustomerHomepage';
import EditHotelDetails from './components/EditHotelDetails';
import SignUp from './components/SignUp'
import Login from './components/Login'
import FetchFlightBooking from './components/FetchFlightBooking';
import Weather from './components/Weather';
import HotelList1 from './components/HotelList1'
import Profile from './components/Profile';
import MyBookings from './components/MyBookings';
function App() {
  return (
    <div className="App">
        {/* <Booking/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
      <Routes> 
        
         <Route path="/" element={<HomePage></HomePage>}></Route>
         <Route path="user" element={<UserHomePage></UserHomePage>}></Route>
         <Route path="/admin" element={<AdminNav></AdminNav>}></Route>
         <Route path="/flightBooking" element={<FlightBook></FlightBook>}></Route>
        <Route path="/flightBooking/:id" element={<FlightBook></FlightBook>}></Route>
        <Route path="/fetchFlightBooking" element={<FetchFlightBooking/>}></Route>
        <Route path="/fetchHotelDetails" element={<FetchHotel></FetchHotel>}></Route>
            <Route path="/Views/:id" element={<ViewHotel></ViewHotel>}></Route>
            <Route path="/AddHotel" element={<AddHotel/>}></Route>
            <Route path="/views/:id" element={<ViewHotel></ViewHotel>}></Route>
            <Route path="/fetch" element={<FetchFlightDetails></FetchFlightDetails>}></Route>
            <Route path="/AddFlightDetails" element={<AddFlightDetails></AddFlightDetails>}></Route>
            <Route path="/update/:id" element={<EditFlightDetails></EditFlightDetails>}></Route>
            <Route path="/updatehotel/:id" element={<EditHotelDetails></EditHotelDetails>}></Route>
            <Route path="/View/:id" element={<ViewFlightDetails></ViewFlightDetails>}></Route>
            <Route path="/Search" element={<SearchPage></SearchPage>}></Route>
            <Route path="/Package" element={<Packages></Packages>}></Route>
            <Route path="/p" element={ <HotelList1/>}/>
            <Route path="/UserfetchDetails" element={<UserfetchDetails></UserfetchDetails>}></Route>
            <Route path="/FetchHotelBooking" element={<FetchHotelBooking></FetchHotelBooking>}></Route>
            <Route path="/Weather" element={<Weather/>}></Route>
            <Route path="/hotel" element={<HotelCustomer/>} />  
          <Route path="/booking" element={<Booking/>} />
          <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
          <Route path="/profile/:email" element={<Profile></Profile>}></Route>
          <Route path="/history" element={<MyBookings/>}></Route>
       </Routes>
       </Router>
      {/* <Hotels></Hotels> */}
      {/* <HomePage></HomePage> */}
       {/* <FlightBook></FlightBook> */}
      {/* <Signup></Signup> */}
      {/* <UserfetchDetails/> */}
    
    
      {/* <FetchHotelDetails/> */}
    
      {/* <Login></Login> */}
      
      {/* <Navigation></Navigation> */}
    {/* <AddFlightDetails/> */}
 {/* <FetchFlightDetails/>  */}

     {/* <EditFlightDetails/> */}

   {/* <Booking/> */}


  
    </div>
    
  );
}

export default App;
