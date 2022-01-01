const express = require("express");
require("./db/conn");
const router = require("./routers/student");
// const Studnet  = require("./models/students");

const app = express();
const port  = process.env.PORT||3000;

app.use(express.json());

app.use(router);

// // POST : CREATING USER
// app.post("/student", async(req,res)=>{
//     try{
//         const add = new Studnet(req.body)
//         console.log(req.body);
//         const inserted = await add.save();
//         res.status(201).send(inserted);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
// });

// // GET : INFORMATION FROM DB
// app.get("/student", async(req,res)=>{
//     try{
//         const getStudent =await Studnet.find({}).sort({"height":1});
//         res.send(getStudent);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
// });

// // GET : PERTICULAR DOC
// app.get("/student/:id", async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const getStudent =await Studnet.findById(_id);
//         res.send(getStudent);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
// });


// // PATCH : UPDATE DOC
// app.patch("/student/:id", async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const getStudent =await Studnet.findByIdAndUpdate(_id,req.body,{
//             new:true,
//         });
//         res.send(getStudent);
//     }
//     catch(e){
//         res.status(500).send(e);
//     }
// });

// // DELETE : DELETE DOC
// app.delete("/student/:id", async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const getStudent =await Studnet.findByIdAndDelete(_id);
//         res.send(getStudent);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }
// });





app.get("/", async(req,res)=>{
    res.send("Hello from the Bhargov");
})

app.listen(port, ()=>{
    console.log(`Server is live at port${port}`)
})