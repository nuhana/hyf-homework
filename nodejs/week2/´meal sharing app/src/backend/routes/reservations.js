const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  response.json(reservations);
});

router.get("/:id", async (request, response) => {
  response.json(
    reservations.filter(
      reservation => reservation.id === parseInt(request.params.id)
    )
  );
});

module.exports = router;
