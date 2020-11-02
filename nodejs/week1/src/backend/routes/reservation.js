const express = require("express");
const router = express.Router();
let reservations = require("../data/reservations.json");

router.get("/", async (request, response) => {
  const random = Math.floor(Math.random() * reservations.length) + 0;
  response.json(reservations[random]);
});
module.exports = router;
