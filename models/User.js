const mongoose = require("mongoose");

var ObjectId = require('mongodb').ObjectID;

const PlaceSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique:true},
        password: {type: String, requred: true},
        //login: {type: String, requred: true, unique: true},
        avatar: {type: String},
        placeToVisit: [{type: ObjectId, ref:"Place"}],
        placeVisited: [{type: ObjectId, ref:"Place"}]
    }
);

module.exports = mongoose.models.Place || mongoose.model('Place', PlaceSchema);


