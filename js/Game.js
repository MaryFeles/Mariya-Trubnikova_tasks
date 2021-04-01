let Game = (function () {
    //let interval;
    let speed = PlayState.getSpeed();

    let refreshGame = function () {
        //clearInterval(interval);
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

        // interval = setInterval(() => {
        //     refreshGame();                
        // }, speed);

        console.log(interval.intervals);
    }

    return {
        start: function () {
            //clearInterval(interval);
            //Food.stopRendering();
            PlayState.setState('start');
            PlayState.reset();
            Snake.createNewSnake();

            // interval = setInterval(() => {
            //     refreshGame();                
            // }, speed);

            interval.make(() => refreshGame(), speed);

            Food.placeFood();
        },

        restart: function () {
            PlayState.setState('restart');
            Snake.createNewSnake();
            PlayState.reset();
            Food.stopRendering();

            PlayState.setState('start');
            interval.make(() => refreshGame(), speed);
            Food.placeFood();
        },

        pause: function () {
            Food.stopRendering();
            PlayState.setState('pause');
            PlayState.stopTimer();
        },

        continue: function () {
            Food.stopRendering();
            PlayState.setState('start');

            //interval = setInterval(() => refreshGame(), speed);

            interval.make(() => refreshGame(), speed);
            Food.placeFood();
            PlayState.startTimer();
        },

        stop: function () {
            PlayState.setState('stop');
            btnStart.dataset.gameState = 'start';
            btnPause.disabled = true;
            PlayState.stopTimer();
            //clearInterval(interval);
            Snake.createNewSnake();

            Food.stopRendering();
        },
    }
})();