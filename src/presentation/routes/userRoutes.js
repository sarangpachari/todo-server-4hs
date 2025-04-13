const express = require('express');
module.exports = (mainController) => {
    const router = express.Router();

    router
        .route('/')
        .post(mainController.create),
        router
            .route('/login')
            .get(mainController.login)


    return router
}