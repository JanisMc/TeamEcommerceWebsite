// const {Schema, model} = require ('mongoose') 

// const user = new Schema({
//     title: {type: String, required: false},
//     firstName: {type: String, required: true},
//     surname: {type: String, required: true},
//     email: {type: String, required: true},
//     password: {type: String, required: true},
//     phoneNumber: {type: String, required: false},
//     deliveryAddressHouseNumber: {type: String, required: true},
//     deliveryAddressLineOne: {type: String, required: true},
//     deliveryAddressLineTwo: {type: String, required: false},
//     deliveryAddressTown: {type: String, required: true},
//     deliveryAddressCounty: {type: String, required: true},
//     deliveryAddressPostcode: {type: String, required: true},
//     billingAddressHouseNumber: {type: String, required: true},
//     billingAddressLineOne: {type: String, required: true},
//     billingAddressLineTwo: {type: String, required: false},
//     billingAddressTown: {type: String, required: true},
//     billingAddressCounty: {type: String, required: true},
//     billingAddressPostcode: {type: String, required: true},
// }, {
//     toObject: {
//         virtuals: true
//     }
// })


// // button - if delivery address == billing address autofill billing else billing required



// module.exports = model('users', user)