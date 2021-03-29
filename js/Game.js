let gameState = {
    start: false,
    pause: false,
    score: 0,
    time: 30
}


let Game = (function () {
    let interval;

    function refreshCanvas() {
        ctx.clearRect(0, 0, SNAKEBOARD.width, SNAKEBOARD.height);

        Food.draw();

        Snake.move();
        Snake.draw();
        Snake.foodEat();

        if (Snake.bodyEat()) {
            Game.restart();
        }

        if (Snake.clashWithWall()) {
            Game.restart();
        }
    }

    return {
        start: function () {
            Snake.createNewSnake();

            interval = setInterval(() => {
                refreshCanvas();
            }, 400);
        },

        restart: function () {
            Snake.createNewSnake();
            Food.setCoords();
        },

        pause: function () {
            clearInterval(interval);
        },

        continue: function () {
            interval = setInterval(() => {
                refreshCanvas();
            }, 400);
        }
    }
})();