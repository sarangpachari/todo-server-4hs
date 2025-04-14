const express = require('express');
module.exports = (mainController) => {
    const router = express.Router();

    router
        .route('/')
        .post(mainController.create);
        router
        .route('/:id')
        .get(mainController.getTodoByCreatorId);
        router
        .route('/favourite/:id')
        .get(mainController.getFovouriteTodo);
        router
        .route('/ongoing/:id')
        .get(mainController.getOngoingTodo);
        
    return router
}