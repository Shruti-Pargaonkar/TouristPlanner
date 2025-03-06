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
            <div className='Container'>
                <div className='ListContainer'>
                    <div className='ListSearch'>
                        <h1 className='LsTitle'>Search</h1>
                        <div className='LsItem'>
                            <FontAwesomeIcon icon={faLandmark}/>
                            <label>Destination</label>
                            <input type='text'/>
                        </div>
                        <br/>
                        <div className='LsItem'>
                            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                            <label>Check-in Date</label>
                            <br/>
                            <span onClick={()=>setOpenDate(!openDate)}
                            className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}</span>
                            {openDate && <DateRange editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date' />}
                        </div>
                        <br/>
                        {/* <div className='LsItem'>
                            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                            <span onClick={()=> setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                           {openOptions && <div className='options'>
                                <div className='optionItem'>
                                    <span className='optionText'>Adult</span>
                                    <div className='optionCounter'>
                                    <button disabled={options.adult <= 1} className='optionCounterButton' onClick={()=>handleOption("adult","d")}>-</button>
                                    <span className='optionCounterNumber'>{options.adult}</span>
                                    <button className='optionCounterButton'onClick={()=>handleOption("adult","i")}>+</button>
                                </div></div>
                                <div className='optionItem'>
                                    <span className='optionText'>Children</span>
                                    <div className='optionCounter'>
                                    <button disabled={options.children <= 0}className='optionCounterButton'onClick={()=>handleOption("children","d")}>-</button>
                                    <span className='optionCounterNumber'>{options.children}</span>
                                    <button className='optionCounterButton'onClick={()=>handleOption("children","i")}>+</button>
                                </div></div>
                                <div className='optionItem'>
                                    <span className='optionText'>Room</span>
                                    <div className='optionCounter'>
                                    <button disabled={options.room <= 1} className='optionCounterButton'onClick={()=>handleOption("room","d")}>-</button>
                                    <span className='optionCounterNumber'>{options.room}</span>
                                    <button className='optionCounterButton'onClick={()=>handleOption("room","i")}>+</button>
                                </div></div>
                            </div>}
                        </div> */}

                        <div className='LsItem'>
                         
                            <div className='LsOptionItem'>
                                <span className='LsOptionText'> <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                                    Adult
                                </span>
                                <input type='number' min={1} className='LsOptionInput' placeholder={options.adult}/>

                            </div>
                            <div className='LsOptionItem'>
                                <span className='LsOptionText'> <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                                    Children
                                </span>
                                <input type='number' min={0} className='LsOptionInput'  placeholder={options.children}/>

                            </div>
                            <div className='LsOptionItem'>
                                <span className='LsOptionText'> <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                                    Rooms
                                </span>
                                <input type='number' min={1} className='LsOptionInput' placeholder={options.room}/>

                            </div>
                        </div>
                        <button> Search</button>

                    </div>
                    <div className='ListResult'>
                    <SearchHotel/>
                    <SearchHotel2/>
                    <SearchHotel3/>
                    <SearchHotel4/>
                    <SearchHotel5/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HotelList1
