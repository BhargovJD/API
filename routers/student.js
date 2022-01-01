const express = require("express");
const router = new express.Router();
const Studnet  = require("../models/students");

const app = express();
app.use(express.json());


// POST : CREATING USER
router.post("/student", async(req,res)=>{
    try{
        const add = new Studnet(req.body)
        console.log(req.body);
        const inserted = await add.save();
        res.status(201).send(inserted);
    }
    catch(e){
        res.status(400).send(e);
    }
});

// GET : INFORMATION FROM DB
router.get("/student", async(req,res)=>{
    try{
        const getStudent =await Studnet.find({}).sort({"height":1});
        res.send(getStudent);
    }
    catch(e){
        res.status(400).send(e);
    }
});

// GET : PERTICULAR DOC
router.get("/student/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getStudent =await Studnet.findById(_id);
        res.send(getStudent);
    }
    catch(e){
        res.status(400).send(e);
    }
});


// PATCH : UPDATE DOC
router.patch("/student/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getStudent =await Studnet.findByIdAndUpdate(_id,req.body,{
            new:true,
        });
        res.send(getStudent);
    }
    catch(e){
        res.status(500).send(e);
    }
});

// DELETE : DELETE DOC
router.delete("/student/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const getStudent =await Studnet.findByIdAndDelete(_id);
        res.send(getStudent);
    }
    catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;