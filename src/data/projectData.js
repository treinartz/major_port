const projectsData = [
  {
    id: 1,
    week: 1,
    title: "Variables & Drawing",
    description:
      "Explored p5.js variables to create dynamic shapes that respond to mouse movement. Learned how variables store and update values.",
    reflection:
      "The hardest part was understanding how variables update each frame. I learned that p5.js redraws constantly, so variables need to be updated in draw().",
    gifPath: "/gifs/week1-variables.gif",
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let circleX = mouseX;
  let circleY = mouseY;
  circle(circleX, circleY, 50);
}`,
  },
  {
    id: 2,
    week: 2,
    title: "Functions & Modularity",
    description:
      "Created custom functions to draw complex patterns. Functions help organize code and make it reusable.",
    reflection:
      "Learning to pass parameters to functions was tricky at first, but it makes code so much more flexible!",
    gifPath: "/gifs/week2-functions.gif",
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawFlower(200, 200, 50);
  drawFlower(100, 300, 30);
}

function drawFlower(x, y, size) {
  fill(255, 100, 150);
  circle(x, y, size);
  circle(x-size/2, y, size/2);
  circle(x+size/2, y, size/2);
}`,
  },
  {
    id: 3,
    week: 3,
    title: "Conditionals & Interaction",
    description:
      "Used if/else statements to create interactive elements that change based on user input.",
    reflection:
      "Conditionals opened up so many possibilities! Now my sketches can respond differently to different situations.",
    gifPath: "/gifs/week3-conditionals.gif",
    code: `function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    background(255, 0, 0);
  } else {
    background(0, 0, 255);
  }
  
  if (mouseX > width/2) {
    fill(255);
  } else {
    fill(0);
  }
  circle(mouseX, mouseY, 50);
}`,
  },
];

export default projectsData;
