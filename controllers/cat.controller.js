const db = require('../models')

const createCat = async (req, res) => {
  try {
    const { name, age, breed } = req.body
    const cat = await db.Cat.create({ name, age, breed }) // đã lưu
    res.status(201).json(cat)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong' })
  }
}

module.exports = { createCat }
