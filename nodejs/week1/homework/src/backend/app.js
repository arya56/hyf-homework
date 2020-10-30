const express = require('express');
const app = express();


const reservations = require('./data/reservations');

const fetch = require('./fetchData');
const fullReviewedMeal = fetch.fullReviewedMeal

app.get('/', async (request, response) => {
  response.send('Meal Sharing Web App');
});

app.get('/meals', async (request, response) => {
  response.json(fetch.reviewsInMeals); 
});

app.get('/cheap-meals', async (request, response) => {
  response.json(fetch.cheapMeals); 
});

app.get('/large-meals', async (request, response) => {
  response.json(fetch.findLargeMeal); 
});
app.get('/meal', async (request, response) => {
  response.json(fetch.fullReviewedMeal[Math.floor(Math.random() * fullReviewedMeal.length)]);
});
app.get('/reservations', async (request, response) => {
  response.json(reservations);
});
app.get('/reservation', async (request, response) => {
  response.json(reservations[Math.floor(Math.random() * reservations.length)]);
});

module.exports = app;
