const express = require("express");
const app = express();

app.get("/numbers/add", async (request, response) => {
  let result = Number(request.query.first) + Number(request.query.second);
  response.send(`the result is ${result}`);
});

app.get("/numbers/multiply/:first/:second", async (request, response) => {
  let result = Number(request.params.first) * Number(request.params.second);
  response.send(`the result is ${result}`);
});

app.listen(3000, () => {
  console.log(` listening on port 3000!`);
});
