let button = document.getElementById("button");
var numberInShape = 1;
var oldvalue = 0;

button.onclick = () => {
  let n = document.getElementById("number").value;
  const Circle = document.getElementById("Circle");
  const Square = document.getElementById("Square");
  const Rectangle = document.getElementById("Rectangle");
  const Oval = document.getElementById("Oval");
  const box = document.getElementById("box");
  const color = document.getElementById("colour").value;

  n = Number(n) + Number(oldvalue);

  for (let j = numberInShape; j <= n; j++) {
    let shape = document.createElement("div");
    shape.innerHTML += numberInShape;
    if (Circle.checked) {shape.classList.add("Circle");shape.style.backgroundColor=color;}
    else if (Square.checked){ shape.classList.add("Square");shape.style.backgroundColor=color;}
    else if (Rectangle.checked){ shape.classList.add("Rectangle");shape.style.backgroundColor=color;}
    else if (Oval.checked) {shape.classList.add("Oval");shape.style.backgroundColor=color;}
    else document.write("Invalid Input");

    numberInShape++;
    box.appendChild(shape);
    oldvalue = document.getElementById("box").lastElementChild.innerHTML;
  }
};