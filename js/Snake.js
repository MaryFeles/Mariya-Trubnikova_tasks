
const SNAKE_HEAD_COLOR = '#9933ff';
const SNAKE_BODY_COLOR = '#ceff34';
const SNAKE_BORDER_COLOR = '#fff10d';

const START_COORD = {
    x: SNAKEBOARD.width / 2,
    y: SNAKEBOARD.height / 2
}

let Snake = (function () {
    let snake = {
        x: START_COORD.x,
        y: START_COORD.y,
        dx: 0,
        dy: - CELL_SIZE,
        body: [],
        bodyParts: 4,
        direction: "up",
    };


    let _drawSnakePart = function (snakePart, bodyColor) {
        ctx.fillStyle = bodyColor;
        ctx.fillRect(snakePart.x + 2, snakePart.y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
    }

    return {
        setDirection: function (key) {
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
        },

        move: function () {
            snake.x += snake.dx;
            snake.y += snake.dy;

            snake.body.unshift({ x: snake.x, y: snake.y });

            if (snake.body.length > snake.bodyParts) {
                snake.body.pop();
            }
        },

        draw: function () {
            snake.body.forEach((bodyPart, index) => {
                let isSnakeHead = index == 0;

                if (isSnakeHead) {
                    _drawSnakePart(bodyPart, SNAKE_HEAD_COLOR);
                } else {
                    _drawSnakePart(bodyPart, SNAKE_BODY_COLOR);
                }
            });
        },

        checkFoodEating: function () {
            snake.body.forEach(bodyPart => {
                if (bodyPart.x === Food.getCoords().x && bodyPart.y === Food.getCoords().y) {
                    snake.bodyParts++;
                    Food.setCoords();
                    Food.draw();
                }
            });
        },

        checkBodyEating: function () {
            let snakeLength = snake.body.length;

            snake.body.forEach((bodyPart, index) => {
                for (let i = index + 1; i < snakeLength; i++) {
                    if (bodyPart.x === snake.body[i].x && bodyPart.y === snake.body[i].y) {
                        return true;
                    }
                }
            });            
        },
    }

})();