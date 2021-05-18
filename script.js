let container = document.getElementById('container');
let button = document.getElementById('button');
let r = document.querySelector(':root');



//quadro standard
for (let i = 0; i < 256; i++) {
let newDiv = document.createElement('div')
newDiv.setAttribute('class', 'grid-item');
container.appendChild(newDiv)
}


//hover
let grid = document.querySelector('div')
grid.addEventListener("mouseover", function(event) {
  event.target.classList.replace("grid-item", "color");
});

//updated grid

button.addEventListener('click',   function updateGrid() {
  let numero = prompt('Diga um numero')
  grid.innerHTML = "";
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${numero}, 2fr)`
  );
  container.style.setProperty(
    "grid-template-rows",
    `repeat(${numero}, 2fr)`
  );
  for (let i = 0; i < numero * numero; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    container.appendChild(newDiv);
  }
  console.log(numero);
});






