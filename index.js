
const express =  require("express");
const badyParser = require("body-parser");
const app = express();
const port = 3000 ;
let users = [];
app.use(badyParser.json());
app.post("/register",(req , res)=>{
const {firstName  , lastName }=req.body;
users.push({firstName,lastName});
res.status(200).json({
    message:"register successfully",
    date : users
})

})



app.listen(port , (req , res )=>{

    

})