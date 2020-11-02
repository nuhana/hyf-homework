const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  response.json(reservations);
});
module.exports = router;
