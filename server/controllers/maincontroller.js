// const bcrypt = require ('bcrypt')
// const {nanoid} = require ('nanoid')

// const SessionModel = require ('../models/sessionModel')
// const UserModel = require ('../models/userModel')

exports.getIndex = (req, res) => {
    console.log(req.session)
    res.render('index')
}