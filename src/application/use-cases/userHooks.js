const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUser = require('../../domain/entities/User'); // adjust path to your entity

module.exports = {
    beforeCreate: async (data, userRepository) => {
        const { email, password } = data;

        const existingUser = await userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const userEntity = createUser(data);

        const hashedPassword = await bcrypt.hash(password, 10);
        return {
            ...userEntity,
            password: hashedPassword,
        };
    },

    afterCreate: async (user) => {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
        return token;
    },

    login: async (data, userRepository) => {
        const { email, password } = data;
        console.log(email, password, userRepository);

        const user = await userRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
        return { ...user, token };
    }
};


