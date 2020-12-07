// movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');
const c5 = document.querySelector('.c5');
const c6 = document.querySelector('.c6');
const c7 = document.querySelector('.c7');
const c8 = document.querySelector('.c8');
const c9 = document.querySelector('.c9');
const c10 = document.querySelector('.c10');

// moving animation event
container.addEventListener('mousemove', (e)=>{
    let xAxis  = ((window.innerWidth / 2) - e.pageX) /10;
    let YAxis  = ((window.innerHeight / 2) - e.pageY) /10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${YAxis}deg)`
})

// Animate in
container.addEventListener('mouseenter', (e)=>{
    card.style.transition = 'none';
    // popout
    title.style.transform = "translateZ(125px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-15deg)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(75px)";
    purchase.style.transform = "translateZ(50px)";
    c2.style.transform = "translateZ(20px)"
    c3.style.transform = "translateZ(40px)"
    c4.style.transform = "translateZ(60px)"
    c5.style.transform = "translateZ(80px)"
    c6.style.transform = "translateZ(100px)"
    c7.style.transform = "translateZ(120px)"
    c8.style.transform = "translateZ(140px)"
    c9.style.transform = "translateZ(160px)"
    c10.style.transform = "translateZ(180px)"
})

// Animate out
container.addEventListener('mouseleave', (e)=>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    c2.style.transform = "translateZ(0px)"
    c3.style.transform = "translateZ(0px)"
    c4.style.transform = "translateZ(0px)"
    c5.style.transform = "translateZ(0px)"
    c6.style.transform = "translateZ(0px)"
    c7.style.transform = "translateZ(0px)"
    c8.style.transform = "translateZ(0px)"
    c9.style.transform = "translateZ(0px)"
    c10.style.transform = "translateZ(0px)"
})

const name = document.querySelectorAll("#name path");
for(let i=0; i<name.length; i++){
    console.log(`Letter ${i} is ${name[i].getTotalLength()}`);
}
