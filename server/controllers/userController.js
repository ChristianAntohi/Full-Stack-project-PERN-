const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/authMiddleware')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
  return jwt.sign(
    {id, email, role}, 
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
    )
}
class UserController {
    async registration(req, res) {
      const {email, password, role} = req.body
      if(!email || !password) {
        return next(ApiError.badRequest('incorrect email or password'))
      }
      const candidate = await User.findOne({where: {email}})
      if(candidate) {
        return next(ApiError.badRequest('User with this email already exists'))
      }
      const hashPassword = await bcrypt.hash(password, 10)
      const user =  await User.create({email, role, password: hashPassword})
      const basket = await Basket.create({userId: user.id})
      const token = generateJWT(user.id, email, user.role)
        return res.json({token, user, basket})

    }
    
    
    async login(req, res) {
      const {email, password} = req.body
      const user = await User.findOne({where: {email}})
      if (!user) {
        return next(ApiError.internalError('User not found in database'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password)
      if(!comparePassword) {
        return next(ApiError.badRequest('Incorrect password'))
      }
      const token = generateJWT(user.id, user.email, user.role)
      return res.json(token)
    }

    async check(req, res, next) {
      const token = generateJWT(user.id, user.email, user.role)
      return res.json(token)
    }
}

module.exports = new UserController();