const express = require('express');
const jwtMiddleware = require('../../presentation/middlewares/authMiddleware');
module.exports = (mainController) => {
    const router = express.Router();

    router
        .route('/')
        .post(jwtMiddleware,mainController.create);
        router
        .route('/:id')
        .get(jwtMiddleware,mainController.getTodoByCreatorId);
        router
        .route('/favourite/:id')
        .get(jwtMiddleware,mainController.getFovouriteTodo);
        router
        .route('/ongoing/:id')
        .get(jwtMiddleware,mainController.getOngoingTodo);
        router
        .route('/completed/:id')
        .get(jwtMiddleware,mainController.getCompletedTodo);
        router
        .route('/:id/searchTodo/search')
        .get(jwtMiddleware,mainController.getSerachedTodo);
        router
        .route('/update/:id')
        .put(jwtMiddleware,mainController.updateTodo);
        router
        .route('/updateFavourite/:id')
        .put(jwtMiddleware,mainController.updateFavourite);
        router
        .route('/delete/:id')
        .delete(jwtMiddleware,mainController.delete);
    return router
}