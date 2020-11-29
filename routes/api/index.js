const router = require("express").Router();
const plantRoutes = require("./plantapi");

router.use("/search", plantRoutes);

module.exports = router;