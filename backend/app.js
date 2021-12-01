const express = require("express");
const {sequelize,user} = require("./models/user")
const app = express();
const cors =require('cors');
app.use(cors({
    origin:"*"
}));
app.use(express.json());
 app.get("/", async(req,res) =>{
     const users = await user.findAll();
     return res.json(users);
    });
    app.post('/add',async(req,res) => {
        const { Name,Email,password,} = req.body;
       try{
        const users= await users.create({Name,Email,password});
          return res.status(200).json(users);
       }catch(e){
           console.log(e)
           return res.status(500).json({"message":e});
       }
    });
    app.post('/add',(req,res)=> {
        // console.log(req.body);
         res.send("Data stored !!");
         console.log(req.body)
        //console.log(req);
    })
    
    app.listen(9000,async()=> {
                 
                     console.log("server running...");
                    try{ 
                        await sequelize.sync({force:false});
                 }catch(e){
                     console.log(e);
                 }
                });