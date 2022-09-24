
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

});

app.post("/login",(req , res)=>{
    const {firstName  , lastName }=req.body;
    if (users.includes({firstName  , lastName }))
    {res.status(200).json({
        message:"login successfully",
        date : usersLogin
    });}
    else
    {res.status(400).json({
        message:"email and password are not correct ",
        date : usersLogin
    });
}
    })
    



app.listen(port , (req , res )=>{

    

})