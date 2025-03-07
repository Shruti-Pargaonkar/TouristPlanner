import React from 'react'
import "./SearchHotel.css"
import keralaHotel3 from '../Assets/Image/keralaHotel3.jpg'

function SearchHotel3() {

    
        const handleClick=()=>{
            
            alert('Your request Accepted and Your room is Booked');
        }

    return (
        <div className='searchItem'>
           <img src={keralaHotel3} alt='keralaHotel3' className='siImg'/>

           <div className='siDesc'>
            <h1 className='siTitle'>Courtyard by Marriott  Airport</h1>
            <span className='siDistance'>Nedumbassery | 840 m from Cochin</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>Greate location,clean rooms and a pool

            </span>
            <span className='siCancelOp'>Free Cancellation till 24 hrs before checkin</span>
           </div>
           <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>7.5</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>INR 8,400</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button className='siCheckButton'  onClick={handleClick}>Book</button>
                </div>
                </div>
                
        </div>
    );
};

export default SearchHotel3
