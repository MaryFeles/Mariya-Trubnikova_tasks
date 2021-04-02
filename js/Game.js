let Game = (function () {
    let speed = PlayState.getSpeed();

    let refreshGame = function () {
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

        if (PlayState.getTime().min <= 0 && PlayState.getTime().sec <= 0) {
            Game.stop();
            Modal.createWindow('summaryWindow');
        }

        console.log(interval.intervals);
    }

    return {
        start: function () {
            PlayState.setState('start');
            PlayState.reset();
            Snake.createNewSnake();

            interval.make(() => refreshGame(), speed);

            Food.placeFood();
        },

        restart: function () {
            PlayState.setState('restart');
            Snake.createNewSnake();
            
            interval.clearAll();

            PlayState.setState('start');
            PlayState.reset();
            interval.make(() => refreshGame(), speed);
            Food.placeFood();
        },

        pause: function () {
            interval.clearAll();
            PlayState.setState('pause');
        },

        continue: function () {
            interval.clearAll();

            PlayState.setState('start');
            interval.make(() => refreshGame(), speed);
            Food.placeFood();
            PlayState.startTimer();
        },

        stop: function () {
            PlayState.setState('stop');
            btnStart.dataset.gameState = 'start';
            btnPause.disabled = true;

            interval.clearAll();
            Snake.createNewSnake();            
        },
    }
})();