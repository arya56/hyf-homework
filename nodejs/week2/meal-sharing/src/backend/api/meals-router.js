const meals = require('./../data/meals.json');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    //  if the query includes maxPrice
    if (req.query.maxPrice) {
      const maxPrice = parseInt(req.query.maxPrice);
      if (!isNaN(maxPrice)) {
        const cheapMeals = meals.filter(meal => meal.price < maxPrice);

        res.send(cheapMeals);
      } else {
        res.status(400).send('Please write a number as maxPrice');
      }
    } else if (req.query.title) {
      //  if the query includes title
      const title = req.query.title;
      res.send(meals.filter(meal => meal.title.toUpperCase().includes(title.toUpperCase())));
    } else if (req.query.createdAfter) {
      //  if the query includes createdAfter
      //   to check if the format date is like 01-10-2020
      if (/^\d\d\d\d\-\d\d\-\d\d$/.test(req.query.createdAfter)) {
        const createdAfter = Date.parse(req.query.createdAfter);
        res.send(
          meals.filter(meal => Date.parse(meal.createdAt) > createdAfter)
        ); //  if createdAfter is not in a right date format
      } else {
        res.status(400).send('date not parseable');
      } //  if the query includes limit
    } else if (req.query.limit) {
      let limit = parseInt(req.query.limit);
      if (!isNaN(limit)) {
        if (limit > meals.length) {
          limit = meals.length;
        }
        res.send(meals.slice(0, limit));
      } else {
        res.status(400).send('limit is not an integer');
      } //  if the query is not added
    } else if (Object.keys(req.query).length === 0) {
      res.send(meals);  
    } else {  // if there the query is not added/valid
      res.status(400).send('Please write a valid query');
    }
  } catch (error) {
    throw error;
  }
});

router.get('/:id', async (req, res) => {
  try {
    if (req.params.id) {
      const id = parseInt(req.params.id);
      if (!isNaN(id)) {
        const mealReturn = meals.some(meal => meal.id === id);
        if (mealReturn) {
          res.send(meals.find(meal => meal.id === id));
        } else {
          res.send({});
        }
      } else {
        res.status(400).send('id is not integer');
      }
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
