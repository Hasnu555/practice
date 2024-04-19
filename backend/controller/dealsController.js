const Deal = require('../models/deal');
const Dish = require('../models/dish');

module.exports.createDeal = async (req, res) => {
    try {
        const dishNames = req.body.dishes; // Expecting an array of dish names
        const dishes = await Dish.find({ name: { $in: dishNames } });

        if (dishes.length !== dishNames.length) {
            return res.status(404).json({ message: 'One or more dishes could not be found' });
        }

        const totalCalories = dishes.reduce((acc, dish) => acc + dish.calories, 0);

        const newDeal = new Deal({
            dishNames: dishNames,
            totalCalories: totalCalories
        });

        const savedDeal = await newDeal.save();
        res.status(201).json(savedDeal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.getDeals = async (req, res) => {
    try {
        const deals = await Deal.find().populate('dishes');
        res.status(200).json(deals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
