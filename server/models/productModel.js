const {Schema, model} = require ('mongoose')

const product = new Schema ({
    name: {type: String, required: true},
    type: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    description: {type:String, required: true},
    img: {type: String, required: true}
})

module.exports = model ('products', product)