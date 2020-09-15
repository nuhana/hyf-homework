const express = require("express");
const router = express.Router();
const knex = require("../database");

const addMeal = async ({ body }) => {
  const { title, description, maxNumberOfGuests, createdAt, price } = body;
  return await knex("meals").insert({
    title: title,
    description: description,
    maxNumberOfGuests: maxNumberOfGuests,
    createdAt: createdAt,
    price: price,
  });
};
router.post("/", async (request, response) => {
  addMeal({
    body: request.body,
  })
    .then(result => response.json(result))
    .catch(error => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
//////
const getMealsById = async ({ body, id }) => {
  try {
    const { title, description, maxNumberOfGuests, createdAt, price } = body;
    return await knex("meals")
      .where({
        id: id,
      })
      .select("*");
  } catch (error) {
    console.log(error);
  }
};
router.get("/:id", async (req, res) => {
  getMealsById({
    body: req.body,
    id: req.params.id,
  })
    .then(result => res.json(result))
    .catch(error => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
//////
const getUpdatedMeal = async ({ body, id }) => {
  const { title, description, maxNumberOfGuests, createdAt, price } = body;
  const meal = await knex.from("meals").select("*").where({
    id: id,
  });
  if (meal.length === 0) {
    throw new HttpError("Bad request", `Contact not found: ID ${id}!`, 404);
  }
  const queryDto = {
    price: price,
  };
  if (Object.keys(queryDto).length !== 0) {
    return await knex("meals")
      .where({
        id: id,
      })
      .update(queryDto);
  } else return "Nothing updated!";
};
router.put("/:id", async (req, res) => {
  getUpdatedMeal({
    body: req.body,
    id: req.params.id,
  })
    .then(result => res.json(result))
    .catch(error => {
      response.status(400).send("Bad request").end();
      console.log(error);
    });
});
//////
const deleteMeal = async ({ id }) => {
  try {
    if (!id) {
      return "something went wrong, try againnnnn";
    }
    return knex("meals")
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
  deleteMeal({
    id: req.params.id,
  })
    .then(result => res.json(result))
    .catch(error => {
      res.status(400).send("Bad request").end();
      console.log(error);
    });
});

///// max price
const getMaxPrice = async maxPrice => {
  try {
    return await knex("meals").select("*").where("price", "<", maxPrice);
  } catch (error) {
    console.log(error);
  }
};

////// title
const getTitle = async title => {
  try {
    return await knex("meals").select("*").where("title", "like", `%${title}%`);
  } catch (error) {
    console.log(error);
  }
};

// ////createdAfter
const getCreatedAfter = async createdAfter => {
  try {
    return await knex("meals")
      .select("*")
      .where("createdAt", ">", createdAfter);
  } catch (error) {
    console.log(error);
  }
};

////limit
const getLimit = async limit => {
  try {
    return await knex("meals").select("*").limit(limit);
  } catch (error) {
    console.log(error);
  }
};
///availableReservations
const getAvailableReservations = async availableReservations => {
  if (availableReservations === "true") {
    try {
      return await knex("meals")
        .select("meals.*")
        .count("reservations.id as count")
        .leftJoin("reservations", "meals.id", "=", "reservations.mealId")
        .groupBy("meals.id")
        .having("meals.maxNumberOfGuests", ">", "count");
    } catch (error) {
      console.log(error);
    }
  } else {
    response.status(400).send("Bad request").end();
  }
};

router.get("/", async (request, response) => {
  if (request.query.maxPrice) {
    getMaxPrice(request.query.maxPrice)
      .then(result => response.json(result))
      .catch(ex => {
        response.status(400).send("Bad request").end();
        console.log(ex);
      });
  } else if (request.query.title) {
    getTitle(request.query.title)
      .then(result => response.json(result))
      .catch(ex => {
        response.status(400).send("Bad request").end();
        console.log(ex);
      });
  } else if (request.query.createdAfter) {
    getCreatedAfter(request.query.createdAfter)
      .then(result => response.json(result))
      .catch(ex => {
        response.status(400).send("Bad request").end();
        console.log(ex);
      });
  } else if (request.query.limit) {
    getLimit(request.query.limit)
      .then(result => response.json(result))
      .catch(ex => {
        response.status(400).send("Bad request").end();
        console.log(ex);
      });
  } else if (request.query.availableReservations) {
    getAvailableReservations(request.query.availableReservations)
      .then(result => response.json(result))
      .catch(ex => {
        response.status(400).send("Bad request").end();
        console.log(ex);
      });
  } else {
    try {
      const allMEALS = await knex("meals").select("*");
      response.json(allMEALS);
    } catch (error) {
      throw error;
    }
  }
});
module.exports = router;
