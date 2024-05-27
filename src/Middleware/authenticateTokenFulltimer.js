const jwt = require('jsonwebtoken');
const jwtPassword = 'qwe987gfdfull'; 

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ message: 'No esta autorizado' });
    }

    jwt.verify(token, jwtPassword, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token invalido o el token ya ha expirado' });
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;

