
let Game = (function () {
    let interval;

    let _refreshCanvas = function () {
        ctx.clearRect(0, 0, SNAKEBOARD.width, SNAKEBOARD.height);

        Food.draw();

        Snake.move();
        Snake.draw();
        Snake.foodEat();
        Snake.bodyEat() ? Game.restart() : false;
        Snake.clashWithWall() ? Game.restart() : false;
    }

    return {
        start: function () {
            Snake.createNewSnake();

            interval = setInterval(() => {
                _refreshCanvas();
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
                _refreshCanvas();
            }, 400);
        }
    }
})();