const express = require('express')
const router = express.Router();
const Books = require('../models/Books');
const bookController = require('../controllers/bookController') 

router.post('/', bookController.addBook)

router.get('/', bookController.getbook)

router.get('/:id',bookController.getBookById)

router.put('/:id',bookController.updateBook)

router.delete('/:id',bookController.deleteBook)



module.exports = router