const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, Authorization denied !" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token !" });
    }
};

module.exports = jwtMiddleware;