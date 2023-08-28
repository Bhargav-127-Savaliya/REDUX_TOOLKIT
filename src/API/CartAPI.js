import axios from "axios";

export const fatchItems = () =>{
    return axios.get('http://localhost:8080/cart')
}
export const addItems = (item) =>{
    console.log("Added " + item.title);
    return axios.post('http://localhost:8080/cart',item)
}