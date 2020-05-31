let activities = [];
let date = new Date();
function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}
addActivity(date, "Youtube", 40);
addActivity(date, "facebook", 30);
addActivity(date, "snapchat", 20);
console.log(activities);

function showStatus() {
  let total = 0;
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }
  for (let i = 0; i < activities.length; i++) {
    total = total + activities[i].duration;
  }
  console.log(
    "You have added " +
      activities.length +
      " activities. They amount to " +
      total +
      " min. of usage"
  );
  if (total > 60) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}
showStatus();

function activityCalculating() {
  let largest = 0;
  for (let j = 0; j < activities.length; j++) {
    if (activities[j].duration > largest) {
      largest = activities[j].activity;
    }
  }
  console.log("you spend most your time on " + largest);
}
activityCalculating();
