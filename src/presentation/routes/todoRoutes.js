const express = require('express');
module.exports = (mainController) => {
    const router = express.Router();

    router
        .route('/')
        .post(mainController.create)

    return router
}