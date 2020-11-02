const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//////
app.get("/calculator/add", async (request, response) => {
  let result = Number(request.query.first) + Number(request.query.second);
  response.send(`the result is ${result}`);
});
app.get("/calculator/multiply", async (request, response) => {
  let result = Number(request.query.first) * Number(request.query.second);
  response.send(`the result is ${result}`);
});
app.get("/calculator/divide", async (request, response) => {
  let result = Number(request.query.first) / Number(request.query.second);
  response.send(`the result is ${result}`);
});
app.get("/calculator/subtract", async (request, response) => {
  let result = Number(request.query.first) - Number(request.query.second);
  response.send(`the result is ${result}`);
});
/////////////
app.post("/calculator/add", async (request, response) => {
  let result =
    Number(request.body.first) +
    Number(request.body.second) +
    Number(request.body.third);
  response.send(`the result is ${result}`);
});
app.post("/calculator/multiply", async (request, response) => {
  let result = Number(request.body.first) * Number(request.body.second);
  response.send(`the result is ${result}`);
});
app.post("/calculator/divide", async (request, response) => {
  let result = Number(request.body.first) / Number(request.body.second);
  response.send(`the result is ${result}`);
});
app.post("/calculator/subtract", async (request, response) => {
  let result = Number(request.body.first) - Number(request.body.second);
  response.send(`the result is ${result}`);
});

app.listen(3000, () => {
  console.log("it works !!!!!");
});
