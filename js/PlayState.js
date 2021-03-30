let PlayState = (function () {
    let _score = document.querySelector('.score');
    let _timer = document.querySelector('.timer');

    let timerInterval;

    let playState = {
        score: 0,
        timer: {
            min: 0,
            sec: 15
        },
        speed: 500,
    };

    return {
        reset: function () {
            this.stopTimer();

            playState.score = 0;
            playState.timer.min = 0;
            playState.timer.sec = 15;

            _score.textContent = playState.score;
            this.setTimer(playState.timer.min, playState.timer.sec);

            this.startTimer();
        },

        setTimer: function (min, sec) {
            _timer.textContent = (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
        },

        increaseScore: function () {
            playState.score++;
            _score.textContent = playState.score;
        },

        increaseTime: function () {
            if (_timer.classList.contains('penalty-time')) {
                _timer.classList.add('bonus-time');
                _timer.classList.remove('penalty-time');
            }

            playState.timer += 5;
            _timer.textContent = "+5";
        },

        decreaseTime: function () {
            if (_timer.classList.contains('bonus-time')) {
                _timer.classList.add('penalty-time');
                _timer.classList.remove('bonus-time');
            }

            playState.timer -= 5;
            _timer.textContent = "-5";
        },

        increaseSpeed: function () {

        },

        decreaseSpeed: function () {

        },

        getScore: function () {
            return playState.score;
        },

        getSpeed: function () {
            return playState.speed;
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

                this.setTimer(min, sec);
                playState.timer.min = min;
                playState.timer.sec = sec;
            }, 1000);



        },

        stopTimer: function () {
            clearInterval(timerInterval);
        },
    }
})();