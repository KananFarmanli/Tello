import axios from "axios";

const headers = {
    "X-Authorization": "pk_495500825ed2c9357b54e897c5804ebb7613869b9b8b3",
    "Accept": "application/json",
    "Content-Type": "application/json",
};
export const axiosInstance = axios.create({
    baseURL: 'https://api.chec.io/v1',
    headers,

})