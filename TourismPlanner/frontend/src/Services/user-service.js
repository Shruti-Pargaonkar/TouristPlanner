import { myAxios } from "./connection";

export const registerUser=(user)=>{
    return myAxios.post('/User/add', user).then((response)=> response.data);
};