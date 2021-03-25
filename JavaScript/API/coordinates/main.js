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

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  console.log(targetRect);
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
