import React from 'react'
import "./SearchHotel.css"
import keralaHotel2 from '../Assets/Image/keralaHotel2.jpg'

function SearchHotel2() {
    const handleClick=()=>{
        
        alert('Your request Accepted and Your room is Booked');
    }
    return (
        <div className='searchItem'>
           <img src={keralaHotel2} alt='keralaHotel1' className='siImg'/>

           <div className='siDesc'>
            <h1 className='siTitle'>Le Meridien </h1>
            <span className='siDistance'>Maradu</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>Greate location,clean rooms and a pool

            </span>
            <span className='siCancelOp'>Free Cancellation till 24 hrs before checkin</span>
           </div>
           <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.5</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>INR 15,500</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button className='siCheckButton' onClick={handleClick}>Book</button>
                </div>
                </div>
                
        </div>
    );
};

export default SearchHotel2
