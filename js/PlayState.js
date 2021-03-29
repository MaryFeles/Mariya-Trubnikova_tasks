let PlayState = (function () {
    let score = document.querySelector('.score');
    let timer = document.querySelector('.timer');

    let playState = {
        score: 0,
        timer: 30,
        speed: 500,
    };

    return {
        increaseScore: function () {
            playState.score++;
            score.innerHTML = playState.score;
        },

        increaseTime: function () {
            if (timer.classList.contains('penalty-time')) {
                timer.classList.add('bonus-time');
                timer.classList.remove('penalty-time');
            }

            playState.timer += 5;
            timer.innerHTML = "+5";
        },

        decreaseTime: function () {
            if (timer.classList.contains('bonus-time')) {
                timer.classList.add('penalty-time');
                timer.classList.remove('bonus-time');
            }

            playState.timer -= 5;
            timer.innerHTML = "-5";
        },

        increaseSpeed: function() {

        },

        decreaseSpeed: function() {

        },

    }
})();



