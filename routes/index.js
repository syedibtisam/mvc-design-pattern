/**
 * @description : Base route of user profile model
 */

const router = require("express").Router();
const user = require("./userProfile/index");
const routesErrorHandler = require("./errorHandler");
const handleResponse = require("../utils/response/index");

router.use("/user", user);
router.use(routesErrorHandler);
router.use(handleResponse)

module.exports = router;