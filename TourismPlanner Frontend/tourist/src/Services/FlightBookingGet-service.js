import { myAxios } from "./connection";

export const GetBookingFlight=(FlightBookingByid)=>{
    return myAxios.get(`/FlightBooking/${id}`, FlightBookingByid).then((response)=> response.data);
};  