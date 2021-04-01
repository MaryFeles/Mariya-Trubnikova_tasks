let Food = (function () {
    //let interval;

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
            interval: 1200,
        },
    };

    return {
        getCoords: function (foodType) {
            return food[foodType].coords;
        },

        setCoords: function () {
            let foodList = this.getFoodList();

            foodList.forEach(foodType => {
                food[foodType].coords = getRandomCoord();
            });
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
            this.setCoords();

            if (PlayState.getState() == 'start') {
                let foodList = this.getFoodList();

                foodList.forEach(foodType => {
                    let setNewCoords = function () {
                        food[foodType].coords = getRandomCoord();
                    };

                    interval.make(() => setNewCoords(), food[foodType].interval);
                });
            } else {
                interval.clearAll();
            };
        },

        stopRendering: function () {
            interval.clearAll();
        },
    }
})();

