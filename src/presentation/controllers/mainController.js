const todoRepoFactory = require('../../infrastructure/database/repositories/TodoRepositoryImpl');
const userRepoFactory = require('../../infrastructure/database/repositories/UserRepositoryImpl');

module.exports = (crudService) => ({
  create: async (req, res) => {
    try {
      const { data, entity } = req.body;
console.log(data, entity);

      const repositoryFactory = entity === 'user' ? userRepoFactory : todoRepoFactory;
      const repository = repositoryFactory();
      const crudUseCase = crudService(repository); 
      const result = await crudUseCase.create(data);

      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
});
