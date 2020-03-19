
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


//Pick mediumSlateBLue Color
const mediumSlateBlueColor = document.querySelector(".palette-color.color-6");

//Handler Function to change color of Current Brush
const changeBrushMediumSlateBluePlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-6');

}

//EventListener for current Brush change
mediumSlateBlueColor.addEventListener('click', changeBrushMediumSlateBluePlusCanvas);


//Pick AquaMarine Color
const aquaMarineColor = document.querySelector(".palette-color.color-7");

//Handler Function to change color of Current Brush
const changeBrushAquaMarinePlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-7');

}

//EventListener for current Brush change
aquaMarineColor.addEventListener('click', changeBrushAquaMarinePlusCanvas);


//Pick brown Color
const brownColor = document.querySelector(".palette-color.color-8");

//Handler Function to change color of Current Brush
const changeBrushBrownPlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-8');

}

//EventListener for current Brush change
brownColor.addEventListener('click', changeBrushBrownPlusCanvas);

//Pick seaGreen Color
const seaGreenColor = document.querySelector(".palette-color.color-9");

//Handler Function to change color of Current Brush
const changeBrushseaGreenPlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-9');

}

//EventListener for current Brush change
seaGreenColor.addEventListener('click', changeBrushseaGreenPlusCanvas);

//Pick LimeGreen Color
const limeGreenColor = document.querySelector(".palette-color.color-10");

//Handler Function to change color of Current Brush
const changeBrushLimeGreenPlusCanvas = function() {
    const brushChange = document.querySelector(".current-brush");
    brushChange.classList.replace(brushChange.classList[1], 'color-10');

}

//EventListener for current Brush change
limeGreenColor.addEventListener('click', changeBrushLimeGreenPlusCanvas);




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

const resetIconPaletteQuery = document.querySelector(".reset-button")

const squaresResetColor = function () {
    // const resetEvent = event.target.classList.replace(event.target.classList[1], 'color-5');
    for (let squareR of canvasSquares) {
        squareR.classList.replace(squareR.classList[1], 'color-5');
    }
}

resetIconPaletteQuery.addEventListener('click', squaresResetColor);



