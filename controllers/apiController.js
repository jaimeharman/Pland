const axios = require('axios');

module.exports = {
    findPlant: function(req, res) {
        let commonName = req.params.plantName
        let apiKey = Vfe4EOlm7UFekDua6gadyrwdwQBMC-Y_bLQEUkREGjM

        axios
        .get(`https://trefle.io/api/v1/plants/search?token=${apiKey}&q=${commonName}`)
        .then(function(response) {
            res.json(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}