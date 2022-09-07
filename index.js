const express = require('express')
const cors = require('cors');
var fileupload = require("express-fileupload");
try {

    const app = express()
    app.use(express.json())
    app.use(fileupload());

    app.use(cors())



    const demo = require('./routes/demo')
    app.use('/demo', demo)

    var port = process.env.PORT || 8087
    app.listen(port, () => console.log('Server Started ', port))
} catch (ex) {
    console.log(ex)
}