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


let btnStart = document.querySelector('.btn__game-state--start');
let btnPause = document.querySelector('.btn__game-state--pause');

btnStart.addEventListener('click', function () {
    if (btnStart.dataset.gameState === 'start') {
        Game.start();

        btnStart.dataset.gameState = 'restart';
        btnStart.innerHTML = "Начать заново";

        btnPause.disabled = false;
    } else if (btnStart.dataset.gameState === 'restart') {
        Game.restart();
        if (btnPause.dataset.gameState === 'continue') {
            Game.start();
            btnPause.dataset.gameState = 'pause';
            btnPause.innerHTML = "Пауза";
        }
    }
});

btnPause.addEventListener('click', function () {
    if (btnPause.dataset.gameState === 'pause') {
        Game.pause();

        btnPause.dataset.gameState = 'continue';
        btnPause.innerHTML = "Продолжить";

    } else if (btnPause.dataset.gameState === 'continue') {
        Game.continue();

        btnPause.dataset.gameState = 'pause';
        btnPause.innerHTML = "Пауза";
    }
});