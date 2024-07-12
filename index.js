const gridSide=600;
let cellsPerSide=16;

const sketchArea=document.getElementById("sketch-area");
sketchArea.style.width=sketchArea.style.height=`${gridSide}px`;

const sliderContainer=document.getElementById("slider-container");
const slider=document.getElementById("slider");
const sliderValue=document.getElementById("slider-value");
sliderValue.textContent=`${slider.value}x${slider.value} (Resolution)`;


function setBackgroundColor(){
  this.style.backgroundColor="black";
  console.log(this);
}

function createGridCells(cellsPerSide){
  const numOfCells=(cellsPerSide*cellsPerSide);
  const widthOrHeight=`${(gridSide/cellsPerSide)-2}px`;
  for(let i=0;i<numOfCells;i++){
    const gridCell=document.createElement("div");

    gridCell.style.width=widthOrHeight;
    gridCell.style.height=widthOrHeight;
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);
    gridCell.addEventListener("mouseover",setBackgroundColor);
  }
}

function removeGridCells(){
  while(sketchArea.firstChild){
    sketchArea.remove(sketchArea.firstChild);
  }
}


slider.oninput=function(){
  let txt=`${slider.value}x${slider.value} (Resolution)`;
  sliderValue.innerHTML=txt;
}

createGridCells(16);
