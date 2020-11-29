const router = require("express").Router()
const apiController = require('../../controllers/apiController')

router.route("/search").get(apiController.findPlant)

module.exports = router;