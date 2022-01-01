const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:qwertymong0@cluster0.eqcg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
    console.log("DB CONNECTED");
}).catch((e)=>{
    console.log("No DB CONNECTED");
});