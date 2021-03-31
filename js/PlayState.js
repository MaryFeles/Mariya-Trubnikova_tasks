let PlayState = (function () {    
    const MINUTES = 0;
    const SECONDS = 10;
    const NORMAL_GAME_SPEED = 500;
    const INCREASED_GAME_SPEED = 100;
    const DECREASED_GAME_SPEED = 1000;

    let _score = document.querySelector('.score');
    let _timer = document.querySelector('.timer');

    let timerInterval;

    let playState = {
        game: 'stop',
        score: 0,
        timer: {
            min: MINUTES,
            sec: SECONDS
        },
        gameSpeed: NORMAL_GAME_SPEED,
    };

    return {
        reset: function () {
            this.stopTimer();

            playState.score = 0;
            playState.timer.min = MINUTES;
            playState.timer.sec = SECONDS;

            _score.textContent = playState.score;

            this.setTimer();
            this.startTimer();
        },

        setTimer: function () {
            let min = playState.timer.min;
            let sec = playState.timer.sec;
            _timer.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        },

        increaseScore: function () {
            playState.score++;
            _score.textContent = playState.score;
        },

        increaseSpeed: function () {
            // setTimeout(() => {
            //     PlayState.gameSpeed = normalGameSpeed;
            // }, 10000);

            PlayState.gameSpeed = INCREASED_GAME_SPEED;
        },

        decreaseSpeed: function () {
            // setTimeout(() => {
            //     PlayState.gameSpeed = normalGameSpeed;
            // }, 10000);

            PlayState.gameSpeed = DECREASED_GAME_SPEED;
        },

        getScore: function () {
            return playState.score;
        },

        getSpeed: function () {
            return playState.gameSpeed;
        },

        getTime: function () {
            return playState.timer;
        },

        startTimer: function () {
            let min = playState.timer.min;
            let sec = playState.timer.sec;

            timerInterval = setInterval(() => {
                sec--;

                if (sec == 0 && min > 0) {
                    min--;
                    sec = 60;
                }

                if (min == 0 && sec == 0) {
                    this.stopTimer();
                }

                
                playState.timer.min = min;
                playState.timer.sec = sec;

                this.setTimer();
            }, 1000);



        },

        stopTimer: function () {
            clearInterval(timerInterval);
        },

        setState: function(state) {
            playState.game = state;
        },

        getState: function(state) {
            return playState.game;
        },
    }
})();