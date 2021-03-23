const {Router} = require ('express')
const router = Router()

const controller = require ('../controllers/mainController')

router.get('/', controller.getIndex)

module.exports = router


// const { Router } = require("express");

// router.get('./')
// router.post('./')

// router.get('./basket')
// router.post('./basket')

// router.get('./checkout')
// router.post('./checkout')

// router.get('./searchResults')
// router.post('./searchResults')