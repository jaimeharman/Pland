const { response } = require("express");
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require('axios');

// API Routes
router.use("/api", apiRoutes);

router.get("/plants", function (req, res) {
  axios.get('https://trefle.io/api/v1/plants?token=Vfe4EOlm7UFekDua6gadyrwdwQBMC-Y_bLQEUkREGjM&order[year]=asc')
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response)
    })
})

router.get("/search:commonName", function (req, res) {
  const param = req.params

  const newParam = param.commonName.replaceAll(" ", "%20")

  console.log(newParam);

  axios.get(`https://trefle.io/api/v1/plants?token=Vfe4EOlm7UFekDua6gadyrwdwQBMC-Y_bLQEUkREGjMN&filter[common_name]=${newParam}`)
    .then(function (response) {
      console.log(response.data);
      res.status(200).json(response)
    })
})

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

