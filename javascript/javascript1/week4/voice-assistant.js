let todos = [];
let date = new Date();
var options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

function getReply(command) {
  if (command.startsWith("hello my name is ")) {
    const name = command.replace("hello my name is", "");
    return "Nice to meet you " + name;
  } else if (command.includes("What is my name")) {
    return "your name is " + name;
  } else if (command.startsWith("add") && command.endsWith("to my to-do")) {
    const todo = command.replace("add", "").replace(" to my to-do", "");
    todos.push(todo);
    return todo + "added to your to-do";
  } else if (command.startsWith("Remove") && command.endsWith("from my todo")) {
    const activityList = command
      .replace("Remove", "")
      .replace("from my todo", "");
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === activityList) {
        todos.splice(i, 1);
      }
    }
    return activityList + " removed from your todo";
  } else if (command.includes("What is on my todo?")) {
    return "you have " + todos.length + " todos - " + todos;
  } else if (command.includes("What day is it today?")) {
    return date.toLocaleDateString("en-ZA", options);
  } else if (command.startsWith("what is")) {
    const commandWords = command.split(" ");
    const number1 = parseInt(commandWords[2]);
    const number2 = parseInt(commandWords[4]);
    const operation = commandWords[3];
    if (number1 && number2) {
      switch (operation) {
        case "+":
          return number1 + number2;
        case "-":
          return number1 - number2;
        case "*":
          return number1 * number2;
        case "/":
          return number1 / number2;
      }
    }
  } else if (command.includes("Set a timer for 4 minutes")) {
    setTimeout(function () {
      console.log();
      console.log("Timer done");
    }, 4 * 60 * 1000);
    return "Timer set for 4 minutes";
  }
}
console.log(getReply("hello my name is "));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
