const express = require("express");
const bodyParser = require('body-parser');





const setupAndStartServer = async()=>{
    //create express object
    const app = express();
    const PORT = 3000;
    // Middleware to parse JSON and URL-encoded request bodies
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(3000,()=>{
        console.log(`Server started at ${PORT}`)
    })
}

setupAndStartServer();
