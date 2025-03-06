import React from 'react'
import "./SearchHotel.css"
import keralaHotel5 from '../Assets/Image/keralaHotel5.jpg'

function SearchHotel5() {
    
    const handleClick=()=>{
            
        alert('Your request Accepted and Your room is Booked');
    }
    
    return (
        <div className='searchItem'>
           <img src={keralaHotel5} alt='keralaHotel5' className='siImg'/>

           <div className='siDesc'>
            <h1 className='siTitle'>Ginger House Museum Hotel</h1>
            <span className='siDistance'>Mattancherry</span>
            <span className='siTaxiOp'>Breakfast Included</span>
            <span className='siSubtitle'>Greate location,clean rooms and a pool

            </span>
            <span className='siCancelOp'>Free Cancellation</span>
           </div>
           <div className='siDetails'>
            <div className='siRating'>
                <span>Good</span>
                <button>7</button>
                </div>
                <div className='siDetailTexts'>
                    <span className='siPrice'>INR 13,000</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button className='siCheckButton'  onClick={handleClick}>Book</button>
                </div>
                </div>
                
        </div>
    );
};

export default SearchHotel5
