const reviews = require('./data/reviews');
const meals = require('./data/meals'); //{ ...obj, reviews: [] }

//  add reviews to all meals and empty to what meal without reviews
const reviewsInMeals = meals.map(meal => ({
  ...meal,
  reviews: findReviewsForMeals(meal.id),
}));

function findReviewsForMeals(mealID) {
  return reviews.filter(review => review.mealId === mealID);
}
// meals with written reviews 
const fullReviewedMeal = 
  reviewsInMeals.filter(meal => meal.reviews!='');

const findLargeMeal = fullReviewedMeal.filter(
  meal => meal.maxNumberOfGuests > 4);

const cheapMeals = fullReviewedMeal.filter(
  meal => meal.price < 120 );

module.exports = {
  reviewsInMeals: reviewsInMeals,
  findLargeMeal: findLargeMeal,
  fullReviewedMeal :  fullReviewedMeal,
  cheapMeals  : cheapMeals,
};
