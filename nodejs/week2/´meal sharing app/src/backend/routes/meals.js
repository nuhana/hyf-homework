const express = require("express");
const router = express.Router();
let meals = require("../data/meals.json");

router.get("/:id", async (request, response) => {
  const found = meals.some(meals => meals.id === parseInt(request.params.id));
  if (found) {
    response.json(
      meals.filter(meals => meals.id === parseInt(request.params.id))
    );
  } else {
    response.status(400).json("no meals for this id");
  }
});
router.get("/", async (request, response) => {
  if (request.query.title) {
    const found = meals.some(meal => meal.title.includes(request.query.title));
    if (found) {
      response.send(
        meals.filter(meal => meal.title.includes(request.query.title))
      );
    } else {
      response.status(400).json("no meals with this title");
    }
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
