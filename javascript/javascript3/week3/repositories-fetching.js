function PromiseAll() {
  const ul = document.querySelector("ul");

  const promise1 = fetch(
    "https://api.github.com/search/repositories?q=user:claudion3"
  )
    .then((response) => response.json())
    .then((classmate1) => {
      const li = document.createElement("li");
      li.innerHTML = `${classmate1.items[0].owner.login}  ${classmate1.items[0].owner.url}`;
      ul.appendChild(li);
    });
  const promise2 = fetch(
    "https://api.github.com/search/repositories?q=user:merihnguse"
  )
    .then((response) => response.json())
    .then((classmate2) => {
      const li = document.createElement("li");
      li.innerHTML = `${classmate2.items[0].owner.login}  ${classmate2.items[0].owner.url}`;
      ul.appendChild(li);
    });
  const promise3 = fetch(
    "https://api.github.com/search/repositories?q=user:Kiran-Serolla"
  )
    .then((response) => response.json())
    .then((classmate3) => {
      const li = document.createElement("li");
      li.innerHTML = `${classmate3.items[0].owner.login}  ${classmate3.items[0].owner.url}`;
      ul.appendChild(li);
    });
  Promise.all([promise1, promise2, promise3]).then(() => {
    console.log("done");
  });
}
PromiseAll();
