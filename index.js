const links = document.querySelectorAll("nav > .hover-this");
const cursor = document.querySelector(".cursor");

const animateIt = function (e) {
  const span = this.querySelector("span");
  const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,
    move = 25,
    xMove = (x / width) * (move * 2) - move,
    yMove = (y / height) * (move * 2) - move;

  span.style.transform = `translate(${xMove}px, ${yMove}px)`;

  if (e.type === "mouseleave") span.style.transform = "";
};

const addCursor = (e) => {
  cursor.classList.add("scale-1");
  const { clientX: x, clientY: y } = e;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};
const removeCursor = (e) => {
  cursor.classList.remove("scale-1");
};

links.forEach((link) => link.addEventListener("mousemove", animateIt));
links.forEach((link) => link.addEventListener("mouseleave", animateIt));
window.addEventListener("mousemove", addCursor);
window.addEventListener("mouseout", removeCursor);
