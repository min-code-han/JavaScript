const target = document.querySelector(".target");
target.style.position = "absolute";
target.style.top = "0";
target.style.left = "0";

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  target.style.left = `${x - 50}px`;
  target.style.top = `${y - 50}px`;
  console.log(target.style.top);
});
addEventListener();
