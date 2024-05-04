const body = document.querySelector("body");
const Btn = document.querySelector(".click");

Btn.addEventListener("mouseover", () => {
  const BtnRect = Btn.getBoundingClientRect();
 

  const maxX = bodyRect.width - BtnRect.width;
  const maxY = bodyRect.height - BtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  Btn.style.left = randomX + "px";
  Btn.style.top = randomY + "px";

});
  const bodyRect = body.getBoundingClientRect();

