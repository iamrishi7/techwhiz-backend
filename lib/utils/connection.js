import mongoose from "mongoose"

const Connect = async () => {
    try {
        mongoose.connect("mongodb+srv://dezynation:admin@cluster0.4e0ya7l.mongodb.net/techwhiz")
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}

export default Connect