import axios from 'axios';

export default {
    findPlant: function (commonName) {
        console.log("hello");
        return axios.get("/api/search/" + commonName)
    }
}