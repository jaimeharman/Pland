import axios from 'axios';

export default {
    findPlant: function (commonName) {
        console.log("hello");
        return axios.get("/api/search/" + commonName)
    },

    findByID: function(id){
        return axios.get("/api/search/" + id)
    }
}