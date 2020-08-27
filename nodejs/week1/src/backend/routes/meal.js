const express = require("express");
const router = express.Router();
let meals = require("../data/meals.json");
router.get("/", async (request, response) => {
  const random = Math.floor(Math.random() * meals.length) + 0;
  response.json(meals[random]);
});
module.exports = router;
