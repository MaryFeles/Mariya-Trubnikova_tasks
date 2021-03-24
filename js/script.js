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

const SNAKE_HEAD_COLOR = '#fff10d';
const SNAKE_BODY_COLOR = '#000';
const SNAKE_BORDER_COLOR = '#fff10d';

function drawSnakePart(snakePart, bodyColor) {
    ctx.fillStyle = bodyColor;
    ctx.fillRect(snakePart.x, snakePart.y, CELL_SIZE, CELL_SIZE);
    ctx.strokeStyle = SNAKE_BORDER_COLOR;
    ctx.strokeRect(snakePart.x, snakePart.y, CELL_SIZE, CELL_SIZE);
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
    ctx.fillStyle = '#cc3e14';
    ctx.fillRect(food.x, food.y, CELL_SIZE, CELL_SIZE);
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

            // Проверяем, не столкнулась ли змея сама с собой 
            // Для этого перебираем весь массив и смотрим, есть ли у нас в массиве змейки две клетки с одинаковыми координатами 
            for (var i = index + 1; i < snake.body.length; i++) {
                // Если такие клетки есть — начинаем игру заново 
                if (bodyPart.x === snake.body[i].x && bodyPart.y === snake.body[i].y) {
                    // Задаём стартовые параметры основным переменным
                    snake.x = 160;
                    snake.y = 160;
                    snake.body = [];
                    snake.bodyParts = 4;
                    snake.dx = 0;
                    snake.dy = -16;
                    snake.direction ="up";

                    food = getRandomCoord();
                }
            }
        });
    }, 500);
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