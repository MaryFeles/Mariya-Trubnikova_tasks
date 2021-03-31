let Game = (function () {
    let interval;
    let speed = PlayState.getSpeed();

    let refreshGame = function () {
        clearInterval(interval);
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

        speed = PlayState.getSpeed();

        interval = setInterval(() => refreshGame(), speed);
    }

    return {
        start: function () {
            PlayState.setState('start');
            PlayState.reset();
            Snake.createNewSnake();

            interval = setInterval(() => {
                refreshGame();

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
            interval = setInterval(() => refreshGame(), speed);

            PlayState.startTimer();
        },

        stop: function () {
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