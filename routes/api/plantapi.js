const router = require("express").Router()
const apiController = require('../../controllers/apiController')

router.route("/:commonName").get(apiController.findPlant)
router.route("/:id").get(apiController.findByID)

module.exports = router;