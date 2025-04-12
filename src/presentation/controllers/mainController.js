const todoRepo = require('../../infrastructure/database/repositories/TodoRepositoryImpl')
const userRepo = require('../../infrastructure/database/repositories/UserRepositoryImpl')
module.exports = (crudService) => ({
    create: async (req, res) => {
      try {
        const { data, entity } = req.body;

        let TodoRepo;
        if (entity === "user") {
            TodoRepo = new userRepo();
        } else {
            TodoRepo = new todoRepo();
        }
        const crudUseCase = new crudService(repository);
        const result = await crudUseCase.create(data); 
         res.status(201).json(result);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  });