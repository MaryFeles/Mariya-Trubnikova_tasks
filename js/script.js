const SNAKEBOARD = document.getElementById('gameCanvas');
const ctx = SNAKEBOARD.getContext('2d');

const CELL_SIZE = 16;

const CELLS_HORIZONTALLY = SNAKEBOARD.width / CELL_SIZE;
const CELLS_VERTICALLY = SNAKEBOARD.height / CELL_SIZE;

const START_COORD = {
    x: SNAKEBOARD.width / 2,
    y: SNAKEBOARD.height / 2
}

let gameState = {
    start: false,
    pause: false,
    score: 0,
    time: 30
}

let food = getRandomCoord();

let snake = {
    x: START_COORD.x,
    y: START_COORD.y,
    dx: 0,
    dy: - CELL_SIZE,
    body: [],
    bodyParts: 4,
    direction: "up",
}

const SNAKE_HEAD_COLOR = '#9933ff';
const SNAKE_BODY_COLOR = '#ceff34';
const SNAKE_BORDER_COLOR = '#fff10d';

function drawSnakePart(snakePart, bodyColor) {
    ctx.fillStyle = bodyColor;
    ctx.fillRect(snakePart.x + 2, snakePart.y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
}

function drawSnake() {
    snake.body.forEach((bodyPart, index) => {
        let isSnakeHead = index == 0;

        if (isSnakeHead) {
            drawSnakePart(bodyPart, SNAKE_HEAD_COLOR);
        } else {
            drawSnakePart(bodyPart, SNAKE_BODY_COLOR);
        }
    });
}

function getRandomCoord() {
    let x = Math.floor(Math.random() * (CELLS_HORIZONTALLY - 1)) * CELL_SIZE;
    let y = Math.floor(Math.random() * (CELLS_VERTICALLY - 1)) * CELL_SIZE;
    return { x, y }
}

function drawFood() {
    ctx.fillStyle = '#ff4000';
    ctx.beginPath();
    ctx.arc(food.x + CELL_SIZE/2, food.y + CELL_SIZE/2, CELL_SIZE/2-2, 0, 2*Math.PI);
    ctx.fill();
}

function startGame() {
    setInterval(() => {
        ctx.clearRect(0, 0, SNAKEBOARD.width, SNAKEBOARD.height);

        snake.x += snake.dx;
        snake.y += snake.dy;

        snake.body.unshift({ x: snake.x, y: snake.y });

        if (snake.body.length > snake.bodyParts) {
            snake.body.pop();
        }

        drawSnake();
        drawFood();

        snake.body.forEach(function (bodyPart, index) {

            if (bodyPart.x === food.x && bodyPart.y === food.y) {
                snake.bodyParts++;
                food = getRandomCoord();
                drawFood();
            }

            if (checkEatBody(bodyPart, index)) {
                snake = {...newSnake};
                food = getRandomCoord();
                console.log(snake)          
            }
        });
    }, 200);
}

function checkEatBody(bodyPart, index){
    let snakeLength = snake.body.length;

    for (var i = index + 1; i < snakeLength; i++) {
        if (bodyPart.x === snake.body[i].x && bodyPart.y === snake.body[i].y) {
            return true;
        }
    }
}


let newSnake = {
    x: START_COORD.x,
    y: START_COORD.y,
    dx: 0,
    dy: - CELL_SIZE,
    body: [],
    bodyParts: 4,
    direction: "up",
}


document.addEventListener('keydown', function (event) {
    setDirection(event.key);
});

function setDirection(key) {
    switch (key) {
        case "ArrowUp":
            if (snake.direction != "down") {
                snake.direction = "up";

                snake.dx = 0;
                snake.dy = - CELL_SIZE;
            }
            break;
        case "ArrowRight":
            if (snake.direction != "left") {
                snake.direction = "right";

                snake.dx = CELL_SIZE;
                snake.dy = 0;
            }
            break;
        case "ArrowDown":
            if (snake.direction != "up") {
                snake.direction = "down";

                snake.dx = 0;
                snake.dy = CELL_SIZE;
            }
            break;
        case "ArrowLeft":
            if (snake.direction != "right") {
                snake.direction = "left";

                snake.dx = - CELL_SIZE;
                snake.dy = 0;
            }
            break;
    }
}

startGame();