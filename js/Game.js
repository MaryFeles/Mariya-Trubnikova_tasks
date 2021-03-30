let Game = (function () {
    let interval;
    let speed = PlayState.getSpeed();

    let refreshCanvas = function () {
        ctx.clearRect(0, 0, SNAKEBOARD.width, SNAKEBOARD.height);

        Food.draw();
        Snake.move();
        Snake.draw();
        Snake.foodEat();
        if (Snake.bodyEat() || Snake.clashWithWall()) {
            Game.stop();
            Modal.createWindow('losingWindow');
        }
    }

    return {
        start: function () {
            PlayState.reset();
            Snake.createNewSnake();

            interval = setInterval(() => {
                refreshCanvas();
                if (PlayState.getTime().min == 0 && PlayState.getTime().sec == 0) {
                    this.stop();
                    Modal.createWindow('summaryWindow')
                }
            }, speed);
        },

        restart: function () {
            Snake.createNewSnake();
            Food.setCoords();
            PlayState.reset();
        },

        pause: function () {
            clearInterval(interval);
            PlayState.stopTimer();
        },

        continue: function () {
            interval = setInterval(() => {
                refreshCanvas();
            }, speed);

            PlayState.startTimer();
        },

        stop: function() {
            btnStart.dataset.gameState = 'start';
            PlayState.stopTimer();
            clearInterval(interval);
            Snake.createNewSnake();
            Food.setCoords();
        },
    }
})();