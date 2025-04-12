// This must be a factory function!
module.exports = (repository) => {
    return {
      create: (data) => repository.create(data),
      // add other CRUD operations if needed
    };
  };
  