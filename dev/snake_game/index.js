const backgroundColor = '#a9a9a9';
const snakeColor = 'c2c2c2';
const foodColor = '#FF00FF';

const gameScreen = document.getElementById('gameScreen');
let canvas;
let context;

function start() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    //draw the gamescreen canvas
    canvas.width = cavas.height = 600
    context.fillStyle = backgroundColor
    context.fillRect(0,0,canvas.width,canvas.height);

    document.addEventListener('keydown',keydown);

}

function keydown(e) {
    console.log(e.keyCode);
}

start();