import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8082/api",
    Headers: {
        "Content-type": "application/json",
    baseURL: "http://localhost:8081/api",
    headers: {
        "Content-type": "application/json"
    },
});