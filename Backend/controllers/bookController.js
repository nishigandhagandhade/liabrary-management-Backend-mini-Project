const Books = require('../models/Books')

// add book create book 
const addBook = async (req, res, next) => {

    let book;

    try {

        book = new Books(req.body)
        await book.save()

    } catch (e) {

        console.log(e)
    }

    if (!book) {

        return res.status(500).json({ messege: "can't crate" })
    }
    else {

        res.status(201).json(book)
    }
}

// get book 
const getbook = async (req, res, next) => {
    let books

    try {

        books = await Books.find()

    }
    catch (e) {

        console.log(`error is ${e}`)
    }

    if (!books) {

        return res.status(404).json({ messege: "book not found" })
    }
    else {

        return res.status(200).json(books)
    }
}

// getBookById 
const getBookById = async (req, res, next) => {

    const _id = req.params.id;
    let book

    try {

        book = await Books.findById({ _id })

    }
    catch (e) {

        console.log(e)
    }

    if (!book) {

        res.status(404).json({ messege: 'no book found' })
    }
    else {

        res.status(200).json(book)
    }
}

// upadatebook 
const updateBook = async (req, res, next) => {

    const _id = req.params.id;

    const { bname, author, description, price, available, image } = req.body
    let book;


    try {


        book = await Books.findByIdAndUpdate(_id, {

            bname,
            author,
            description,
            price,
            available,
            image
        })
        book = await book.save()

    }
    catch (e) {

        console.log(e)

    }

    if (!book) {

        res.status(501).json({ messege: 'book not updated' })
    }
    else {

        res.status(201).json(book)
    }

}

// deletebook 
const deleteBook = async (req, res, next) => {

    const _id = req.params.id;

    let book;

    try {


        book = await Books.findByIdAndDelete(_id)




    }
    catch (e) {

        console.log(e)
    }

    if (!book) {

        res.status(404).json({messege:'book not found'})
    }
    else{

        res.status(201).json(book)
    }
}
exports.addBook = addBook;
exports.getbook = getbook;
exports.getBookById = getBookById;
exports.updateBook = updateBook;
exports.deleteBook=deleteBook;

