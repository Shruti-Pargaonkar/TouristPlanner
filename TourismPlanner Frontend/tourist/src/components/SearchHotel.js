import React from 'react'
import "./SearchHotel.css"
import keralaHotel1 from '../Assets/Image/keralaHotel1.jpg'


function SearchHotel() {
    const handleClick=()=>{
        
        alert('Your request Accepted and Your room is Booked');
    }

    return (
        <div className='searchItem'>
           <img src={keralaHotel1} alt='keralaHotel1' className='siImg'/>

           <div className='siDesc'>
            <h1 className='siTitle'>Radisson Blu </h1>
            <span className='siDistance'>Elamkulam</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>Greate location,clean rooms and a pool

            </span>
            <span className='siCancelOp'>Free Cancellation</span>
           </div>
           <div className='siDetails'>
            <div className='siRating'>
                <span>Excellent</span>
                <button>8.9</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>INR 10,000</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button  className='siCheckButton'  onClick={handleClick}>Book</button>
                </div>
                </div>
                
        </div>
    );
};

export default SearchHotel
