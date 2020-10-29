// Movement Animation to Happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");

// Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // Popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    sizes.style.transform = "translateZ(150px)";
    purchase.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(150px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all .5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // Popback
    title.style.transform = "translateZ(0)";
    sneaker.style.transform = "translateZ(0) rotateZ(-0)";
    sizes.style.transform = "translateZ(0)";
    purchase.style.transform = "translateZ(0)";
    description.style.transform = "translateZ(0)";
});