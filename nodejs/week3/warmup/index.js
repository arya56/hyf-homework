const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => res.send('nodejs week3 homework'));

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

//          Get endpoints
app.get('/calculator/add', (req, res) => {
  var sum = 0;
  for (const key in req.query) {
    sum += parseInt(req.query[key]);
  }
  res.json(sum);
});

app.get('/calculator/multiply', (req, res) => {
  var multiply = 1;
  for (const key in req.query) {
    multiply *= parseInt(req.query[key]);
  }
  res.json(multiply);
});

app.get('/calculator/division', (req, res) => {
  let counter = 0;
  let division = 1;
  for (const key in req.query) {
    if (counter === 0) {
      division = parseInt(req.query[key]);
      counter++;
    } else {
      division /= parseInt(req.query[key]);
    }
  }
  res.json(division);
});

app.get('/calculator/subtraction', (req, res) => {
  let counter = 0;
  let subtract = 1;
  for (const key in req.query) {
    if (counter === 0) {
      subtract = parseInt(req.query[key]);
      counter++;
    } else {
      subtract -= parseInt(req.query[key]);
    }
  }
  res.json(subtract);
});

//  post Endpoints
app.post('/calculator/add', (req, res) => {
    var sum = 0;
    console.log(req.body);
    for (const key in req.body) {
      sum += parseInt(req.body[key]);
    }
    res.json(sum);
  });

  app.post('/calculator/multiply', (req, res) => {
    var multiply = 1;
    for (const key in req.body) {
      multiply *= parseInt(req.body[key]);
    }
    res.json(multiply);
  });

  app.post('/calculator/division', (req, res) => {
    let counter = 0;
    let division = 1;
    for (const key in req.body) {
      if (counter === 0) {
        division = parseInt(req.body[key]);
        counter++;
      } else {
        division /= parseInt(req.body[key]);
      }
    }
    res.json(division);
  });


app.post('/calculator/subtraction', (req, res) => {
    let counter = 0;
    let subtract = 1;
    for (const key in req.body) {
      if (counter === 0) {
        subtract = parseInt(req.body[key]);
        counter++;
      } else {
        subtract -= parseInt(req.body[key]);
      }
    }
    res.json(subtract);
  });