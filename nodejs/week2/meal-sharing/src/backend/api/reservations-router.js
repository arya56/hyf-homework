const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

//console.log(meals);

router.get("/", async (req, res) => {
  try {
        //  kind of insist to not have query here
   if (Object.keys(req.query).length === 0) {
    res.send(reservations);
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
        const reservedMeal = reservations.find(reservation => reservation.id === id);
        if (reservedMeal) {
          res.send(reservedMeal);
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
