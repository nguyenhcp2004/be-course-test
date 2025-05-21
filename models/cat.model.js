const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define schema
const catSchema = new Schema(
  {
    name: { type: String, required: [true, 'Name is required'] },
    age: { type: Number, required: [true, 'Age is required'] },
    breed: { type: String, required: [true, 'Breed is required'] }
  },
  {
    timestamps: true
  }
)

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat
