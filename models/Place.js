const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        infoShort: {type: String, required: true},
        mainPhoto: {type: String, required: true},
        region: {type: String, required: true},
        area: {type: String, required: true}
    }
);

module.exports = mongoose.models.Place || mongoose.model('Place', PlaceSchema);
