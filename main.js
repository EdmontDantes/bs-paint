// QuerySelectors

// Handler Functions

// colorClass = document.querySelectorAl('.palette-color');

// const queryColors  = function(colorClassQuery) {

//     return colorClassQuery.classList[1];

// }



// const currentBrush = document.querySelector('current-brush')

// const replaceBrushColorAndSquares = function() {

//     return currentBrush[1].replace(queryColors)
// }

const orangeColor = document.querySelectorAll('.palette-color.color-1');

const changeBrushOrangePlusCanvas = function(event) {
    const brushChange = document.querySelectorAll('.current-brush.color-5')
    brushChange.classList.replace(brushChange[1], 'color-1')
    const squares = document.querySelectorAll('.square.color-5')
    squares.classList.replace(squares[1], 'color-1')
}

orangeColor.addEventListener('click', changeBrushOrangePlusCanvas);


for (const colorChange of squares) {
    colorChange.addEventListener('click', changeBrushOrangePlusCanvas);
}




const BlueColor = document.querySelectorAll('.palette-color.color-2')
const GreenColor = document.querySelectorAll('.palette-color.color-3')
const RedColor = document.querySelectorAll('.palette-color.color-4')
const WhiteColor = document.querySelectorAll('.palette-color.color-5')



// EventListeners

