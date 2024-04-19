// routes/dishRoutes.js
const express = require('express');

const {Router } = require('express');

const router = Router();

const { addDish, getDishes, updateDish, deleteDish } = require('../controller/dishesController');

router.post('/', addDish);
router.get('/', getDishes);
router.put('/:id', updateDish);
router.delete('/:id', deleteDish);

module.exports = router;