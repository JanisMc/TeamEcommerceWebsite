const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
// const session = require ('express-session')
// const MongoStore = require ('connect-mongo')
const cors = require ('cors')

// const mainRouter = require('./routes/mainRouter')
const productModel = require('./models/productModel')

const app = express()

mongoose.connect('mongodb+srv://Janis:Password123abc@cluster0.qtmtc.mongodb.net/Ecommerce?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

// app.use(session({
//     store: MongoStore.create({mongoUrl: 'mongodb+srv://Janis:Password123abc@cluster0.qtmtc.mongodb.net/Ecommerce?retryWrites=true&w=majority'}),
//     secret: 'keyboardcat',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: false,
//         maxAge: 1000 * 60 * 60 *2,
//         sameSite: true
//     }
// }))

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// app.use('/', mainRouter)

app.get('/product/all', async (req, res) => {
    let products = await productModel.find({})

    // if (products.length == 0) {
    //     res.send({
    //         success: false,
    //         message: 'No animals found in database'
    //     })
    //     return
    // }

    // products = product.map(product => product.toObject())

    res.send({
        success: true,
        message: `${products.length} products found`,
        data: products
    })

})

app.post('/product/create', (req, res) => {
    const {name, type, quantity, cost} = req.body

    const product = new productModel({
        name,
        type,
        quantity,
        cost
    })

    product.save()
    console.log(product)

    res.send({
        success: true,
        message: 'New product created'
    })
})

app.listen(3001)