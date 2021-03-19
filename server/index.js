const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const session = require ('express-session')
const MongoStore = require ('connect-mongo')
const express = require ('express')
const cors = require ('cors')

const mainRouter = require('./routes/mainRouter')

const app = express()

mongoose.connect('mongodb+srv://Janis:Password123abc@cluster0.qtmtc.mongodb.net/Ecommerce?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

app.use(session({
    store: MongoStore.create({mongoUrl: 'mongodb+srv://Janis:Password123abc@cluster0.qtmtc.mongodb.net/Ecommerce?retryWrites=true&w=majority'}),
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 *2,
        sameSite: true
    }
}))

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', mainRouter)

app.listen(3001)