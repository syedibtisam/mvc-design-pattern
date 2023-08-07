/**
 * @description : User Profile basci CRUD operations
 */
const userOperations = require("../../controllers/UserProfile")
const router = require("express").Router();

router.post("/", userOperations.createProfile);
router.get("/profile/:userId", userOperations.getProfile);
router.put("/update/:userId", userOperations.updateProfile);
router.delete("/delete/:userId", userOperations.deleteProfile);

module.exports = router;