const mongoose = require('mongoose')

const db = process.env.DATABASE

mongoose.connect(db,{
//for warning ozhivakkal
    useUnifiedTopology : true,
    useNewUrlParser : true
}).then(()=>{
    console.log('Database Connected Successfully');
}).catch((err)=>{
    console.log(err);
})