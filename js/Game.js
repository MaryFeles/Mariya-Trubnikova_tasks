let Game = (function () {
    let interval;
    let speed = PlayState.getSpeed();

    let refreshCanvas = function () {
        ctx.clearRect(0, 0, SNAKEBOARD.width, SNAKEBOARD.height);

        Snake.move();
        Snake.draw();
        Snake.foodEat();
        if (Snake.bodyEat() || Snake.clashWithWall()) {
            Game.stop();
            Modal.createWindow('losingWindow');
        }

        Food.draw('plusSpeed');
        Food.draw('minusSpeed');
        Food.draw('plusScore');

        console.log(speed);
        speed = PlayState.getSpeed();

    }

    return {
        start: function () {
            PlayState.setState('start');
            PlayState.reset();
            Snake.createNewSnake();

            interval = setInterval(() => {
                refreshCanvas();
                if (PlayState.getTime().min <= 0 && PlayState.getTime().sec <= 0) {
                    this.stop();
                    Modal.createWindow('summaryWindow')
                }
            }, speed);

            Food.placeFood();
        },

        restart: function () {
            PlayState.setState('start');
            Snake.createNewSnake();
            PlayState.reset();
        },

        pause: function () {
            PlayState.setState('pause')
            clearInterval(interval);
            PlayState.stopTimer();
        },

        continue: function () {
            PlayState.setState('start');
            interval = setInterval(() => {
                refreshCanvas();
            }, speed);

            PlayState.startTimer();
        },

        stop: function() {
            PlayState.setState('stop');
            btnStart.dataset.gameState = 'start';
            btnPause.disabled = true;

            PlayState.stopTimer();
            clearInterval(interval);
            Snake.createNewSnake();

            Food.placeFood();
        },
    }
})();