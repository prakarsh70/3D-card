// checking if using mobile or desktop
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  console.log("You are using Mobile, please visit on a desktop to see a nice hover effect");
} else {
  // movement animation to happen
  const card = document.querySelector(".card");
  const container = document.querySelector(".container");

  // items
  const title = document.querySelector(".title");
  const sneaker = document.querySelector(".sneaker img");
  const purchase = document.querySelector(".purchase");
  const description = document.querySelector(".info h3");
  const sizes = document.querySelector(".sizes");

  // moving animation event
  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let YAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${YAxis}deg)`;
  });

  // Animate in
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // popout
    title.style.transform = "translateZ(110px)";
    sneaker.style.transform = "translateZ(120px) rotateZ(-15deg)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(75px)";
    purchase.style.transform = "translateZ(50px)";
  });

  // Animate out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  });
}
