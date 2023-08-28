import axios from "axios";


export const fatchProduct = () =>{
    return axios.get('http://localhost:8080/products')
}