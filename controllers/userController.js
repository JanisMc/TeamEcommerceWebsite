// const bcrypt = require ('bcrypt')
// const {nanoid} = require ('nanoid')
// const SessionModel = require ('../models/sessionModel')

// const UserModel = require ('../models/userModel')

// exports.createUser = (req,res) => {
//     const {title, firstName, surname, email, password, phoneNumber, address} = req.body

//     if (!userName || !password) {
//         res.render('index', {error: 'Please complete all details'})
//         return
//     }

//     const hash = bcrypt.hashSync(password, 12)

//     const user = new UserModel({
//     userName,
//     password: hash
//     })

//     user.save()

//     req.session.userID = nanoid()
//     req.session.name = userName
//     req.session.save()

//     res.render('profile', {userName:req.session.name})
// }   

// exports.logIn = async (req, res) => {
//     let user = await UserModel.getUserByName(req.body.userName)

//     if (!user) {
//         res.render('index', {err: 'User not found'})
//         return 
//     } 
//     let passwordsMatch = bcrypt.compareSync(req.body.password, user.password)
//     // console.log(req.body.password)
//     // console.log(user.password)
//     // console.log(passwordsMatch)

//     req.session.userID = nanoid()
//     req.session.name = req.body.userName
//     req.session.save()

//     if (passwordsMatch) {
//         res.redirect('profile')
//     } else {
//         res.render('index', {err: 'Incorrect Password'})
//     }
// }    

// exports.checkUserSession = async (req, res, next) => {
//     let sessions = await SessionModel.find({})

//     for (let session of sessions) {
//         session = session.toObject()
//         if (JSON.parse(session.session).userID == req.session.userID) {
//             next()
//             return
//         }
//     }
//     res.redirect('/')
// }

// exports.getProtectedProfile = (req, res) => {
//         res.render('profile', {userName:req.session.name})
// }

// exports.endSession = async (req, res) => {
//             req.session.destroy()
//     res.redirect('/')
// }