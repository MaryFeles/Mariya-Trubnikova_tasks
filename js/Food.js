let Food = (function () {
    let food = {
        plusScore: {
            coords: getRandomCoord(),
            color: '#ff0000',
            interval: 10000,
        },

        plusSpeed: {
            coords: getRandomCoord(),
            color: '#00ff00',
            interval: 5500,
        },

        minusSpeed: {
            coords: getRandomCoord(),
            color: '#0000ff',
            interval: 2200,
        },
    };

    return {
        getCoords: function (foodType) {
            return food[foodType].coords;
        },

        setCoords: function (foodType) {
            food[foodType].coords = getRandomCoord();
        },

        getFoodList: function () {
            let foodList = [];

            for (let prop in food) {
                foodList.push(prop);
            }

            return foodList;
        },

        draw: function (foodType) {
            let coords = food[foodType].coords;

            ctx.fillStyle = food[foodType].color;
            ctx.beginPath();
            ctx.arc(coords.x + CELL_SIZE / 2, coords.y + CELL_SIZE / 2, CELL_SIZE / 2 - 2, 0, 2 * Math.PI);
            ctx.fill();
        },

        placeFood: function () {
            let interval;

            if (PlayState.getState() == 'start') {
                let foodList = this.getFoodList();
                foodList.forEach(foodType => {
                    interval = setInterval(() => {
                        food[foodType].coords = getRandomCoord();
                    }, food[foodType].interval);
                });
            } else clearInterval(interval);
        },
    }
})();

