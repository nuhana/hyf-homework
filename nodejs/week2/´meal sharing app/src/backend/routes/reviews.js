const express = require("express");
const router = express.Router();
let reviews = require("../data/reviews.json");

// all reviews
router.get("/", async (request, response) => {
  response.json(reviews);
});
//review with the corresponding id
router.get("/:id", async (request, response) => {
  response.json(
    reviews.filter(review => review.id === parseInt(request.params.id))
  );
});
module.exports = router;
