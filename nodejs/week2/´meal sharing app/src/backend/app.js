const express = require("express");
const app = express();

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

//
const meals = require("./routes/meals.js");
app.use("/meals", meals);
//
const cheap_meal_router = require("./routes/cheap-meals.js");
app.use("/cheap-meals", cheap_meal_router);
//
const large_meals_router = require("./routes/large-meals.js");
app.use("/large-meals", large_meals_router);
//
const mealRouter = require("./routes/meal.js");
app.use("/meal", mealRouter);
//
const reservationsRouter = require("./routes/reservations.js");
app.use("/reservations", reservationsRouter);
//
const reservationRouter = require("./routes/reservation.js");
app.use("/reservation", reservationRouter);
//
const reviewsRouter = require("./routes/reviews.js");
app.use("/reviews", reviewsRouter);

module.exports = app;
