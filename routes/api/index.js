const router = require("express").Router();
const bookRoutes = require("./plants");

// Book routes
router.use("/plants", plantRoutes);

module.exports = router;
