const mongoose = require('mongoose')

const connectDb = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✅ MongoDB connected successfully')
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1) // Dừng app nếu không kết nối được
  }
}

module.exports = connectDb
