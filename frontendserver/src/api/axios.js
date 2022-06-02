import axios from "axios";

export default axios.create({
    baseURL: "http://api",
    headers: {
        "Content-Type": "application/json",
    },
});