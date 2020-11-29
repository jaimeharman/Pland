const router = require("express").Router();
const plantRoutes = require("./plantapi");

router.use("/getplant", plantRoutes);

module.exports = router;