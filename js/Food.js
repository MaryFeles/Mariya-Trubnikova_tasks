let Food = (function () {
    let food = getRandomCoord();

    return {
        setCoords: function(){
            food = getRandomCoord();
        },

        getCoords: function () {
            return food;
        },

        draw: function () {
            ctx.fillStyle = '#ff4000';
            ctx.beginPath();
            ctx.arc(food.x + CELL_SIZE / 2, food.y + CELL_SIZE / 2, CELL_SIZE / 2 - 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
})();
