module.exports = (repository, options = {}) => {
    const { beforeCreate, afterCreate, loginHook } = options;

    return {

        create: async (data) => {
            let processedData = data;

            if (beforeCreate) {
                processedData = await beforeCreate(data, repository);
            }

            const createdEntity = await repository.create(processedData);

            if (afterCreate) {
                const token = await afterCreate(createdEntity);
                return { ...createdEntity, token };
            }

            return createdEntity;
        },

        login: async (data) => {
            if (!loginHook) throw new Error("Login hook not provided");
            return await loginHook(data, repository);
        },
        getById: async (id) => {
            return await repository.getById(id);
          },
        getFovouriteTodo: async (id) => {
            return await repository.getFovouriteTodo(id);
        },
        getOngoingTodo: async (id) => {
            return await repository.getOngoingTodo(id);
        },
        getCompletedTodo: async (id) => {
            return await repository.getCompletedTodo(id);
        },
        getSearchedTodo: async (search) => {
            return await repository.getSearchedTodo(search);
        },
        update: async (id,data) => {
            return await repository.update(id,data);
        },
        updateFavourite: async (id,data) => {
            return await repository.updateFavourite(id,data);
        },
        delete: async (id) => {
            return await repository.delete(id);
        }
    };
};
