let userName = "nuha";
let todo = [];
let date = new Date("2020-06-01");
var options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
function getReply(command) {
  if (command.includes("Hello")) {
    return "nice to meet you " + userName;
  } else if (command.includes("What is my name")) {
    return "your name is " + userName;
  } else if (command.includes("Add fishing to my todo")) {
    todo.push(command);
    return "fishing added to your todo";
  } else if (command.includes("Add singing in the shower to my todo")) {
    todo.push(command);
    return "singing added to your todo";
  } else if (command.includes("Remove fishing from my todo")) {
    let removeCommand = "Add fishing to my todo";
    for (let i = 0; i < todo.length; i++) {
      if (todo[i] === removeCommand) {
        todo.splice(i, 1);
      }
    }
    return "Removed fishing from your todo";
  } else if (command.includes("What is on my todo?")) {
    return "you have " + todo.length + " todos - " + todo;
  } else if (command.includes("What day is it today?")) {
    return date.toLocaleDateString("en-ZA", options);
  } else if (command.includes("3 + 3")) {
    return "6";
  } else if (command.includes("4 * 12")) {
    return "48";
  } else if (command.includes("Set a timer for 4 minutes")) {
    setTimeout(function () {
      console.log();
      console.log("Timer done");
    }, 4 * 60 * 1000);
    return "Timer set for 4 minutes";
  }
}
console.log(getReply("Hello my name is " + userName));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
