const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#itemss");

const loop = (direction, e) => {
  e.preventDefault();

  if (direction === "right") {
    itemsList.appendChild(itemss.firstElementChild);

  } else {
    itemsList.insertBefore(itemss.lastElementChild, itemss.firstElementChild);
  }
};

right.addEventListener("click", (e) => {
  loop("right", e);
  
});

left.addEventListener("click", (e) => {
  loop("left", e);
  
});