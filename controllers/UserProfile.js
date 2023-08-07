const userProfile = require("../services/userProfile");
const asyncHandler = require('express-async-handler');
const { resultsValidator, validator } = require("../utils/validations/bodyValidators");
const userModel = require("../models/UserProfile/User")

/**
 * @description : Create a new profile
 * @param {obj} req.body : { username, fullname, password }
 * @returns {obj} : Success msg response
 */
const createProfile = [validator(["username", "fullname", "password"]), asyncHandler(async (req, res, next) => {
  // Validation Errors
  const errors = resultsValidator(req)
  if (errors.length > 0) {
    res.message = false;
    res.errors = errors;
    return next();
  }

  // Saving the data
  let data = await userProfile.createProfile(userModel, req.body);
  res.message = true;
  res.data = [data];
  next();
})];

/**
 * @description : Get a single profile data
 * @param {obj} req.params : {userId}
 * @returns {obj} : profile data
 */
const getProfile = [asyncHandler(async (req, res, next) => {
  // Validation Errors
  const { userId } = req.params;
  if (!userId) {
    res.message = false;
    res.errors = [{ msg: "userId is required" }];
    return next();
  }
  // updating the document
  let data = await userProfile.getProfile(userModel, { userId });
  res.message = true;
  res.data = [data];
  next();
})]

/**
 * @description : update user profile
 * @param {obj} req.body : {updateObject}
 * @param {obj} req.params : {userId}
 * @returns {obj} : updated Profile
 */
const updateProfile = asyncHandler(async (req, res, next) => {
  // Validation Errors
  const { userId } = req.params;
  if (!userId) {
    res.message = false;
    res.errors = [{ msg: "userId is required" }];
    return next();
  }
  //updating the document
  let data = await userProfile.updateProfile(userModel, { userId }, req.body);
  res.message = true;
  res.data = [data];
  next();
})

/**
 * @description : Delete a user profile
 * @param {obj} req.param : {userId}
 * @returns {obj} : deleted Profile
 */
const deleteProfile = asyncHandler(async (req, res, next) => {
  // Validation Errors
  const { userId } = req.params;
  if (!userId) {
    res.message = false;
    res.errors = [{ msg: "userId is required" }];
    return next();
  }

  let data = await userProfile.deleteProfile(userModel, { userId });
  res.message = true;
  res.data = [data];
  next();
})
module.exports = {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile
}