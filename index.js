const express = require("express")

const app = express();
//res.send will have to write only one time for single API
app.get("/api/main",(req, res)=>{
    res.send("<h1>What Is Express?</h1><p>Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.</p>")
});
//CRUD
//CREATE  READ  UPDATE  DELETE
//POST  GET  PUT/PATCH  DELETE

app.listen(5000,() =>{
    console.log("server is running ");
})

//install express package--> npm i express
//npm install --save-dev nodemon
//add "start": "node index.js",
//    "dev": "nodemon index.js",    inside package.json file
//npm run dev -->to start live server
