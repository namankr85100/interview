var mongoose = require("mongoose");

var Shoe = new mongoose.Schema({

    Name:{type:String},
    Price:{type:Number},
    Quantity:{type:String},
    Material:{type:String},


});

module.exports = mongoose.model("shoe", Shoe); 





    