const createUser = ({
    id,
    fname,
    mname = null,
    lname,
    email,
    password,
    profileIcon = null,
    createdAt = new Date(),
    updatedAt = new Date(),
}) => {
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    if (!email || !isValidEmail(email)) {
        throw new Error('Invalid email format');
    }
    return {
        id,
        fname,
        mname,
        lname,
        email,
        password,
        profileIcon,
        createdAt,
        updatedAt

    };
};

module.exports = createUser;
