// presentation/controllers/mainController.js

const crudServiceFactory = require('../../application/use-cases/crudService');
const userHooks = require('../../application/use-cases/userHooks');

const userRepo = require('../../infrastructure/database/repositories/UserRepositoryImpl');
const todoRepo = require('../../infrastructure/database/repositories/TodoRepositoryImpl');

module.exports = () => ({
    create: async (req, res) => {
        try {
            const { data, entity } = req.body;
            let repoFactory;
            let options = {};

            if (entity === 'user') {
                repoFactory = userRepo;
                options.beforeCreate = userHooks.beforeCreate;
                options.afterCreate = userHooks.afterCreate;
            } else if (entity === 'todo') {
                repoFactory = todoRepo;
            } else {
                return res.status(400).json({ error: 'Invalid entity type' });
            }
            const repository = repoFactory();
            const crudService = crudServiceFactory(repository, options);

            const result = await crudService.create(data);
            return res.status(201).json(result);

        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
    login: async (req, res) => {
        try {
            const repo = userRepo();
            const crudService = crudServiceFactory(repo, {
                loginHook: userHooks.login
            });

            const result = await crudService.login(req.body);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
    getTodoByCreatorId: async (req, res) => {
        try {
            const { id } = req.params;
            const crudService = crudServiceFactory(todoRepo());
            const result = await crudService.getById(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getFovouriteTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const crudService = crudServiceFactory(todoRepo());
            const result = await crudService.getFovouriteTodo(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getOngoingTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const crudService = crudServiceFactory(todoRepo());
            const result = await crudService.getOngoingTodo(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    getCompletedTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const crudService = crudServiceFactory(todoRepo());
            const result = await crudService.getCompletedTodo(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    updateTodo: async (req, res) => {
        try {
            const { id } = req.params;
            const {data} = req.body;
            const crudService = crudServiceFactory(todoRepo());
            const result = await crudService.update(id,data);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    updateFavourite: async (req, res) => {
        try {
            const { id } = req.params;
            const {data} = req.body;
            const crudService = crudServiceFactory(todoRepo());
            const result = await crudService.updateFavourite(id,data);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const crudService = crudServiceFactory(todoRepo());
            const result = await crudService.delete(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    removeUser: async (req, res) => {
        try {
            const { id } = req.params;
            const crudService = crudServiceFactory(userRepo());
            const result = await crudService.delete(id);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
});
