const mongoose = require("mongoose")

const db = async(req, res) => {
    try {
        await mongoose.connect("mongodb+srv://guthulahemasri410:Hemasri1709@cluster0.tfekj.mongodb.net/Backend")
        console.log("Mongo connected")
    } catch(error) {
        console.log(error.message)
    }
}

module.exports = db