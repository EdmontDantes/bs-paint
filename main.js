
//Pick Orange Color
const orangeColor = document.querySelector(".palette-color.color-1");

//Handler Function to change color of Current Brush
const changeBrushOrangePlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-1');
}

//EventListener for current Brush change
orangeColor.addEventListener('click', changeBrushOrangePlusCanvas);




//Pick blue Color
const blueColor = document.querySelector(".palette-color.color-2");

//Handler Function to change color of Current Brush
const changeBrushBluePlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-2');
}

//EventListener for current Brush change
blueColor.addEventListener('click', changeBrushBluePlusCanvas);

//Pick Green Color
const greenColor = document.querySelector(".palette-color.color-3");

//Handler Function to change color of Current Brush
const changeBrushGreenPlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-3');
}

//EventListener for current Brush change
greenColor.addEventListener('click', changeBrushGreenPlusCanvas);

//Pick Red Color
const redColor = document.querySelector(".palette-color.color-4");

//Handler Function to change color of Current Brush
const changeBrushRedPlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-4');
}

//EventListener for current Brush change
redColor.addEventListener('click', changeBrushRedPlusCanvas);


//Pick White Color
const whiteColor = document.querySelector(".palette-color.color-5");

//Handler Function to change color of Current Brush
const changeBrushWhitePlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-5');

}

//EventListener for current Brush change
whiteColor.addEventListener('click', changeBrushWhitePlusCanvas);

//Pick changed Current Brush
const currentBrushColor = document.querySelector(".current-brush");

// Handler Function for Squares change Color only one
const squaresChangeColor = function (event) {
    event.target.classList.replace(event.target.classList[1], currentBrushColor.classList[1]);
}

//Pick square query
const canvasSquares = document.querySelectorAll(".square");

//Loop for each Event Listener click on square to change it to color of Current Brush
for (const square of canvasSquares) {
    square.addEventListener('click', squaresChangeColor);
}



