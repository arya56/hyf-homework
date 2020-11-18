const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");


router.get("/", async (req, res) => {
  try {
    //  kind of insist to not have query here
    if (Object.keys(req.query).length === 0) {
      res.send(reviews);
    } else{
      res.status(400).send('No need for a query here');
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
        const reviewedMeal = reviews.find(review => review.id === id);
        if (reviewedMeal) {
          res.send(reviewedMeal);
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
