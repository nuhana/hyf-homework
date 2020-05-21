function wear(temperature) {
  if (temperature <= 10) {
    console.log("you should wear winter jacket");
  } else if (temperature > 10 && temperature <= 18) {
    console.log("you can wear  jacket or not");
  } else {
    console.log("you can wear short and t-shirt");
  }
}
wear(15);
