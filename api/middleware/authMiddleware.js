import jwt from 'jsonwebtoken';

const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey)
}

const authenticateMethod  = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "User is not authenticated",
          });
    }
    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token, 'JWT_SECRET')
    req.user = payload
    next()
}

export default authenticateMethod