const User = require('../model/UserModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const registerValidator = require('../validator/registerValidator')
const loginValidator = require('../validator/loginValidator')
const { serverError, resourceError } = require('../util/error')

module.exports = {
    register(req, res) {
        let { name, email, password, confirmPassword } = req.body
        let validate = registerValidator({ name, email, password, confirmPassword })

        if (!validate.isValid) {
            return res.status(400).json(validate.error)
        } else {
            User.findOne({ email })
                .then(user => {
                    if (user) {
                        return resourceError(res, 'Email Already Exist')
                    } else {
                        bcryptjs.hash(password, 11, (err, hash) => {
                            if (err) {
                                return resourceError(res, 'Server Error Occurred')
                            }
                            let user = new User({
                                name,
                                email,
                                password: hash
                            })
                            user.save()
                                .then(user => {
                                    res.status(201).json({
                                        message: 'User Created Successfully',
                                        user
                                    })
                                })
                                .catch(error => serverError(res, error))
                        })
                    }
                })
                .catch(error => serverError(res, error))
        }
    },
    
    login(req, res) {
        let { email, password } = req.body
        let validate = loginValidator({ email: email, password: password })

        if (!validate.isValid) {
            return res.status(400).json(validate.error)
        }
        User.findOne({ email })
            .then(user => {
                if (!user) {
                    return resourceError(res, 'User Not Found')
                } else {
                    bcryptjs.compare(password, user.password, (err, result) => {
                        if (err) {
                            return serverError(res, err)
                        }
                        if (!result) {
                            return resourceError(res, 'Password Doesn\'t Match')
                        }

                        let token = jwt.sign({
                            _id: user._id,
                            name: user.name,
                            email: user.email
                        }, 'SECRET', { expiresIn: '2h' })
                        res.status(200).json({
                            message: 'Login Successful',
                            token: `Bearer ${token}`
                        })
                    })
                }
            })
            .catch(error => serverError(res, error))
    },
    allUser(req, res) {
        User.find()
            .then(users => {
                res.status(200).json(users)
            })
            .catch(error => serverError(res, error))
    }
}