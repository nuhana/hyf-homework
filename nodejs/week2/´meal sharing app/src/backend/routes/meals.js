const express = require("express");
const router = express.Router();
let meals = require("../data/meals.json");

router.get("/:id", async (request, response) => {
  response.json(
    meals.filter(meals => meals.id === parseInt(request.params.id))
  );
});
router.get("/", async (request, response) => {
  if (request.query.title) {
    response.send(
      meals.filter(meal => meal.title.includes(request.query.title))
    );
  }
  if (request.query.maxPrice) {
    meals.filter(meal => meal.price <= request.query.maxPrice);
  }
  if (request.query.createdAfter) {
    response.send(
      meals.filter(meal => meal.createdAt > request.query.createdAfter)
    );
  }
  if (request.query.limit) {
    let limitedMeals = [];
    for (let i = 0; i < request.query.limit; i++) {
      limitedMeals.push(meals[i]);
    }
    response.send(limitedMeals);
  }
  response.json(meals);
});

module.exports = router;
