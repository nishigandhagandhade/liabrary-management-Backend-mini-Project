const mongoose = require('mongoose')
const express = require('express')
const app = express();
const router = require('./routes/book-router')
const cors = require('cors')


// middleware 
app.use((express.json()))
app.use(cors())
app.use("/books",router)




mongoose.connect('mongodb+srv://nishigandhagandhade:nilam@cluster0.ewkh7ik.mongodb.net/newsystem?retryWrites=true&w=majority')
.then(()=>{

    console.log('connected')

})
.then(()=>{

    app.listen(5000,()=>{

        console.log(`listening on http://localhost:5000`)
    })

})
.catch((e)=>{

    console.log(`error is : ${e}`)
})