const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const allReservations = await knex("reservations").select("*");
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});
///////
const addReservation = async ({ body }) => {
  const { name, email, mealId } = body;
  return await knex("reservations").insert({
    name: name,
    email: email,
    mealId: mealId,
  });
};
router.post("/", async (request, response) => {
  addReservation({
    body: request.body,
  })
    .then(result => response.json(result))
    .catch(error => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
///////////
const getReservatiosById = async ({ body, id }) => {
  try {
    const { name, email, mealId } = body;
    return await knex("reservations")
      .where({
        id: id,
      })
      .select("*");
  } catch (error) {
    console.log(error);
  }
};
router.get("/:id", async (req, res) => {
  getReservatiosById({
    body: req.body,
    id: req.params.id,
  })
    .then(result => res.json(result))
    .catch(error => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
//////////
const getUpdatedReservation = async ({ body, id }) => {
  const { name, email, mealId } = body;
  const meal = await knex.from("reservations").select("*").where({
    id: id,
  });
  if (meal.length === 0) {
    throw new HttpError("Bad request", `Contact not found: ID ${id}!`, 404);
  }
  const queryDto = {
    email: email,
  };
  if (Object.keys(queryDto).length !== 0) {
    return await knex("reservations")
      .where({
        id: id,
      })
      .update(queryDto);
  } else return "Nothing updated!";
};
router.put("/:id", async (req, res) => {
  getUpdatedReservation({
    body: req.body,
    id: req.params.id,
  })
    .then(result => res.json(result))
    .catch(error => {
      res.status(400).send("Bad request").end();
      console.log(error);
    });
});
//////
const deleteReservation = async ({ id }) => {
  try {
    if (!id) {
      return "something went wrong, try againnnnn";
    }
    return knex("reservations")
      .where({
        id: id,
      })
      .del();
  } catch (err) {
    console.log(err);
    return "something went wrong, try again";
  }
};
router.delete("/:id", async (req, res) => {
  deleteReservation({
    id: req.params.id,
  })
    .then(result => res.json(result))
    .catch(error => {
      res.status(400).send("Bad request").end();
      console.log(error);
    });
});
module.exports = router;
