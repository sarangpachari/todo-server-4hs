const express = require("express");
const jwtMiddleware = require('../../presentation/middlewares/authMiddleware');
module.exports = (mainController) => {
  const router = express.Router();


  router.route("/register").post(mainController.create);
  router.route("/").post(mainController.login);
  router.route('/remove/:id').delete(jwtMiddleware,mainController.removeUser);
  return router;
};
