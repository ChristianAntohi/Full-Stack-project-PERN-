const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function(req, res, next) {
        if (req.method ==="OPTIONS"){
            next()
        }
        try {
            const token = req.headers.authorization.split('') 
            if (!token) {
                return res.status(401).json({message: "not authorized"})
            } 
            const decodedJWT = jwt.verify(token, process.env.SECRET_KEY)
            if(decodedJWT.role !== role) {
                return res.status(403).json({message: "not authorized"})
            }
            req.user = decodedJWT
            next()
        } catch (e) {
            res.status(401).json({message: "not authorized"})
        }
    }
}