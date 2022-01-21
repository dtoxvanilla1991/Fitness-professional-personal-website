const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const packagesSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    rate: {
        type: String,
        required: true,
    },

    coach: {
        type: String,
        required: true,
        //ref: "User"
    },

    difficulty: {
        type: String,
        required: true,
    },

    thumbnailUrl: {
        type: String,
        required: true,
    },

});

module.exports = new Model('Packages', packagesSchema);