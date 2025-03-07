import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBed, faCalendarDays, faLandmark, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import {format}  from "date-fns";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "./HotelList.css"
import SearchHotel from './SearchHotel';
import SearchHotel2 from './SearchHotel2';
import SearchHotel3 from './SearchHotel3';
import SearchHotel4 from './SearchHotel4';
import SearchHotel5 from './SearchHotel5';
import Navigation from './Navigation';
import FooterBar from './Footer';
function HotelList1() {
    const [openDate, setOpenDate] = useState(false)
    const [date,setDate] = useState([
        {
            startDate: new Date(),
            endDate:new Date(),
            key:'selection'
        }
    ]);
   
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    });
    const handleOption=(name, operation)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]: operation ==="i" ? options[name] +1: options[name] -1,
            };
        });
    };
    return (
        <div>
            <Navigation></Navigation>
            <div className='Container'>
                <div className='ListContainer'>
                    <div className='ListResult'>
                    <SearchHotel/>
                    <SearchHotel2/>
                    <SearchHotel3/>
                    <SearchHotel4/>
                    <SearchHotel5/>
                    </div>

                </div>

            </div>
            <FooterBar></FooterBar>
        </div>
    )
}

export default HotelList1
