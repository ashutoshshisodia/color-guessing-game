let num = 6;
let colors = generateColorList(num);
let goal = pickcolor(colors);

// selection of elements
let h1content = document.getElementById("goaal");
let allsquares = document.getElementsByClassName("square");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let easybtn = document.querySelector("#easybtn");
let hardbtn = document.querySelector("#hardbtn");

// manipulation
h1content.textContent = goal;

// checking
for (let i = 0; i < allsquares.length; i++) {
  allsquares[i].style.backgroundColor = colors[i];
  allsquares[i].addEventListener("click", function () {
    let colorpicked = this.style.backgroundColor;
    console.log(colorpicked);
    if (colorpicked === goal) {
      message.textContent = "Correct!";
      reset.textContent = "Play Again?";
      changeAllColors(colorpicked);
      h1.style.backgroundColor = colorpicked;
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Wrong:Try again";
    }
  });
}

//reset
reset.addEventListener("click", function () {
  this.textContent = "New colors";
  // message.style.display = "none";
  colors = generateColorList(num);
  message.textContent = "";
  goal = pickcolor(colors);
  h1content.textContent = goal;
  for (let i = 0; i < allsquares.length; i++) {
    allsquares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#4682b4";
});

//easy
easybtn.addEventListener("click", function () {
  num = 3;
  reset.textContent = "New colors";
  easybtn.classList.add("selected");
  hardbtn.classList.remove("selected");
  colors = generateColorList(num);
  goal = pickcolor(colors);
  h1content.textContent = goal;
  for (let i = 0; i < 6; i++) {
    if (i < colors.length) allsquares[i].style.backgroundColor = colors[i];
    else allsquares[i].style.backgroundColor = "#232323";
    h1.style.backgroundColor = "#4682b4";
  }
});

//hard
hardbtn.addEventListener("click", function () {
  num = 6;
  reset.textContent = "New colors";
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  colors = generateColorList(num);
  goal = pickcolor(colors);
  h1content.textContent = goal;
  for (let i = 0; i < num; i++) {
    allsquares[i].style.backgroundColor = colors[i];

    h1.style.backgroundColor = "#4682b4";
  }
});

//changing all colors
function changeAllColors(thecolor) {
  for (let i = 0; i < num; i++) {
    allsquares[i].style.backgroundColor = thecolor;
  }
}

//to generate list of colors
function generateColorList(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(generateColor());
  }
  return arr;
}

// for generating random colors
function generateColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// picking a random color
function pickcolor(colors) {
  let ind = Math.floor(Math.random() * colors.length);
  return colors[ind];
}
