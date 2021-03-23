// const target = document.querySelector(".target");
// const txt = document.querySelector(".txt");
// target.style.position = "absolute";
// target.style.top = "0";
// target.style.left = "0";

// window.addEventListener("mousemove", (e) => {
//   x = e.clientX;
//   y = e.clientY;
//   target.style.left = `${x}px`;
//   target.style.top = `${y}px`;
//   console.log(target.style.top);
//   txt.innerHTML = `${target.style.left} <br>${target.style.top}`;
// });
// addEventListener();

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});
