const express = require('express');
const { getAllHostels, addHostel, getHostelById, deleteHostelById } = require('../controllers/hostel.controller');

const hostelRouter = express.Router()


hostelRouter.get('/', getAllHostels)
hostelRouter.get('/hostels/:id', getHostelById)
hostelRouter.post('/hostels/create', addHostel)
hostelRouter.delete('/hostels/:id', deleteHostelById)

module.exports = hostelRouter;