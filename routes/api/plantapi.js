const router = require("express").Router()
const apiController = require('../../controllers/apiController')

router.route("/:commonName").get(apiController.findPlant)

module.exports = router;