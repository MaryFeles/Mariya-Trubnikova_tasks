const SNAKEBOARD = document.getElementById('gameCanvas');
const ctx = SNAKEBOARD.getContext('2d');

const CELL_SIZE = 16;

const CELLS_HORIZONTALLY = SNAKEBOARD.width / CELL_SIZE;
const CELLS_VERTICALLY = SNAKEBOARD.height / CELL_SIZE;

function getRandomCoord() {
    let x = Math.floor(Math.random() * (CELLS_HORIZONTALLY - 1)) * CELL_SIZE;
    let y = Math.floor(Math.random() * (CELLS_VERTICALLY - 1)) * CELL_SIZE;
    return { x, y }
}

document.addEventListener('keydown', function (event) {
    Snake.setDirection(event.key);
});

let gameState = {
    start: false,
    pause: false,
    score: 0,
    time: 30
}


let Game = (function () {
    let interval;

    return {
        start: function () {            
            interval = setInterval(() => {
                ctx.clearRect(0, 0, SNAKEBOARD.width, SNAKEBOARD.height);

                Food.draw();

                Snake.move();
                Snake.draw();
                Snake.checkFoodEating();

                if (Snake.checkBodyEating()){
                    this.restart();
                    console.log('restart');

                }
                //console.log(Snake.checkBodyEating());

            }, 500);
        },

        restart: function () {
            Snake.createNewSnake();
            food = getRandomCoord();
            console.log('restart')
        },

        pause: function () {            
            clearInterval(interval);
        },

        continue: function() {
            this.start();
        }
    }
})();


let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.dataset.gameState === 'start') {
            Snake.createNewSnake();
            Game.start();

            btn.classList.add('btn--restart')
            btn.dataset.gameState = 'restart';
            btn.innerHTML = "Начать заново";
            console.log('Start game')

        } else if (btn.dataset.gameState === 'restart') {
            Game.restart();

            btn.classList.add('btn--restart')
            btn.dataset.gameState = 'restart';
            console.log('Reset game')

        } else if (btn.dataset.gameState === 'pause') {
            Game.pause();


            btn.classList.add('btn--pause')
            btn.dataset.gameState = 'continue';
            btn.innerHTML = "Продолжить";
            console.log('Pause game')

        } else if (btn.dataset.gameState === 'continue') {
            Game.continue();

            btn.classList.add('btn--continue')
            btn.dataset.gameState = 'pause';
            btn.innerHTML = "Пауза";
            console.log('Continue game')
        }
    })
});