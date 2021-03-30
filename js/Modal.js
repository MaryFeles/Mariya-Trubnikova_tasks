
let Modal = (function () {

    let modal = {
        welcomWindow: {
            content: "Цель игры: за выделенное время собрать максимальное количество еды (красные кружочки). Управление осуществляется стрелками на клавиатуре.",
            buttonText: "Начать"
        },
        pauseWindow: {
            content: "ПАУЗА",
            buttonText: "Продолжить"
        },
        summaryWindow: {
            content: "Ваш счет: " + PlayState.getScore(),
            buttonText: "Закрыть"
        }
    };

    let gameContainer = document.querySelector('.game-container');

    return {
        createHtml: function (content, buttonText) {
            let modalHtml = document.createElement("div");
            modalHtml.classList.add('modal');
            modalHtml.innerHTML = `<div class="modal__content">${content}</div><button class="btn modal__btn">${buttonText}</button>`;
            document.body.insertBefore(modalHtml, gameContainer);
        },

        createWindow: function (type) {
            let content = '';
            let buttonText = '';

            if (type == 'welcomWindow') {
                content = modal.welcomWindow.content;
                buttonText = modal.welcomWindow.buttonText;
            } else if (type == 'pauseWindow') {
                content = modal.pauseWindow.content;
                buttonText = modal.pauseWindow.buttonText;
            } else if (type == 'summaryWindow') {
                content = modal.summaryWindow.content;
                buttonText = modal.summaryWindow.buttonText;
            }

            this.createHtml(content, buttonText);
        },

        close: function () {
            let modal = document.querySelector('.modal');

            modal.remove();
        },
    }
})();

let modalBtn = document.querySelector('.modal__btn');
modalBtn.addEventListener('click', Modal.close)