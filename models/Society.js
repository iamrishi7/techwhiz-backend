import mongoose from "mongoose";

const SocietySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },

    found: {
        type: Date,
    },

    description: {
        required: false,
        type: String
    },

    clubs: [{ name: String, description: String }],

    activities: [{ name: String, description: String, date: Date }],

    events: [{ name: String, competetions: [{ name: String, description: String }] }]

})

const Society = mongoose.models.Society || mongoose.model("Society", SocietySchema);

export default Society