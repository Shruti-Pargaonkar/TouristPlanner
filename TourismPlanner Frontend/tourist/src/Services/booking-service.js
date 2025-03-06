import { myAxios } from "./connection";

export const bookingHotel=(book)=>{
    return myAxios.post('/Book/addHotelBooking', book).then((response)=> response.data);
};