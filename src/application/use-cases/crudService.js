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

        getById: async (req, res) => {
            const { id } = req.params;
            return await repository.getById(id);
        },
        getFovouriteTodo: async (req, res) => {
            const { id } = req.params;
            return await repository.getFovouriteTodo(id);
        },
        getOngoingTodo: async (req, res) => {
            const { id } = req.params;
            return await repository.getOngoingTodo(id);
        }
    };
};
