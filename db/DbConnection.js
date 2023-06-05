const mongoose = require('mongoose')
const env = require('dotenv').config()

const dbconnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db is connected')
    } catch (error) {
        console.log('db is not connected', error)
        
    }
}
console.log(process.env.PORT , 'aa')

module.exports = dbconnect