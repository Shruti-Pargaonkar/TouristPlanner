import { myAxios } from "./connection";

export const AddFlightDetail=(FlightDetail)=>{
    return myAxios.post('/app/test3', FlightDetail).then((response)=> response.data);
};  