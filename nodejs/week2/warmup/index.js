const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('nodejs week2 homework'));

app.get('/numbers/add', (req, res) => {

  const number1 = parseInt(req.query.first);
  const number2 = parseInt(req.query.second);
  if (req.query.first && req.query.second) {
    if (!isNaN(number1) && !isNaN(number2)) {
      const sum = number1 + number2;
      res.send(`Sum of ${number1} and ${number2} is ${sum}`);
    } else {
      res.send(`Please write numbers on the query`);
    }
  } else {
    res.send(
      `Please write a query in this format numbers/add?first=11&second=12`
    );
  }
});
app.get('/numbers/multiply/:first/:second', (req, res) => {
  const number1 = parseInt(req.params.first);
  const number2 = parseInt(req.params.second);
  if (req.params.first && req.params.second) {
    if (!isNaN(number1) && !isNaN(number2)) {
      const multiply = number1 * number2;
      res.send(`Multiply of ${number1} to ${number2} is ${multiply} `);
    } else {
      res.send(`Please write numbers on the query`);
    }
  } else {
    res.send(`Please write a query in this format /numbers/multiply/11/12`);
  }
});
app.get('/numbers/multiply/:first', (req, res) => {
  res.send(`Please write parameters in this format /numbers/multiply/11/12`);
});
app.get('/numbers/multiply/', (req, res) => {
  res.send(`parameters should add in this format /numbers/multiply/11/12`);
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

///  help in creating a function

// function returnValidation(num1,num2,valid1,valid2,f,g){
//   if (num1 && num2) {
//     const valNum2=parseInt(num2)
//     const valNum1=parseInt(num1)
//     if (!isNaN(valNum2) && !isNaN(valNum1)){
//       valid1= valNum1
//       valid2= valNum2
//     }
//     else{
//      g='Please write onlu numbers for the query'
//     }
//   }

// }