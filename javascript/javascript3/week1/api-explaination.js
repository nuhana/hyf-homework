fetch(
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"
)
  .then((response) => response.json())
  .then((explain) => {
    console.log(explain);
  });
/*

api contains array of objects [{..}, {..},]
and we can access each object by index data[0]
each object contains tree elements we can access it fx :data[0].name

*/
