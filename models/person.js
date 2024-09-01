const mongoose = require('mongoose');

const presonSchema = new mongoose.Schema({
    title: {
        type : String
    },
    detail:{
        type : String
    },
    color : {
        type : String
    },
    sex :{
        type : String
    },
    enabled : {
        type : Boolean
    }
} , { timestamps : true });

module.exports = Person = mongoose.moodel('persons',presonSchema);
