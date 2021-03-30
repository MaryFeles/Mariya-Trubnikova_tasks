let Modal = (function () {
    let modal = {
        welcomWindow: {
            content: "Цель игры: за выделенное время собрать максимальное количество еды (красные кружки). Управление осуществляется стрелками на клавиатуре.",
            buttonText: "Начать",
            modifier: "welcomWindow",
        },
        summaryWindow: {
            content: "Время вышло! Ваш счет: ",
            buttonText: "Закрыть",
            modifier: "summaryWindow",
        },
        losingWindow: {
            content: "Вы проиграли!",
            buttonText: "Закрыть",
            modifier: "loseWindow",
        }
    };

    let _gameContainer = document.querySelector('.game-container');

    let toggleCover = function () {
        let _cover = document.querySelector('.cover');

        if (_cover.dataset.cover == 'opened') {
            _cover.dataset.cover = 'hidden';
        } else _cover.dataset.cover = 'opened';
    };

    let createHtml = function (content, buttonText, modifier) {
        let _modal = document.createElement("div");
        _modal.classList.add('modal');
        _modal.innerHTML = `
            <div class="modal__content">${content}</div>
            <button class="btn modal__btn modal__btn--${modifier}" onclick="Modal.close()">${buttonText}</button>
        `;
        document.body.insertBefore(_modal, _gameContainer);
        toggleCover();
    };

    return {
        createWindow: function (type) {
            let content = '';
            let buttonText = '';
            let modifier = '';

            if (type == 'welcomWindow') {
                content = modal.welcomWindow.content;
                buttonText = modal.welcomWindow.buttonText;
                modifier = modal.welcomWindow.modifier;
                
            } else if (type == 'summaryWindow') {
                buttonText = modal.summaryWindow.buttonText;
                modifier = modal.summaryWindow.modifier;

                if (PlayState.getScore() < 5) {
                    content = modal.summaryWindow.content + PlayState.getScore() + ". <br/> Pезультат оставляет желать лучшего...";
                } else if (PlayState.getScore() >= 5 && PlayState.getScore() <= 20) {
                    content = "Поздравляю! Вы набрали " + PlayState.getScore() + " очков!";
                } else modal.summaryWindow.content + PlayState.getScore();

            } else if (type == 'losingWindow') {
                content = modal.losingWindow.content;
                buttonText = modal.losingWindow.buttonText;
                modifier = modal.losingWindow.modifier;
            }

            createHtml(content, buttonText, modifier);
        },

        close: function () {
            let _modal = document.querySelector('.modal');
            _modal.remove();
            toggleCover();
        },
    }
})();

Modal.createWindow('welcomWindow');

