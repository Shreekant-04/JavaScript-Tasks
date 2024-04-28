let red = document.querySelector(".red");
red.addEventListener("click", () => {
  red.style.backgroundColor = "red";
});
let green = document.querySelector(".green");
green.addEventListener("click", () => {
  green.style.backgroundColor = "green";
});
let blue = document.querySelector(".blue");
blue.addEventListener("click", () => {
  blue.style.backgroundColor = "blue";
});
let Yellow = document.querySelector(".Yellow");
Yellow.addEventListener("click", () => {
  Yellow.style.backgroundColor = "Yellow";
});
let msg = document.querySelector(".greetmsg");
let greet = document.querySelector(".greet");
let input = document.querySelector(".username input");

greet.addEventListener("click", () => {
  if (input.value === "") {
  } else {
    msg.innerText = `Hello, ${input.value}`;
  }
});
