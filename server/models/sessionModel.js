const {Schema, model} = require ('mongoose')

let session = new Schema({})

module.exports = model('sessions', session)