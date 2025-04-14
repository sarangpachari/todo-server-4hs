const express = require("express");
module.exports = (mainController) => {
  const router = express.Router();

  router.route("/register").post(mainController.create);
  router.route("/").post(mainController.login);

  return router;
};
