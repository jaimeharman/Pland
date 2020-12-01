const axios = require('axios');

module.exports = {
    findPlant: function (req, res) {

        let commonName = req.params.commonName
        let apiKey = process.env.REACT_APP_APIKEY

        axios
            .get(`https://trefle.io/api/v1/plants/search?token=${apiKey}&q=${commonName}`)
            .then(function (response) {
                res.json(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },

    findByID: function (req, res) {
        let apiKey = process.env.REACT_APP_APIKEY
        let id = req.params.id

        axios.get(`https://trefle.io/api/v1/plants/${id}?token=${apiKey}`)
            .then(function (response) {
                res.json(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}