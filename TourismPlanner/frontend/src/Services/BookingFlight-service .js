import { myAxios } from "./connection";

export const BookingFlight=(FlightBooking)=>{
    return myAxios.post('/FlightBooking/add', FlightBooking).then((response)=> response.data);
};  