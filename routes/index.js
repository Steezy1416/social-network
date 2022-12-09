const router = require("express").Router()
const userRoutes = require("./userRoutes")
const thougthRoutes = require("./thougthRoutes")

router.use("/api/users", userRoutes)
router.use("/api/thougths", thougthRoutes)

module.exports = router