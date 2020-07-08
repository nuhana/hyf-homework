async function translateOneByOne() {
  await moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
    x: 20,
    y: 300,
  });
  console.log("Element has been moved");
  await moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
    x: 400,
    y: 300,
  });
  console.log("Element has been moved");
  await moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
    x: 400,
    y: 20,
  });
  console.log("Element has been moved");
}
translateOneByOne();

function translateAllAtOnce() {
  const promise1 = moveElement(
    document.querySelector("ul.marks li:nth-child(1)"),
    {
      x: 20,
      y: 300,
    }
  );
  const promise2 = moveElement(
    document.querySelector("ul.marks li:nth-child(2)"),
    {
      x: 400,
      y: 300,
    }
  );
  const promise3 = moveElement(
    document.querySelector("ul.marks li:nth-child(3)"),
    {
      x: 400,
      y: 20,
    }
  );
  Promise.all([promise1, promise2, promise3]).then(() => {
    console.log("Elements has been moved");
  });
}
translateAllAtOnce();
