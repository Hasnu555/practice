// routes/dealRoutes.js
const express = require('express');
const {Router } = require('express');

const router = Router();

const { createDeal, getDeals } = require('../controller/dealsController');

router.post('/', createDeal);
router.get('/', getDeals);

module.exports = router;