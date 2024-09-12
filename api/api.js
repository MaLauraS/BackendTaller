const TaskController = require('../controllers/xxxxx');
const express = require('express');


const router = express.Router();

router.get("/all", TaskController.findAllTodoList);

router.post("/add", TaskController.addTask);


module.exports = router;