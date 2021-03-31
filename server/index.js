const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const session = require ('express-session')
const MongoStore = require ('connect-mongo')
const cors = require ('cors')

// const mainRouter = require('./routes/mainRouter')
const productModel = require('./models/productModel')

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

// app.use('/', mainRouter)

app.get('/products/:type', async (req, res) => {
    let data = await productModel.find({type:req.params.type})

    res.send({
        data: data
    })
})

app.get('/product/all', async (req, res) => {
    let products = await productModel.find({})

    res.send({
        success: true,
        message: `${products.length} products found`,
        data: products
    })

})

app.post('/product/create', (req, res) => {
    const {name, type, quantity, price, description, img} = req.body

    const product = new productModel({
        name,
        type,
        quantity,
        price,
        description,
        img
    })

    product.save()

    res.send({
        success: true,
        message: 'New product created'
    })
})

app.delete('/product/delete/:id', (req, res) => {
    productModel.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            res.send({
                success: false,
                message: err
            })
        } else {
            res.send({
                success: true,
                message: 'Product was removed successfully'
            })
        }
    })
})

app.put('/product/update/:id', async (req, res) => {
    let {name, type, quantity, price, description, img} = req.body

    if (!name) {name = undefined}
    if (!type) {type = undefined}
    if (!quantity) {quantity = undefined}
    if (!price) {price = undefined}
    if (!description) {description = undefined}
    if (!img) {img = undefined}
    
    let result = await productModel.updateOne({_id: req.params.id}, {
        name, 
        type, 
        quantity, 
        price,
        description,
        img
    }, {omitUndefined: true})

    res.send({
        success: true,
        message: `${result.nModified} document changed`
    })
})

app.get('/product/individual/:id', async (req, res) => {
    let product = await productModel.findOne({_id: req.params.id})

    res.send({
        data: product
    })
})

app.listen(3001)