let body = document.querySelector("body");
let divs = document.querySelectorAll("div");

divs.forEach((element) => {
  element.addEventListener("mouseover", () => {
    body.style.backgroundImage = `url(images/${element.className}.jpg)`;

    console.log(element.className, "was clicked");
    
  });
  element.addEventListener("mouseout", () => {
    body.style.backgroundImage = `url(images/img2.jpg)`;

    console.log(element.className, "was clicked");
    
  });
});
